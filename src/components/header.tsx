import Link from "next/link"


export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link href="index.html" className="logo d-flex align-items-center">
          <h1 className="sitename">GRECOM</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link href="#hero" className="active">Acceuil</Link></li>
            <li><Link href="#about">A propos</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#portfolio">Produits</Link></li>
            {/* <li><Link href="#team">Team</Link></li> */}
            <li><Link href="#recent-posts">Actualité</Link></li>
            {/* <li className="dropdown">
              <Link href="#">
                <span>Dropdown</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link href="#">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li><Link href="#">Deep Dropdown 1</Link></li>
                    <li><Link href="#">Deep Dropdown 2</Link></li>
                    <li><Link href="#">Deep Dropdown 3</Link></li>
                    <li><Link href="#">Deep Dropdown 4</Link></li>
                    <li><Link href="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link href="#">Dropdown 2</Link></li>
                <li><Link href="#">Dropdown 3</Link></li>
                <li><Link href="#">Dropdown 4</Link></li>
              </ul>
            </li> */}
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>
    </header>
  )
}