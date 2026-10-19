export default function Footer() {
  return (
    <footer className="footer-bg py-4 text-center">
      <div className="container footer-content">
        <h3 className="mt-2 mb-1 fs-4 footer-font-color fw-bold">Kelompok 7</h3>
        <p className="mt-1 mb-2 footer-font-color fs-6">Kopi Nusantara</p>

        <div className="d-flex justify-content-center gap-3 my-3">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="/Images/icons8-linkedin-30.png" alt="linkedin-logo" width="30" height="30" />
          </a>
          <a href="https://github.com/cakethehuman/Frontend-kel-7" target="_blank" rel="noreferrer">
            <img src="/Images/icons8-github-30.png" alt="github-logo" width="30" height="30" />
          </a>
        </div>

        <p className="opacity-75 mt-2 footer-font-color mb-0 small">
          © 2026 UNLELE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}