import React, { useState, useEffect } from "react";
 const perfumes = [

  // 🆕 NUEVOS (SOLO AQUÍ)
  { id: 3, name: "9PM Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/9PM.jpeg" },
  { id: 4, name: "Club de Nuit Intense Les", gender: "Caballero", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/club-de-nuit-intense-les.jpg" },
  { id: 5, name: "Odyssey Mega Man", gender: "Caballero", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/odyssey-mega-man.jpg" },
  { id: 6, name: "Asad Les", gender: "Caballero", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/asad-les.jpg" },
  { id: 7, name: "Asad Bourbon", gender: "Caballero", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/asad-bourbon.jpg" },
  { id: 8, name: "Asad Zanzíbar Les", gender: "Caballero", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/asad-zanz%C3%ADbar-les.jpg" },

  { id: 9, name: "Odyssey Candee Les", gender: "Dama", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/odyssey-candee-les.jpg" },
  { id: 10, name: "Yum Yum Les", gender: "Dama", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/yum-yum-les.jpg" },
  { id: 11, name: "Island Bliss Les", gender: "Dama", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/island-bliss-les.jpg" },

  { id: 12, name: "Amber Oud Les", gender: "Unisex", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/amber-oud-les.jpg" },
  { id: 13, name: "Odyssey Mandarin Sky Les", gender: "Unisex", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/odyssey-mandarin-sky-les.jpg" },
  { id: 14, name: "Khamrah Les", gender: "Unisex", category: "Nuevos", price: 45, img: "http://localhost:3000/perfumes/khamrah-les.jpg" },

    //  (NUEVOS PERFUMES AGREGADOS PERO NO SE PUEDE ABAJO POR EL " i < 24 " )
    // (MUJERES)
{ 
  id: 201, 
  name: "DEVOTION", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/devotion.jpg" 
},

{ 
  id: 202, 
  name: "FAME", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/fame.jpg" 
},


    //  (NUEVOS PERFUMES AGREGADOS PERO NO SE PUEDE ABAJO POR EL " i < 24 " )
    // (HOMBRES)
    { 
  id: 200, 
  name: "VALENTINO", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/valentino.jpg" 
},

{ 
  id: 203, 
  name: "LE BEU", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/le-beu.jpg" 
},

{ 
  id: 204, 
  name: "ASAD", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/asad.jpg" 
},

    //  NORMALES (los tuyos anteriores)
  ...[
    "212 HEROES","AMARIGE","AQUA KISS","ACQUA DI GIOIA","YARA","BORN IN ROMA YELLOW",
    "BURBERRY","CAROLINA HERRERA","CLOUD PINK","COCO CHANEL","COCONUT","FANTASY",
    "GOOD GIRL","GOOD GIRL BLUSH","J ADORE","MANGO TEMPTATION","MISS DIOR EDP2017",
    "MOD VANILLA","OLYMPEA","PARIS HILTON","S SHAKIRA","SCANDAL","SWEET LIKE CANDY","VANILLA DIORAMA",

    "ONE MILLION ELIXIR","ONE MILLION","212 VIP","ACQUA DI GIO","ACQUA DI GIO PROFUMO",
    "BAD BOY","BOSS BOTTLED NIGHT","EROS","EROS FLAME","HUGO","INVICTUS",
    "INVICTUS VICTORY","LE MALE","LE MALE ELIXIR","ODYSSEY MANDARIN SKY",
    "PLAY INTENSE","SAUVAGE","SAUVAGE ELIXIR","SCANDAL MEN","ULTRA MALE",
    "THE ONE FOR MEN","VALENTINO UOMO BORN IN ROMA","KHAMRAH","ERBA PURA"
  ].map((name, i) => ({
    id: 100 + i,
    name,
    gender: i < 24 ? "Dama" : "Caballero",
    category: "Normal",
    price: 45,
    img: `/perfumes/${name.toLowerCase().replace(/ /g,"-")}.jpg`
  }))
];

export default function App() {
  /* =========================
     1. ESTADOS PRINCIPALES
  ========================= */

  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [query, setQuery] = useState("");
  const [activeStory, setActiveStory] = useState("Dama");
  const [filter, setFilter] = useState("Todos");
  const [showCart, setShowCart] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  
  const [commentText, setCommentText] = useState("");

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [ratingData, setRatingData] = useState(() => {
    return JSON.parse(localStorage.getItem("ratingData")) || {};
  });

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("comments")) || {};
  });

  /* =========================
     2. EFFECTS (LOCALSTORAGE)
  ========================= */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("ratingData", JSON.stringify(ratingData));
  }, [ratingData]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  //  NUEVO EFECTO
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");
   elements.forEach((el) => {
    el.classList.remove("active"); // 🔥 resetear animación
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [filter]);

  /* =========================
     3. CÁLCULOS DERIVADOS
  ========================= */

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero hacer un pedido:\n\n` +
      cart.map((item, i) => `${i + 1}. ${item.name} - S/ ${item.price}`).join("\n") +
      `\n\nTotal: S/ ${total}`
  );
    const normalizedQuery = query.toLowerCase().trim();
    const filtered = perfumes.filter((p) => {
    const matchName = p.name.toLowerCase().includes(normalizedQuery);

    if (filter === "Todos") return matchName;
    if (filter === "Nuevos") return matchName && p.category === "Nuevos";
    if (filter === "Dama") return matchName && p.gender === "Dama" && p.category !== "Nuevos";
    if (filter === "Caballero") return matchName && p.gender === "Caballero" && p.category !== "Nuevos";

    return matchName;
  });

  /* =========================
     4. FUNCIONES
  ========================= */

  const addToCart = (perfume) => {
    setCart((prev) => [...prev, perfume]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRating = (perfumeId, value) => {
    setRatingData((prev) => {
      const current = prev[perfumeId] || {
        total: 0,
        sum: 0,
        average: 0,
      };

      const newTotal = current.total + 1;
      const newSum = current.sum + value;
      const newAverage = newSum / newTotal;

      return {
        ...prev,
        [perfumeId]: {
          total: newTotal,
          sum: newSum,
          average: newAverage,
        },
      };
    });
  };

  const addComment = (perfumeId) => {
    if (!commentText.trim()) return;

    setComments((prev) => ({
      ...prev,
      [perfumeId]: [...(prev[perfumeId] || []), commentText],
    }));

    setCommentText("");
  };
 
  return (
    <div style={{ 
  background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
  minHeight: "100vh", 
  padding: "20px",
  color: "white"
}}>

    {/* HERO BANNER ANIMADO */}
    <div className="hero">

      <img
  src="/hero.jpg"
  alt="Hero"
  className="hero-img"
  style={{
    filter: "brightness(0.4) contrast(1.2) blur(2px)",
    transform: "scale(1.1)",
    transition: "1.5s ease"
  }}
/>

      <div
  className="hero-overlay"
  style={{
    background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
    backdropFilter: "blur(2px)"
  }}
>

        <h1 className="hero-title">
        MAISON VENEXIS
      </h1>

        <p className="hero-subtitle">
          Fragancias exclusivas • Estilo premium
        </p>

        <div className="hero-line"></div>

        <a
          href="https://wa.me/51974374060?text=Hola quiero información de perfumes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hero-btn">
            Comprar ahora
          </button>
        </a>

      </div>

    </div>

    {/* ✨ PARTÍCULAS */}
{/* 🌫 HUMO ELEGANTE */}
<div className="smoke">
  {Array.from({ length: 8 }).map((_, i) => (
    <span key={i} className="smoke-particle"></span>
  ))}
</div>

{/* 🔥 PROMOCIÓN CON BOTÓN WHATSAPP */}
<div style={{
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px"
}}>
  <div style={{
    position: "relative",
    width: "100%",
    maxWidth: "420px"
  }}>
    
    <img
      src="/promocion.jpg"
      alt="Promoción"
      style={{
        width: "100%",
        borderRadius: "20px",
        objectFit: "contain",
        animation: "zoomPromo 0.8s ease, floatPromo 3s ease-in-out infinite"
      }}
    />

    <a
      href="https://wa.me/51974374060?text=Hola quiero la promoción"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "absolute",
        bottom: "15px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <button style={{
        background: "#25D366",
        animation: "pulse 1.5s infinite",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "25px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Pedir por WhatsApp
      </button>
    </a>

  </div>
</div>



{/* VER EL CARRITO DE COMPRAS */}

<div
  onClick={() => setShowCart(!showCart)}
  style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "black",
    color: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    zIndex: 1000,
    cursor: "pointer"
  }}
>
  🛒 {cart.length}
</div>




{/* STORIES TIPO INSTAGRAM */}
<div style={{
  display: "flex",
  gap: "15px",
  overflowX: "auto",
  padding: "10px 0",
  marginBottom: "20px"
}}>
  
  {["Dama", "Caballero", "Nuevos"].map((item, i) => (
    <div
      key={i}
      onClick={() => {
  setFilter(item);
  setActiveStory(item);
}}
      style={{
        minWidth: "70px",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      
     <div style={{
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  padding: "3px",
  background: activeStory === item
    ? "linear-gradient(45deg, #00f5ff, #0084ff, #6a00ff)"
    : "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
  transition: "0.3s",
  transform: activeStory === item ? "scale(1.05)" : "scale(1)"
}}>
        
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#fff",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
          {item}
        </div>

      </div>

      <div style={{ 
  fontSize: "12px", 
  marginTop: "5px",
  color: "white"
}}>
  {item}
</div>

    </div>
  ))}

</div>

      {/* FILTROS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        {["Todos", "Dama", "Caballero"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 15px",
              border: "none",
              background: filter === f ? "black" : "#ddd",
              color: filter === f ? "white" : "black",
              cursor: "pointer"
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* BUSCADOR */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          placeholder="Buscar perfume..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "60%" }}
        />
      </div>

     {/* GRID ESTILO INSTAGRAM */}
<div style={{
  display: "grid",
  position: "relative",
  zIndex: 1, // ESTO ARREGLA QUE NO SE VEAN
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  justifyContent: "center",
  gap: "20px",
  padding: "10px"
}}>

  {filtered.map((perfume) => (
  <div
  key={perfume.id + filter}
  onClick={() => setSelectedPerfume(perfume)}
  style={{
    background: "linear-gradient(145deg, #1a1a1a, #0f0f0f)",
    color: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    position: "relative",
    zIndex: 0,
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 20px 50px rgba(201,169,110,0.25)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}
>

{perfume.category === "Nuevos" && (
  <div style={{
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#c9a96e",
    color: "#000",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "10px",
    fontWeight: "bold"
  }}>
    NUEVO
  </div>
)}

{/* EFECTO BRILLO PREMIUM */}
<div style={{
  position: "absolute",
  top: 0,
  left: "-75%",
  width: "50%",
  height: "100%",
  background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
  transform: "skewX(-25deg)",
  pointerEvents: "none",
  transition: "0.5s",
  zIndex: 1 // 🔥 IMPORTANTE
}} className="shine-effect"></div>

  {/* IMAGEN */}
  <div style={{
    width: "100%",
    height: "260px",
    background: "#000",
    overflow: "hidden"
  }}>
    <img
      src={perfume.img}
      alt={perfume.name}
      onError={(e) => {
        e.target.src = `https://dummyimage.com/400x500/000/fff&text=${perfume.name}`;
      }}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "0.5s"
      }}
    />
  </div>

  {/* CONTENIDO */}
  <div style={{ 
  padding: "15px", 
  textAlign: "center",
  position: "relative",
  zIndex: 2 // 🔥 MÁS ARRIBA QUE EL BRILLO
}}>

    {/* NOMBRE */}
    <h4 style={{
        margin: "5px 0",
      color: "white",
      fontFamily: "'Playfair Display', serif",
      fontWeight: "600",
      letterSpacing: "1px"
    }}>
      {perfume.name}
    </h4>

    {/* GÉNERO */}
    <div style={{
      fontSize: "11px",
      marginBottom: "8px",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#aaa"
    }}>
      {perfume.gender}
    </div>

    {/* PRECIO */}
    <div style={{
      color: "#c9a96e",
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "12px",
      letterSpacing: "1px"
    }}>
      S/ {perfume.price}
    </div>

    {/* BOTONES */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(perfume);
      }}
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(45deg, #c9a96e, #f5d28c)",
        color: "#000",
        fontWeight: "bold",
        marginBottom: "8px",
        cursor: "pointer",
        transition: "0.3s"
      }}
    >
      Agregar
    </button>

    <a
      href={`https://wa.me/51974374060?text=Hola,%20quiero%20comprar%20${encodeURIComponent(perfume.name)}`}
      target="_blank"
      rel="noreferrer"
    >
      <button style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #c9a96e",
        background: "transparent",
        color: "#c9a96e",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Comprar
      </button>
    </a>

  </div>

</div>
  ))}
