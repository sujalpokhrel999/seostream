// /api/proxy.js
export default async function handler(req, res) {
    const { url } = req.query;
  
    if (!url) return res.status(400).send('URL is required');
  
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0' }
      });
      const html = await response.text();
      
      // This allows your React frontend to read the data
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send(html);
    } catch (error) {
      res.status(500).send('Error fetching page');
    }
  }