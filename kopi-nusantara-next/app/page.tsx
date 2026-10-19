"use client";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Dari mana asal kopi Kopi Nusantara?",
      a: "Kopi Nusantara menggunakan biji kopi yang berasal dari berbagai daerah di Indonesia. Kami bekerja sama langsung dengan petani mitra untuk mendapatkan biji kopi berkualitas."
    },
    {
      q: "Apa jenis kopi yang tersedia?",
      a: "Kami menyediakan berbagai pilihan kopi Nusantara dengan karakteristik rasa yang berbeda. Pilihan kopi dapat disesuaikan dengan selera dan kebutuhan pelanggan."
    },
    {
      q: "Apakah kopi dijual dalam bentuk biji dan bubuk?",
      a: "Ya. Beberapa produk kopi kami tersedia dalam bentuk biji maupun bubuk sehingga pelanggan dapat memilih sesuai dengan metode penyeduhan yang digunakan."
    },
    {
      q: "Bagaimana Kopi Nusantara menjaga kesegaran kopi?",
      a: "Kami melakukan proses sangrai secara rutin dalam jumlah kecil setiap pekan di roastery kami. Hal ini dilakukan untuk menjaga aroma dan kualitas kopi tetap segar."
    },
    {
      q: "Apakah produk Kopi Nusantara sudah bersertifikat Halal?",
      a: "Ya. Produk, bahan baku, dan proses operasional Kopi Nusantara telah mendapatkan sertifikasi Halal secara resmi sebagai bagian dari komitmen kami terhadap keamanan dan kenyamanan pelanggan."
    },
    {
      q: "Bagaimana cara membeli produk Kopi Nusantara?",
      a: "Pelanggan dapat memilih produk kopi yang tersedia, menentukan jumlah yang diinginkan, kemudian melakukan pemesanan melalui saluran penjualan yang telah disediakan oleh Kopi Nusantara."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <div id="navbar-placeholder"></div>

      <div className="our-story py-5">
        <div className="container story-container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7 story-text">
              <h3>Dari Satu Teras Kecil, Untuk Seluruh Nusantara</h3>
              <p>
                Semuanya berawal pada tahun 2021, ketika Willson pulang dari perantauan membawa satu koper
                kecil berisi biji kopi dari Gayo, Toraja, dan Flores. Di teras rumahnya, ia menyeduh kopi
                untuk para tetangga. Rasa kopi itu melekat di hati tetangganya yang menginspirasi Willson untuk
                menciptakan suatu inovasi.
              </p>
              <p>
                Dari sinilah Willson yakin bahwa kopi Nusantara pantas dinikmati tanpa harus mahal atau rumit.
                Bersama Michael dan Angga, ia mengubah teras itu menjadi kedai, lalu menjadi rumah bagi para petani,
                roaster, dan barista yang mencintai kopi Indonesia.
              </p>
              <p>
                Kopi Nusantara juga dibangun dari kecintaan terhadap kopi Indonesia. Kami percaya bahwa setiap daerah
                memiliki karakter kopi yang berbeda dan menarik untuk dinikmati.
              </p>
              <p>
                Dari teras rumah hingga menjadi tempat berkumpul bagi para pecinta kopi, Kopi Nusantara terus berkembang dengan
                tetap mempertahankan prinsip sederhana: menggunakan biji kopi pilihan, menjaga kualitas rasa, dan menyajikan kopi
                dengan sepenuh hati.
              </p>
              <p>
                Bagi kami, kopi bukan hanya sebuah minuman. Kopi adalah bagian dari cerita, percakapan, dan momen yang
                dibagikan bersama.
              </p>
              <p>
                <i>Kini setiap cangkir Kopi Nusantara membawa satu cerita: tentang tanah yang subur, tangan petani yang sabar,
                  dan keramahan khas kita.</i>
              </p>

              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="stat-item p-2 rounded">
                    <h4>2021</h4>
                    <p>Tahun Berdiri</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item p-2 rounded">
                    <h4>12+</h4>
                    <p>Petani Mitra</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item p-2 rounded">
                    <h4>10rb+</h4>
                    <p>Cangkir per Bulan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <figure className="story-figure mb-0">
                <img src="/Images/Willson Ngopi.jpg" className="rounded shadow img-fluid" alt="Willson menyeduh kopi di teras kedai pertama" />
                <figcaption>Teras kedai pertama Kopi Nusantara, 2021.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <section className="jargon container py-5">
        <div className="section-header text-center mb-5">
          <h3>Dari Biji ke Cangkir</h3>
          <p>Komitmen kami menjaga kualitas di setiap tahapan, dari biji kopi pilihan hingga secangkir kopi yang sampai ke tangan Anda.</p>
          <p className="section-philosophy mt-3 mx-auto">Bagi kami, nama ini bukan sekadar judul. Ia menggambarkan filosofi bahwa secangkir kopi yang nikmat lahir dari perjalanan panjang yang tak boleh dilewati begitu saja—pemilihan biji terbaik, ketelitian dalam menyeduh, hingga sentuhan tangan barista yang berdedikasi. Setiap tahap sama pentingnya, sekecil apa pun itu.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 text-center">
              <img src="/Images/Biji Kopi Pilihan.jpg" className="card-img-top custom-card-img" alt="Biji Kopi Pilihan" />
              <div className="card-body px-4 pb-4">
                <h4 className="card-title custom-card-title mt-2 mb-3">Biji Kopi Pilihan</h4>
                <p className="card-text text-muted">Kami hanya menggunakan biji kopi arabika berstandar tinggi yang disangrai dengan presisi untuk rasa terbaik.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 text-center">
              <img src="/Images/Mesin Espresso.jpg" className="card-img-top custom-card-img" alt="Mesin Espresso Presisi" />
              <div className="card-body px-4 pb-4">
                <h4 className="card-title custom-card-title mt-2 mb-3">Diseduh dengan Cermat</h4>
                <p className="card-text text-muted">Setiap takaran dan waktu seduh diperhatikan dengan teliti agar konsistensi rasa kopi tetap terjaga di setiap cangkir.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 text-center">
              <img src="/Images/Latte Art.jpg" className="card-img-top custom-card-img" alt="Barista Profesional" />
              <div className="card-body px-4 pb-4">
                <h4 className="card-title custom-card-title mt-2 mb-3">Barista Profesional</h4>
                <p className="card-text text-muted">Kopi Nusantara diracik oleh para ahli yang memiliki dedikasi tinggi terhadap seni menyeduh kopi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="our-experts-says py-5">
        <div className="container">
          <div className="section-header text-center mb-5 ">
            <h3>Kata Para Ahli</h3>
            <p className="our-experts-says-text">Orang-orang di balik Kopi Nusantara yang selalu menjaga kualitas rasa dan pengalaman di setiap cangkir.</p>
          </div>

          <div className="expert-featured row align-items-center g-4 mb-5 text-center text-lg-start">
            <div className="col-12 col-lg-4">
              <figure className="expert-ceo-figure mb-0">
                <img src="/Images/CEO Kopi Nusantara.jpg" alt="Willson, Founder dan CEO Kopi Nusantara" />
                <figcaption><b>Willson Putra Hadinata</b><br />Founder &amp; CEO</figcaption>
              </figure>
            </div>
            <div className="col-12 col-lg-8">
              <p className="expert-quote-big">&quot;Kopi yang baik tidak pernah terburu-buru.
                Kami menunggu petani memanen di waktu terbaiknya, menunggu biji disangrai
                sampai matang sempurna, dan menunggu Anda menyeruputnya dengan tenang.
                Dari kedai teras sampai roastery sendiri, saya hanya punya satu janji, yakni
                setiap cangkir harus layak mewakili nama Nusantara.&quot;</p>

              <button type="button" className="btn btn-outline-light mt-2" data-bs-toggle="modal" data-bs-target="#ceoModal">
                Baca Kisah Lengkap
              </button>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="expert-card">
                <img className="expert-photo" src="/Images/Head Barista.jpg" alt="Louise, Head Barista" />
                <h4 className="card-title">Louise William</h4>
                <p className="expert-role">Head Barista &amp; Q Grader</p>
                <p className="expert-quote">&quot;Sekali mencicipi, Anda akan tahu ini bukan kopi biasa.
                  Ada karamel, ada rempah, ada rasa pulang di dalamnya.&quot;</p>
              </div>
            </div>
            <div className="col">
              <div className="expert-card">
                <img className="expert-photo" src="/Images/Koordinator Petani.jpg" alt="Angga, Koordinator Petani Mitra" />
                <h4 className="card-title">Angga Johanes Thesman</h4>
                <p className="expert-role">Koordinator Petani Mitra</p>
                <p className="expert-quote">&quot;Petani kami dibayar adil, dan itu terasa sampai ke biji.
                  Kopi terbaik lahir dari hati yang tenang.&quot;</p>
              </div>
            </div>
            <div className="col">
              <div className="expert-card">
                <img className="expert-photo" src="/Images/Head Roaster.jpg" alt="Michael, Head Roaster" />
                <h4 className="card-title">Michael Respati Sanjaya Ho</h4>
                <p className="expert-role">Head Roaster</p>
                <p className="expert-quote">&quot;Api sangrai kami atur detik demi detik, karena selisih satu menit
                  bisa berarti beda satu dunia rasa.&quot;</p>
              </div>
            </div>
            <div className="col">
              <div className="expert-card">
                <img className="expert-photo" src="/Images/Expresso Maker.jpg" alt="Chandra, Ahli Racikan Espresso" />
                <h4 className="card-title">Chandra</h4>
                <p className="expert-role">Ahli Racikan Espresso</p>
                <p className="expert-quote">&quot;Tidak ada resep rahasia. Yang ada hanya takaran tepat,
                  air bersih, dan kesabaran.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="ceoModal" tabIndex={-1} aria-labelledby="ceoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ceoModelLabel">Willson Putra Hadinata - Founder &amp; CEO</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
            </div>
            <div className="modal-body">
              <p>Willson memulai Kopi Nusantara dari teras rumahnya sendiri pada 2021. Berbekal biji kopi
                dari Gayo, Toraja, dan Flores, ia percaya bahwa kopi Nusantara pantas dinikmati siapa saja
                tanpa harus mahal atau rumit.</p>
              <p>Kini ia memimpin tim yang menaungi 12 petani mitra, roastery mandiri, dan barista bersertifikat,
                dengan satu prinsip yang tidak pernah berubah, yakni setiap cangkir harus layak mewakili nama Nusantara.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="halal-certified py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="halal-text col-12 col-lg-6 mb-4 mb-lg-0 pr-lg-5">
              <h3 className="mb-3">Halal Certified</h3>
              <p>Kenyamanan dan ketenangan pikiran Anda adalah prioritas kami. Seluruh produk, bahan baku, hingga proses operasional Kopi Nusantara telah disertifikasi Halal secara resmi.</p>
              <p>Sertifikat ini membuktikan komitmen kami dalam menyajikan produk dari bahan terbaik, yang diproses dengan standar kebersihan, keamanan pangan, dan syariat yang ketat.</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img src="/Images/Sertifikat Halal.jpeg" alt="Proses Kopi Halal" className="img-fluid custom-rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="milestone container py-5">
        <div className="section-header text-center mb-5">
          <h3>Milestone Kami</h3>
          <p>Perjalanan Kopi Nusantara dari waktu ke waktu.</p>
        </div>

        <input type="checkbox" id="toggle-milestone" className="toggle-checkbox" />

        <div className="milestone-timeline">
          <div className="timeline-item">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 timeline-content mb-3 mb-md-0">
                <div className="timeline-year">2021</div>
                <h4>Mulai Berdiri</h4>
                <p>Berawal dari kedai rumahan sederhana, kami mulai melayani komunitas pecinta kopi Nusantara di skala lokal.</p>
              </div>
              <div className="col-12 col-md-6 timeline-image">
                <img src="/Images/Angga dan Sahang.jpg" alt="Mulai Berdiri 2021" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 timeline-content mb-3 mb-md-0">
                <div className="timeline-year">2023</div>
                <h4>Sertifikasi Halal</h4>
                <p>Berhasil mengantongi sertifikasi Halal untuk semua produk untuk menjamin kualitas dan keamanan konsumen.</p>
              </div>
              <div className="col-12 col-md-6 timeline-image">
                <img src="/Images/2023.jpg" alt="Sertifikasi Halal 2023" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="timeline-item hidden-item">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 timeline-content mb-3 mb-md-0">
                <div className="timeline-year">2024</div>
                <h4>Cabang Kedua</h4>
                <p>Membuka cabang kedua dengan konsep kedai ramah lingkungan dan area terbuka hijau.</p>
              </div>
              <div className="col-12 col-md-6 timeline-image">
                <img src="/Images/2024.jpg" alt="Cabang Kedua 2024" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="timeline-item hidden-item">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 timeline-content mb-3 mb-md-0">
                <div className="timeline-year">2025</div>
                <h4>Roastery Mandiri</h4>
                <p>Membangun fasilitas pemanggangan biji kopi (roastery) mandiri untuk mengontrol kualitas secara penuh.</p>
              </div>
              <div className="col-12 col-md-6 timeline-image">
                <img src="/Images/2025.jpg" alt="Roastery Mandiri 2025" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="milestone-action text-center mt-5">
          <label htmlFor="toggle-milestone" className="btn-custom-primary" id="label-more">Tampilkan Lebih Banyak</label>
          <label htmlFor="toggle-milestone" className="btn-custom-primary" id="label-less">Tampilkan Lebih Sedikit</label>
        </div>
      </section>

      <div className="advantage py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h3>Kenapa Kopi Nusantara?</h3>
            <p>Bukan cuma soal rasa. Ini enam alasan pelanggan kami betah dan tidak pindah ke lain hati.</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            <div className="col">
              <div className="advantage-item">
                <h4>Langsung Dari Petani</h4>
                <p>Biji dibeli langsung dari 12 petani mitra dengan harga adil, tanpa perantara.</p>
              </div>
            </div>
            <div className="col">
              <div className="advantage-item">
                <h4>Sangrai Segar Tiap Pekan</h4>
                <p>Roastery mandiri kami menyangrai dalam jumlah kecil supaya aroma selalu segar.</p>
              </div>
            </div>
            <div className="col">
              <div className="advantage-item">
                <h4>Bersertifikat Halal</h4>
                <p>Bahan baku hingga proses operasional sudah tersertifikasi Halal secara resmi.</p>
              </div>
            </div>
            <div className="col">
              <div className="advantage-item">
                <h4>Harga Bersahabat</h4>
                <p>Kopi berkualitas mulai dari Rp18.000 per cangkir, cocok untuk ngopi setiap hari.</p>
              </div>
            </div>
            <div className="col">
              <div className="advantage-item">
                <h4>Kedai Ramah Lingkungan</h4>
                <p>Area terbuka hijau, sedotan kertas, dan ampas kopi yang kami olah jadi pupuk.</p>
              </div>
            </div>
            <div className="col">
              <div className="advantage-item">
                <h4 className="card-title">Barista Bersertifikat</h4>
                <p className="card-text">Setiap barista dilatih dan diuji agar rasa konsisten di semua cabang.</p>
              </div>
            </div>
          </div>

          <h4 className="compare-title">Kopi Nusantara vs Kedai Lain</h4>
          <div className="compare-wrap mx-auto rounded shadow-sm" style={{ maxWidth: "800px", overflow: "hidden" }}>
            <div className="table-responsive">
              <table className="table compare-table mb-0">
                <thead>
                  <tr>
                    <th>Aspek</th>
                    <th>Kopi Nusantara</th>
                    <th>Kedai Lain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asal Biji</td>
                    <td className="ya">Langsung dari petani mitra</td>
                    <td>Lewat perantara</td>
                  </tr>
                  <tr>
                    <td>Sangrai</td>
                    <td className="ya">Segar tiap pekan</td>
                    <td>Stok lama</td>
                  </tr>
                  <tr>
                    <td>Halal</td>
                    <td className="ya">Bersertifikat Resmi</td>
                    <td>Tidak selalu</td>
                  </tr>
                  <tr>
                    <td>Harga</td>
                    <td className="ya">Mulai dari Rp18.000</td>
                    <td>Cenderung lebih mahal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="testimoni section-padding py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h3>Apa Kata Mereka ?</h3>
            <p>Cerita dari mereka yang sudah jatuh cinta pada seduhan kami.</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card testimoni-card d-flex flex-column">
                <p className="testimoni-rating">&starf;&starf;&starf;&starf;&starf;</p>
                <p className="testimoni-text flex-grow-1">&quot;Es kopi susu gula aren-nya juara. Saya kerja seharian di sini dan tidak pernah kepikiran pindah kedai lain.&quot;</p>
                <div className="testimoni-user d-flex align-items-center gap-3">
                  <img src="/Images/Testimoni 1.jpg" alt="Testimoni pelanggan 1" />
                  <div>
                    <h4>Nicholas Tanaydi</h4>
                    <p>Programmer Gemini</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card testimoni-card d-flex flex-column">
                <p className="testimoni-rating">&starf;&starf;&starf;&starf;&starf;</p>
                <p className="testimoni-text flex-grow-1">&quot;Suka sekali karena sudah halal dan tempatnya adem. Anak-anak juga senang main di area hijaunya.&quot;</p>
                <div className="testimoni-user d-flex align-items-center gap-3">
                  <img src="/Images/Testimoni 2.jpg" alt="Testimoni pelanggan 2" />
                  <div>
                    <h4>Malvin Grico</h4>
                    <p>Pengusaha Besi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card testimoni-card d-flex flex-column">
                <p className="testimoni-rating">&starf;&starf;&starf;&starf;&starf;</p>
                <p className="testimoni-text flex-grow-1">&quot;Biji kopinya wangi banget. Beli sebungkus buat di rumah, sampai tetangga nanya belinya di mana.&quot;</p>
                <div className="testimoni-user d-flex align-items-center gap-3">
                  <img src="/Images/Testimoni 3.jpg" alt="Testimoni pelanggan 3" />
                  <div>
                    <h4>Leonardo Firnandius</h4>
                    <p>Manajer BYD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card testimoni-card d-flex flex-column">
                <p className="testimoni-rating">&starf;&starf;&starf;&starf;&starf;</p>
                <p className="testimoni-text flex-grow-1">&quot;Kopinya punya rasa yang enak dan tidak terlalu pahit. Tempatnya juga nyaman untuk ngobrol santai.&quot;</p>
                <div className="testimoni-user d-flex align-items-center gap-3">
                  <img src="/Images/Testimoni 4.jpg" alt="Testimoni pelanggan 4" />
                  <div>
                    <h4>Christon Julian Wijaya</h4>
                    <p>Sepuh Transjakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq py-5">
        <div className="faq-title text-center mb-4">
          <h1>FAQ</h1>
        </div>

        <div className="faq-section d-flex justify-content-center">
          <div className="accordion-wrapper" style={{ maxWidth: "800px", width: "100%" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-2">
                <button 
                  className="accordion w-100 d-flex justify-content-between align-items-center p-3 border-0 rounded"
                  onClick={() => toggleFaq(idx)}
                  style={{ backgroundColor: "var(--primary-color)", color: "white", cursor: "pointer" }}
                >
                  <span>{faq.q}</span>
                  <span className="fs-5">{openFaq === idx ? "-" : "+"}</span>
                </button>
              
                {openFaq === idx && (
                  <div 
                    className="panel p-3 rounded-bottom" 
                    style={{ 
                      display: "block", 
                      backgroundColor: "var(--secondary-color)", 
                      color: "white" 
                    }}
                  >
                    <p className="mb-0">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="btn-elevator" onClick={scrollToTop} aria-label="Kembali ke atas">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

    </main>
  );
}