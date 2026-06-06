import logo from './assets/logo.png'
import './header.css'

const links = ['HOME', 'SHOP', 'ABOUT', 'CONTACT', 'REVIEWS']

function Header() {
  return (
    <header className="site-header" aria-label="Site header">
      <div className="header-top">
        <a className="header-logo-link" href="/" aria-label="King Lake Cakes home">
          <img className="header-logo" src={logo} alt="King Lake Cakes" />
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link}
              className={link === 'HOME' ? 'is-active' : undefined}
              href={`#${link.toLowerCase()}`}
              aria-current={link === 'HOME' ? 'page' : undefined}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="header-icon-button" type="button" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12.25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              <path d="M4.75 20.25a7.25 7.25 0 0 1 14.5 0" />
            </svg>
          </button>

          <button className="header-icon-button" type="button" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.75 5.25h2.6l1.35 9.3a2 2 0 0 0 1.98 1.7h7.6a2 2 0 0 0 1.96-1.62l1.07-5.38H7.05" />
              <path d="M9.5 20.25h.01" />
              <path d="M17.5 20.25h.01" />
            </svg>
          </button>

          <button className="order-button" type="button">
            Order Now
          </button>
        </div>
      </div>

      <div className="header-bottom">
        <label className="header-search" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m20 20-4.35-4.35" />
            <circle cx="10.75" cy="10.75" r="6.75" />
          </svg>
          <input type="search" placeholder="Search" />
        </label>

        <button className="explore-menu-button" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3.75h10a1 1 0 0 1 1 1v15.5H6V4.75a1 1 0 0 1 1-1Z" />
            <path d="M9 7.75h6" />
            <path d="M9 11.25h6" />
            <path d="M9 14.75h3" />
            <path d="M6 20.25h12" />
          </svg>
          <span>Explore Menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header