</div>
<style>
{`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUpModal {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes zoomPromo {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes floatPromo {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.hero {
  position: relative;
  width: 100%;
  height: 90vh;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 40px;
}

/* 📱 RESPONSIVE CELULAR */
@media (max-width: 768px) {
  .hero {
    height: 60vh; /* 🔥 más pequeño en celular */
    border-radius: 15px;
  }
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5) contrast(1.2);
  transform: scale(1.1);
  animation: heroZoom 1.5s ease forwards;
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
  color: white;
  width: 100%;
}

.hero-title {
  font-size: clamp(30px, 6vw, 70px);
  font-weight: 900;
  letter-spacing: 3px;
  opacity: 0;
  transform: translateY(40px);
  animation: heroFadeUp 1s ease forwards;
  animation-delay: 0.5s;
}

.hero-subtitle {
  font-size: clamp(14px, 2vw, 20px);
  margin-top: 10px;
  opacity: 0;
  transform: translateY(40px);
  animation: heroFadeUp 1s ease forwards;
  animation-delay: 0.8s;
}

.hero-line {
  width: 60px;
  height: 3px;
  background: radial-gradient(circle, #fff, #c9a96e);
box-shadow: 0 0 8px #c9a96e;
  margin: 20px auto;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 1s;
}

.hero-btn {
  background: white;
  color: black;
  padding: 12px 25px;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transform: translateY(40px);
  animation: heroFadeUp 1s ease forwards;
  animation-delay: 1.2s;
}

.hero-btn:hover {
  transform: scale(1.05);
}

@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroZoom {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1.05);
  }
}

.hero-img {
  animation: cinematicZoom 6s ease forwards;
}

@keyframes cinematicZoom {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.05);
  }
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #c9a96e;
  border-radius: 50%;
  opacity: 0.7;
  animation: floatParticles 8s linear infinite;
}

/* posiciones aleatorias */
.particle:nth-child(1) { left: 10%; animation-duration: 6s; }
.particle:nth-child(2) { left: 20%; animation-duration: 8s; }
.particle:nth-child(3) { left: 30%; animation-duration: 7s; }
.particle:nth-child(4) { left: 40%; animation-duration: 9s; }
.particle:nth-child(5) { left: 50%; animation-duration: 6s; }
.particle:nth-child(6) { left: 60%; animation-duration: 10s; }
.particle:nth-child(7) { left: 70%; animation-duration: 7s; }
.particle:nth-child(8) { left: 80%; animation-duration: 8s; }
.particle:nth-child(9) { left: 90%; animation-duration: 6s; }

/* animación */
@keyframes floatParticles {
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-10vh) scale(1);
    opacity: 0;
  }
}

.smoke {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
}

.smoke-particle {
  position: absolute;
  bottom: -100px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.4;
  animation: smokeRise 12s linear infinite;
}

/* posiciones distintas */
.smoke-particle:nth-child(1) { left: 10%; animation-duration: 14s; }
.smoke-particle:nth-child(2) { left: 25%; animation-duration: 12s; }
.smoke-particle:nth-child(3) { left: 40%; animation-duration: 16s; }
.smoke-particle:nth-child(4) { left: 55%; animation-duration: 13s; }
.smoke-particle:nth-child(5) { left: 70%; animation-duration: 15s; }
.smoke-particle:nth-child(6) { left: 80%; animation-duration: 11s; }
.smoke-particle:nth-child(7) { left: 35%; animation-duration: 17s; }
.smoke-particle:nth-child(8) { left: 60%; animation-duration: 14s; }

/* animación */
@keyframes smokeRise {
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  50% {
    transform: translateY(-200px) scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-500px) scale(1.3);
    opacity: 0;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.shine-effect {
  opacity: 0;
}

.card-premium:hover .shine-effect {
  left: 130%;
  opacity: 1;
  transition: 0.8s;
}

`}
</style>
  {/* BOTÓN FLOTANTE WHATSAPP */}
