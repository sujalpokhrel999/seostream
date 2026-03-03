import { Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
    <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;