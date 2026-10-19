export default function CareerPage() {
  return (
    <main>
      <div id="navbar-placeholder"></div>

      <div className="main-title">
        <h1>
          Apakah kamu <br /> bersemangat dan <br /> siap gabung bersama kita?
        </h1>
        <img src="/Images/barista.jpg" alt="kopi2" width="350" height="350" />
      </div>

      <div className="team">
        <div className="team-story">
          <div className="team-story-text">
            <h1>Our team was made by love</h1>
            <p>
              Semua berawal dari secangkir kopi dan obrolan panjang yang nggak
              ada habisnya. Dari situ, kita sadar bikin kopi enak aja nggak
              cukup, harus ada rasa dan cerita di setiap cangkirnya. Sekarang,
              tim kami tumbuh jadi keluarga kecil yang saling dukung, saling
              belajar, dan tetap semangat ngulik resep baru tiap hari. Kalau
              kamu ke sini, kamu nggak cuma ngerasain kopi kamu ngerasain hasil
              kerja keras dan cinta dari orang-orang di baliknya.
            </p>
          </div>
          <img
            src="/Images/Latte Art.jpg"
            alt="barista"
            width="150"
            height="150"
          />
        </div>
      </div>

      <div className="lowongan">
        <div className="lowongan-container">
          <table className="lowongan-table">
            <thead>
              <tr>
                <th>Job title</th>
                <th>Department</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barista – Part-time</td>
                <td>Operation</td>
                <td>Jakarta - BINUS</td>
              </tr>
              <tr>
                <td>Barista – Part-time</td>
                <td>Operation</td>
                <td>Bandung - ITB</td>
              </tr>
              <tr>
                <td>Barista – Part-time</td>
                <td>Operation</td>
                <td>Depok - UI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="btn-elevator" data-target="#navbar-placeholder">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </main>
  );
}
