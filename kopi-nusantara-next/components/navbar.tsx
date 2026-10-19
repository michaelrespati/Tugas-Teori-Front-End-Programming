import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg d-flex align-items-center justify-content-between w-100 px-3 px-md-5">
      <div className="logo d-flex align-items-center">
        <Link href="/">
          <img src="/Images/cafe.jpg" alt="coffee logo" width="50" height="50"className="custom-logo rounded-circle"/>
        </Link>
      </div>

      <ul className="list-unstyled d-flex align-items-center m-0 custom-gap">
        <li>
          <Link href="/" className="link text-decoration-none rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu" className="link text-decoration-none rounded">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/career" className="link text-decoration-none rounded">
            Karir
          </Link>
        </li>
        <li>
          <Link href="/profil" className="link text-decoration-none rounded">
            Profil Saya
          </Link>
        </li>
      </ul>
    </nav>
  );
}