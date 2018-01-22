import Link from 'next/link';

const Breadcrumbs = (props) => (
  <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
            <Link href="/Category"><a className="nav-link">Category</a></Link>
            <Link href="/About"><a className="nav-link">About</a></Link>
            <Link href="/Stars"><a className="nav-link">Stars</a></Link>
            <Link href="/DynamicPage"><a className="nav-link">DynamicPage</a></Link>
          </li>
        </ul>
  </nav>
);

export default Breadcrumbs;