"use client";

import { useState } from "react";

// Komponen kartu menu interaktif (menggantikan jQuery priceDisplayAndTouchHandler)
function MenuItem({ 
  id, 
  title, 
  imgSrc, 
  desc, 
  prices 
}: { 
  id?: string; 
  title: string; 
  imgSrc: string; 
  desc: string; 
  prices?: { S: string; M: string; L: string };
}) {
  const [showSizes, setShowSizes] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<string>(prices ? prices.S : "");

  return (
    <div className="col d-flex">
      <div className="menu-item d-flex align-items-start gap-3 w-100">
        <div className="image-wrapper">
          <img src={imgSrc} alt={title} id={id} className="menu-Image" />
        </div>
        <div className="item-description flex-grow-1">
          <h3 className="fs-5">{title}</h3>
          
          <div className="price-placeholder">
            {prices ? selectedPrice || "Pilih Ukuran" : desc.includes("Rp") ? "" : null}
          </div>

          {prices && (
            <div className={`coffee-selection-container ${showSizes ? "active" : ""}`}>
              <button 
                type="button" 
                className="display-content"
                onClick={() => setShowSizes(!showSizes)}
              >
                SIZE
              </button>
              
              {showSizes && (
                <div className="dropright-content d-flex">
                  <button 
                    type="button" 
                    className="coffee-selection-button"
                    onClick={() => { setSelectedPrice(prices.S); setShowSizes(false); }}
                  >
                    <img src="/Images/Coffee Selection/small cup_refined.webp" alt="S" className="coffee-selection-small"/>
                  </button>
                  <button 
                    type="button" 
                    className="coffee-selection-button"
                    onClick={() => { setSelectedPrice(prices.M); setShowSizes(false); }}
                  >
                    <img src="/Images/Coffee Selection/cup M.webp" alt="M" className="coffee-selection-medium"/>
                  </button>
                  <button 
                    type="button" 
                    className="coffee-selection-button"
                    onClick={() => { setSelectedPrice(prices.L); setShowSizes(false); }}
                  >
                    <img src="/Images/Coffee Selection/cup L.webp" alt="L" className="coffee-selection-large"/>
                  </button> 
                </div>
              )}
            </div>
          )}

          <div className="description-wrapper mt-2">
            <p className="mb-0">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="menu-page-container">

      <div className="our-menu-image-wrapper text-center my-4">
        <div className="centering">
          <h1 className="our-menu-text">OUR MENU</h1>
        </div>
      </div>

      <div className="menu-content-layout container">
        <div className="menu-navigation">
          <a href="#nusantara" onClick={(e) => scrollToSection(e, "nusantara")}>Nusantara Series</a>
          <a href="#foreign" onClick={(e) => scrollToSection(e, "foreign")}>Foreign Series</a>
          <a href="#dessert" onClick={(e) => scrollToSection(e, "dessert")}>Dessert</a>
        </div>

        <div className="menu-card">
          <h1 id="nusantara" className="menu-section-title">NUSANTARA SERIES</h1>
          <div className="menu-container row row-cols-1 row-cols-md-2 g-4 mb-5">
            <MenuItem 
              title="Kopi Flores Bajawa" 
              imgSrc="/Images/KOPI NUSANTARA/webp/Hot Flores Bajawa.webp" 
              desc="Cita rasa eksotis dari Nusa Tenggara Timur dengan paduan aroma nutty dan karamel yang lembut."
              prices={{ S: "Rp 20.000", M: "Rp 28.000", L: "Rp 33.000" }}
            />
            <MenuItem 
              title="Hot Gayo" 
              imgSrc="/Images/KOPI NUSANTARA/webp/HOT GAYO.webp" 
              desc="Karakter rempah dan cokelat pekat dari dataran tinggi Aceh Gayo yang bold."
              prices={{ S: "Rp 18.000", M: "Rp 25.000", L: "Rp 30.000" }}
            />
            <MenuItem 
              id="kintamani"
              title="Hot Kintamani" 
              imgSrc="/Images/KOPI NUSANTARA/webp/HOT KINTAMANI BALI.webp" 
              desc="Seduhan hangat dengan profil rasa fruity dan citrus yang cerah khas Bali."
              prices={{ S: "Rp 22.000", M: "Rp 29.000", L: "Rp 34.000" }}
            />
            <MenuItem 
              title="Hot Mandailing" 
              imgSrc="/Images/KOPI NUSANTARA/webp/HOT Mandailing.webp" 
              desc="Kepekatan kopi Sumatera dengan tingkat keasaman rendah dan sentuhan rasa herbal."
              prices={{ S: "Rp 20.000", M: "Rp 28.000", L: "Rp 33.000" }}
            />
            <MenuItem 
              title="Hot Toraja" 
              imgSrc="/Images/KOPI NUSANTARA/webp/HOT TORAJA.webp" 
              desc="Kopi hitam hangat dengan sentuhan earthy dan aroma khas Sulawesi yang kuat."
              prices={{ S: "Rp 22.000", M: "Rp 29.000", L: "Rp 34.000" }}
            />
            <MenuItem 
              title="Iced Gayo" 
              imgSrc="/Images/KOPI NUSANTARA/webp/ICED GAYO.webp" 
              desc="Karakter rempah dataran tinggi Aceh Gayo yang berani, disajikan dingin menyegarkan."
              prices={{ S: "Rp 23.000", M: "Rp 30.000", L: "Rp 35.000" }}
            />
          </div>

          <h1 id="foreign" className="menu-section-title">FOREIGN SERIES</h1>
          <div className="menu-container row row-cols-1 row-cols-md-2 g-4 mb-5">
            <MenuItem 
              title="Iced Dirty Matchapresso" 
              imgSrc="/Images/KOPI LUAR/webp/ICED DIRTY MATCHAEXPRESSO.webp" 
              desc="Kombinasi matcha dan espresso yang bold, satukan dua dunia!"
              prices={{ S: "Rp 24.000", M: "Rp 31.000", L: "Rp 36.000" }}
            />
            <MenuItem 
              title="Iced Malty Latte" 
              imgSrc="/Images/KOPI LUAR/webp/Iced Malty Latte.webp" 
              desc="Traditional Latte berpadu dengan manisnya karamel, creamy dan nutty."
              prices={{ S: "Rp 20.000", M: "Rp 27.000", L: "Rp 32.000" }}
            />
            <MenuItem 
              title="Iced Cappuccino" 
              imgSrc="/Images/KOPI LUAR/webp/Iced Cappuccino.webp" 
              desc="Paduan Espresso, susu hangat, dan lapisan foam tebal di atasnya."
              prices={{ S: "Rp 22.000", M: "Rp 29.000", L: "Rp 34.000" }}
            />
          </div>

          <h1 id="dessert" className="menu-section-title">DESSERT</h1>
          <div className="menu-container row row-cols-1 row-cols-md-2 g-4 mb-5">
            <MenuItem 
              title="Roll Cake Cheese Pandan" 
              imgSrc="/Images/DESSERT/webp/Pandan-Roll-Cake-ID.webp" 
              desc="Rp 27.000 — Bolu gulung pandan yang lembut dengan krim vanilla dan taburan keju."
            />
            <MenuItem 
              title="Pain au Tiramisu" 
              imgSrc="/Images/DESSERT/webp/Pain au Tiramisu.webp" 
              desc="Rp 36.000 — Pastry dengan isian almond paste rasa tiramisu."
            />
            <MenuItem 
              title="Butter Croissant" 
              imgSrc="/Images/DESSERT/webp/Butter Croissant _-80.webp" 
              desc="Rp 24.000 — Pastry dengan rasa dan aroma butter."
            />
          </div>
        </div>
      </div>

   
      <button className="btn-elevator" onClick={scrollToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </main>
  );
}