<a
  href="https://wa.me/51974374060?text=Hola quiero información de perfumes"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    zIndex: 1000,
    animation: "pulse 1.5s infinite"
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    style={{
      width: "35px",
      height: "35px"
    }}
  />
</a>


{/* CARRITO DESPLEGABLE */}
{showCart && (
  <div style={{
    position: "fixed",
    right: "20px",
    top: "80px",
    width: "260px",
    background: "white",
    color: "#1a1a1a",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    padding: "10px",
    zIndex: 1000
  }}>

    <h4 style={{ textAlign: "center", color: "#c9a96e" }}>
        🛒 Carrito
    </h4>

    {cart.length === 0 ? (
      <p style={{ fontSize: "12px", textAlign: "center" }}>
        Vacío
      </p>
    ) : (
      <>
        {cart.map((item, index) => (
          <div key={index} style={{
            borderBottom: "1px solid #eee",
            padding: "8px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>

            <div>
              <div style={{ fontSize: "12px" }}>{item.name}</div>
              <strong style={{ fontSize: "12px" }}>
                S/ {item.price}
              </strong>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "3px 6px",
                fontSize: "10px",
                cursor: "pointer"
              }}
            >
              X
            </button>

          </div>
        ))}

        {/* TOTAL + WHATSAPP */}
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <strong>Total: S/ {total}</strong>
        </div>

        <a
          href={`https://wa.me/51974374060?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          <button style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Finalizar pedido por WhatsApp
          </button>
        </a>

      </>
    )}

  </div>
)}

{/* MODAL DEL PERFUME */}
{selectedPerfume && (
  <div style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  background: "rgba(0,0,0,0.4)",

  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",

  zIndex: 2000,

  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>

    <div style={{
  background: "#1c1c1c",
  color: "white",
  width: "90%",
  maxWidth: "400px",
  borderRadius: "25px",
  padding: "20px",
  animation: "slideUpModal 0.4s ease",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  
  maxHeight: "90vh",   //  IMPORTANTE
  overflowY: "auto"    //  ESTO ACTIVA EL SCROLL
}}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px"
      }}>
        <button onClick={() => setSelectedPerfume(null)}>← Volver</button>
      </div>

      {/* CONTENIDO */}
      <img
        src={selectedPerfume.img}
        alt={selectedPerfume.name}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      
      <h2 style={{ color: "#fff", textAlign: "center", letterSpacing: "1px" }}>
  {selectedPerfume.name}
</h2>
      <h3>S/ {selectedPerfume.price}</h3>


<div style={{ marginTop: "10px" }}>
  <strong>Califica este perfume:</strong>

  <div style={{ fontSize: "25px", cursor: "pointer" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        onClick={() => handleRating(selectedPerfume.id, star)}
        style={{
         color:
  star <= Math.round(ratingData[selectedPerfume.id]?.average || 0)
    ? "#FFD700"   // dorado fuerte
    : "#555"      // gris oscuro visible
        }}
      >
        ★
      </span>
    ))}
  </div>

<div style={{ fontSize: "14px", marginTop: "5px" }}>
    ⭐ {ratingData[selectedPerfume.id]?.average?.toFixed(2) || "0.00"} / 5
  </div>
</div>

<div style={{ marginTop: "20px" }}>
  <strong>Comentarios:</strong>

  <input
    value={commentText}
    onChange={(e) => setCommentText(e.target.value)}
    placeholder="Escribe tu opinión..."
    style={{
      width: "100%",
      padding: "8px",
      marginTop: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc"
    }}
  />

  <button
    onClick={() => addComment(selectedPerfume.id)}
    style={{
      marginTop: "5px",
      width: "100%",
      padding: "8px",
      background: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "8px"
    }}
  >
    Enviar comentario
  </button>

  <div style={{ marginTop: "10px" }}>
    {(comments[selectedPerfume.id] || []).map((c, i) => (
      <div
        key={i}
        style={{
          background: "#f5f5f5",
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "5px"
        }}
      >
        💬 {c}
      </div>
    ))}
  </div>
</div>

      <a
        href={`https://wa.me/51974374060?text=Quiero comprar ${selectedPerfume.name}`}
        target="_blank"
        rel="noreferrer"
      >
        <button style={{
          width: "100%",
          padding: "10px",
          background: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "10px"
        }}>
          Comprar
        </button>
      </a>

    </div>
  </div>
)}

{/* 👇 AQUÍ EL POPUP */}
{showPromo && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(5px)",
    zIndex: 3000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>

    <div style={{
      position: "relative",
      width: "90%",
      maxWidth: "420px",
      animation: "zoomPromo 0.5s ease"
    }}>

      <button
        onClick={() => setShowPromo(false)}
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          background: "linear-gradient(45deg, gold, #c9a96e)",
color: "#000",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        X
      </button>

<div style={{
  position: "absolute",
  top: "10px",
  left: "10px",
  background: "#c9a96e",
  color: "#000",
  padding: "5px 12px",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "12px",
  animation: "pulse 1.5s infinite",
  zIndex: 1
}}>
  OFERTA LIMITADA
</div>

      <img
  src="/promo-dia-padre.jpg?v=2"
  alt="Promoción"
  style={{
    width: "100%",
    height: "550px",              // 🔥 altura fija
    objectFit: "cover",           // 🔥 recorte elegante
    borderRadius: "30px",
    animation: "zoomPromo 0.8s ease, floatPromo 3s ease-in-out infinite"
  }}
  
/>

      <a
        href="https://wa.me/51974374060?text=Hola me puedes dar mas informacion la promoción del dia del padre"
        target="_blank"
        rel="noreferrer"
      >
        <button style={{
          width: "100%",
          marginTop: "10px",
          padding: "12px",
          background: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Pedir por WhatsApp
        </button>
      </a>

    </div>
  </div>
)}

{/* 🔥 FOOTER PREMIUM */}
<div style={{
  width: "100%",
  background: "#000",
  color: "#fff",
  marginTop: "40px",
  padding: "40px 20px",
  textAlign: "center"
}}>

  {/* LÍNEA DORADA */}
  <div style={{
    width: "80px",
    height: "2px",
    background: "#c9a96e",
    margin: "0 auto 20px auto"
  }}></div>

  <h3 style={{ 
    marginBottom: "10px", 
    letterSpacing: "4px",
    fontWeight: "300"
  }}>
    NUESTRA MARCA
  </h3>

  <h2 style={{ 
    marginBottom: "15px",
    color: "#c9a96e",
    fontWeight: "bold"
  }}>
    Maison Venexis
  </h2>

  <p style={{ margin: "5px 0" }}>
    +51 974 374 060
  </p>

  <p style={{ margin: "5px 0" }}>
    maisonvenexis@gmail.com
  </p>

  {/* REDES SOCIALES */}
  <div style={{
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "25px"
  }}>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/maison_venexis.18/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        style={{
          width: "32px",
          transition: "0.3s"
        }}
      />
    </a>

    {/* TIKTOK */}
    <a
      href="https://www.tiktok.com/@masion_venexis.18"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
        alt="TikTok"
        style={{
          width: "32px",
          transition: "0.3s"
        }}
      />
    </a>

  </div>

</div>

    </div>
  );
}