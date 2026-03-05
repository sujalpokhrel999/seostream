import React, { useState } from 'react';
import '../Assets/css/SocialPreviewPage.css';

// ─── Constants ────────────────────────────────────────────────────────────────

const PLATFORM_LIMITS = {
  facebook:  { title: 60,  desc: 160 },
  twitter:   { title: 70,  desc: 200 },
  linkedin:  { title: 119, desc: 200 },
};

const REQUIRED_OG_TAGS = [
  { key: 'title',       label: 'og:title',       required: true  },
  { key: 'description', label: 'og:description',  required: true  },
  { key: 'image',       label: 'og:image',        required: true  },
  { key: 'url',         label: 'og:url',          required: true  },
  { key: 'type',        label: 'og:type',         required: false },
  { key: 'site_name',   label: 'og:site_name',    required: false },
  { key: 'locale',      label: 'og:locale',       required: false },
];

const REQUIRED_TWITTER_TAGS = [
  { key: 'card',        label: 'twitter:card',        required: true  },
  { key: 'title',       label: 'twitter:title',       required: false },
  { key: 'description', label: 'twitter:description', required: false },
  { key: 'image',       label: 'twitter:image',       required: false },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function computeScore(og, twitter) {
  const required = ['title', 'description', 'image', 'url'];
  const present = required.filter(k => og[k]).length;
  const hasTwitter = !!twitter.card;
  const total = required.length + 1;
  const score = present + (hasTwitter ? 1 : 0);
  return { score, total, pct: Math.round((score / total) * 100) };
}

function getPlatformWarnings(display, platform, selectedType, seo) {
  const warnings = [];

  if (!display.image) {
    warnings.push({ type: 'warn', text: 'No og:image found — most platforms will show a blank card.' });
  }

  if (platform === 'twitter') {
    const card = seo.twitter?.card;
    if (!card) {
      warnings.push({ type: 'warn', text: 'No twitter:card meta tag detected. Twitter will show a plain link.' });
    } else if (card === 'summary' && selectedType !== 'website') {
      warnings.push({ type: 'info', text: 'twitter:card is "summary" — showing compact layout.' });
    }
  }

  if (platform === 'facebook' && display.title?.length > 60) {
    warnings.push({ type: 'warn', text: `Title is ${display.title.length} chars — Facebook may truncate after 60.` });
  }

  if (platform === 'linkedin' && !seo.og?.site_name) {
    warnings.push({ type: 'info', text: 'og:site_name missing — LinkedIn shows domain instead.' });
  }

  return warnings;
}

function CharPill({ label, length, limit }) {
  const cls = length === 0 ? '' : length > limit ? 'over' : 'ok';
  return (
    <span className={`sp-char-pill ${cls}`}>
      {label}: {length}/{limit}
    </span>
  );
}

// ─── Panel: OG Tags ───────────────────────────────────────────────────────────

function OGTagsPanel({ og, twitter }) {
  const [copied, setCopied] = useState(null);

  const copyVal = (key, val) => {
    navigator.clipboard?.writeText(val).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  const allTags = [
    ...Object.entries(og).map(([k, v]) => ({ prefix: 'og', key: k, val: v })),
    ...Object.entries(twitter).map(([k, v]) => ({ prefix: 'twitter', key: k, val: v })),
  ];

  if (allTags.length === 0) {
    return (
      <div className="sp-panel-empty">
        <div className="sp-panel-empty-icon">🏷️</div>
        <span>No OG or Twitter tags found</span>
      </div>
    );
  }

  return (
    <div>
      {og && Object.keys(og).length > 0 && (
        <>
          <div className="panel-section-label">Open Graph</div>
          <div className="tag-list">
            {Object.entries(og).map(([k, v]) => (
              <div key={`og:${k}`} className="tag-item">
                <div className="tag-item-head">
                  <span className="tag-key">og:{k}</span>
                  <button
                    className={`tag-copy-btn ${copied === `og:${k}` ? 'copied' : ''}`}
                    onClick={() => copyVal(`og:${k}`, v)}
                  >
                    {copied === `og:${k}` ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <span className="tag-val">{v}</span>
                {k === 'image' && v && (
                  <img
                    src={v} alt="OG preview"
                    className="tag-img-preview"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {twitter && Object.keys(twitter).length > 0 && (
        <>
          <div className="panel-section-label" style={{marginTop:16}}>Twitter / X</div>
          <div className="tag-list">
            {Object.entries(twitter).map(([k, v]) => (
              <div key={`tw:${k}`} className="tag-item">
                <div className="tag-item-head">
                  <span className="tag-key">twitter:{k}</span>
                  <button
                    className={`tag-copy-btn ${copied === `tw:${k}` ? 'copied' : ''}`}
                    onClick={() => copyVal(`tw:${k}`, v)}
                  >
                    {copied === `tw:${k}` ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <span className="tag-val">{v}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Panel: Missing Tags Checklist ────────────────────────────────────────────

function ChecklistPanel({ og, twitter }) {
  const icon = { present: '✓', absent: '✗', optional: '○' };

  return (
    <div>
      <div className="panel-section-label">Open Graph</div>
      <div className="missing-list">
        {REQUIRED_OG_TAGS.map(t => {
          const has = !!og[t.key];
          const cls = has ? 'present' : t.required ? 'absent' : 'optional';
          return (
            <div key={t.label} className={`missing-item ${cls}`}>
              <span className="missing-check">{icon[cls]}</span>
              <span className="missing-name">{t.label}</span>
              <span className="missing-badge">{has ? 'Found' : t.required ? 'Missing' : 'Optional'}</span>
            </div>
          );
        })}
      </div>

      <div className="panel-section-label" style={{marginTop:14}}>Twitter / X Card</div>
      <div className="missing-list">
        {REQUIRED_TWITTER_TAGS.map(t => {
          const has = !!twitter[t.key];
          const cls = has ? 'present' : t.required ? 'absent' : 'optional';
          return (
            <div key={t.label} className={`missing-item ${cls}`}>
              <span className="missing-check">{icon[cls]}</span>
              <span className="missing-name">{t.label}</span>
              <span className="missing-badge">{has ? 'Found' : t.required ? 'Missing' : 'Optional'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Platform Preview Cards ───────────────────────────────────────────────────

function FacebookCard({ display, selectedType }) {
  return (
    <div className={`fb-card ${selectedType}`}>
      {display.image
        ? <div className="fb-img" style={{backgroundImage:`url(${display.image})`}} />
        : <div className="fb-img-empty">No og:image</div>
      }
      <div className="fb-text">
        <div className="fb-domain">{display.domain.toUpperCase()}</div>
        <div className="fb-title">{display.title}</div>
        <div className="fb-desc">{display.description}</div>
      </div>
    </div>
  );
}

function TwitterCard({ display, selectedType }) {
  const isLarge = selectedType !== 'website';
  return (
    <div className={`tw-card ${isLarge ? 'summary_large_image' : 'summary'}`}>
      {display.image
        ? <div className="tw-img" style={{backgroundImage:`url(${display.image})`}} />
        : <div className="tw-img-empty">No image</div>
      }
      <div className="tw-text">
        <div className="tw-domain">{display.domain}</div>
        <div className="tw-title">{display.title}</div>
        {!isLarge && <div className="tw-desc">{display.description}</div>}
        {isLarge && <div className="tw-desc">{display.description}</div>}
      </div>
    </div>
  );
}

function LinkedInCard({ display, selectedType }) {
  return (
    <div className="li-card">
      {display.image
        ? <div className="li-img" style={{backgroundImage:`url(${display.image})`}} />
        : <div className="li-img-empty">No og:image</div>
      }
      <div className="li-text">
        <div className="li-title">{display.title}</div>
        <div className="li-domain">{display.domain} · {selectedType}</div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const SocialPreviewPage = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seo, setSeo] = useState(null);
  const [platform, setPlatform] = useState('facebook');
  const [selectedType, setSelectedType] = useState('website');
  const [activePanel, setActivePanel] = useState('tags');

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSeo(null);

try {
  new URL(url); 
} catch {
  setError('Please enter a valid URL (including https://)');
  setLoading(false);
  return;
}

    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error(`Server returned ${response.status}. Check the URL and try again.`);

      const html = await response.text();
      if (!html || html.trim().length < 50) throw new Error('No HTML content returned from the page.');

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const extractedSeo = {
        og: {},
        twitter: {},
        title: doc.querySelector('title')?.textContent?.trim() || '',
        description: doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
      };

      doc.querySelectorAll('meta[property^="og:"]').forEach(meta => {
        const key = meta.getAttribute('property').replace('og:', '');
        extractedSeo.og[key] = meta.getAttribute('content') || '';
      });

      doc.querySelectorAll('meta[name^="twitter:"]').forEach(meta => {
        const key = meta.getAttribute('name').replace('twitter:', '');
        extractedSeo.twitter[key] = meta.getAttribute('content') || '';
      });

      setSeo(extractedSeo);
      if (extractedSeo.og.type) setSelectedType(extractedSeo.og.type);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Display data with fallback chain
  const getDisplay = () => {
    if (!seo) return null;
    let hostname = '';
    try { hostname = new URL(url).hostname; } catch {}
    return {
      title:       seo.og.title || seo.twitter.title || seo.title || 'No Title Found',
      description: seo.og.description || seo.twitter.description || seo.description || 'No description available.',
      image:       seo.og.image || seo.twitter.image || '',
      domain:      hostname,
    };
  };

  const display = getDisplay();
  const limits = PLATFORM_LIMITS[platform];
  const scoreData = seo ? computeScore(seo.og, seo.twitter) : null;
  const scoreClass = scoreData
    ? scoreData.pct >= 80 ? 'good' : scoreData.pct >= 50 ? 'partial' : 'poor'
    : '';
  const warnings = display && seo ? getPlatformWarnings(display, platform, selectedType, seo) : [];

  const platforms = [
    { id: 'facebook', label: 'Facebook' },
    { id: 'twitter',  label: 'Twitter / X' },
    { id: 'linkedin', label: 'LinkedIn' },
  ];

  return (
    <div className="sp-page">
      <div className="sp-inner">

        {/* Header */}
        <header className="sp-header">
          <div className="sp-header-eyebrow">Social Card Visualizer</div>
          <h1>Preview how your page shares</h1>
          <p>Analyze Open Graph and Twitter Card tags across platforms</p>
        </header>

        {/* Form */}
        <div className="sp-form-wrap">
          <form onSubmit={handleAnalyze} className="sp-form">
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
              required
            />
            <button type="submit" className="sp-form-btn" disabled={loading}>
              {loading ? 'Scanning…' : 'Visualize'}
            </button>
          </form>
        </div>

        {/* Error */}
        {error && <div className="sp-error">⚠ {error}</div>}

        {/* Workspace */}
        {seo && display && (
          <div className="sp-workspace">

            {/* Toolbar */}
            <div className="sp-toolbar">
              <div className="sp-toolbar-left">

                {/* Platform tabs */}
                <div className="sp-group">
                  <div className="sp-group-label">Platform</div>
                  <div className="sp-platform-tabs">
                    {platforms.map(p => (
                      <button
                        key={p.id}
                        data-p={p.id}
                        className={`sp-platform-tab ${platform === p.id ? 'active' : ''}`}
                        onClick={() => setPlatform(p.id)}
                      >
                        <span className="tab-dot" />
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Score badge */}
              <div className="sp-toolbar-right">
                <div className={`sp-score-badge ${scoreClass}`}>
                  <span>OG Score</span>
                  <strong>{scoreData.score}/{scoreData.total}</strong>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="sp-body">

              {/* Stage */}
              <div className="sp-stage-wrap">
                <div className="sp-stage-label">{platform} preview</div>

                {platform === 'facebook' && <FacebookCard display={display} selectedType={selectedType} />}
                {platform === 'twitter'  && <TwitterCard  display={display} selectedType={selectedType} />}
                {platform === 'linkedin' && <LinkedInCard display={display} selectedType={selectedType} />}

                {/* Char counts */}
                <div className="sp-char-counts">
                  <CharPill label="Title"       length={display.title.length}       limit={limits.title} />
                  <CharPill label="Description" length={display.description.length} limit={limits.desc}  />
                </div>

                {/* Warnings */}
                {warnings.length > 0 && (
                  <div className="sp-warnings">
                    {warnings.map((w, i) => (
                      <div key={i} className={`sp-warning-item ${w.type}`}>
                        <span>{w.type === 'warn' ? '⚠' : 'ℹ'}</span>
                        <span>{w.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Side panel */}
              <div className="sp-panel">
                <div className="sp-panel-tabs">
                  <button
                    className={`sp-panel-tab ${activePanel === 'tags' ? 'active' : ''}`}
                    onClick={() => setActivePanel('tags')}
                  >
                    Raw Tags
                  </button>
                  <button
                    className={`sp-panel-tab ${activePanel === 'checklist' ? 'active' : ''}`}
                    onClick={() => setActivePanel('checklist')}
                  >
                    Checklist
                  </button>
                </div>
                <div className="sp-panel-body">
                  {activePanel === 'tags'
                    ? <OGTagsPanel og={seo.og} twitter={seo.twitter} />
                    : <ChecklistPanel og={seo.og} twitter={seo.twitter} />
                  }
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialPreviewPage;