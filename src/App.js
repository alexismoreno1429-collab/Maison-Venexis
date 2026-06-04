import React, { useState } from "react";
 const perfumes = [

  // 🆕 NUEVOS (SOLO AQUÍ)
  { id: 3, name: "9PM Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/9PM.jpeg" },
  { id: 4, name: "Club de Nuit Intense Les", gender: "Caballero", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Club+Nuit" },
  { id: 5, name: "Odyssey Mega Man", gender: "Caballero", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Odyssey+Mega" },
  { id: 6, name: "Asad Les", gender: "Caballero", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Asad" },
  { id: 7, name: "Asad Bourbon", gender: "Caballero", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Asad+Bourbon" },
  { id: 8, name: "Asad Zanzíbar Les", gender: "Caballero", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Zanzibar" },

  { id: 9, name: "Odyssey Candee Les", gender: "Dama", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Candee" },
  { id: 10, name: "Yum Yum Les", gender: "Dama", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Yum+Yum" },
  { id: 11, name: "Island Bliss Les", gender: "Dama", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Island+Bliss" },

  { id: 12, name: "Amber Oud Les", gender: "Unisex", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Amber+Oud" },
  { id: 13, name: "Odyssey Mandarin Sky Les", gender: "Unisex", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Mandarin+Sky" },
  { id: 14, name: "Khamrah Les", gender: "Unisex", category: "Nuevos", price: 45, img: "https://dummyimage.com/400x500/fff/000&text=Khamrah" },

    //  NORMALES (los tuyos anteriores)
  ...[
    "212 HEROES","AMARIGE","AQUA KISS","ACQUA DI GIOIA","YARA","BORN IN ROMA YELLOW",
    "BURBERRY","CAROLINA HERRERA","CLOUD PINK","COCO CHANEL","COCONUT","FANTASY",
    "GOOD GIRL","GOOD GIRL BLUSH","J ADORE","MANGO TEMPTATION","MISS DIOR EDP2017",
    "MOD VANILLA","OLYMPEA","PARIS HILTON","S SHAKIRA","SCANDAL","SWEET LIKE CANDY","VANILLA DIORAMA",

    "ONE MILLION ELIXIR","ONE MILLION","212 VIP","ACQUA DI GIÒ","ACQUA DI GIÒ PROFUMO",
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

  const [query, setQuery] = useState("");
  const [activeStory, setActiveStory] = useState("Dama");
  const [filter, setFilter] = useState("Todos");
  // CARRITO DE COMPRAS ACUMULABLE
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const whatsappMessage = encodeURIComponent(
  `Hola, quiero hacer un pedido:\n\n` +
  cart.map((item, i) => `${i + 1}. ${item.name} - S/ ${item.price}`).join("\n") +
  `\n\nTotal: S/ ${total}`
);

  const addToCart = (perfume) => {
  setCart((prevCart) => [...prevCart, perfume]);
};
  const removeFromCart = (index) => {
  setCart((prevCart) => prevCart.filter((_, i) => i !== index));
};

/* filtro correcto */
  const filtered = perfumes.filter((p) => {
  const matchName = p.name.toLowerCase().includes(query.toLowerCase());

  if (filter === "Todos") return matchName;
  if (filter === "Nuevos") return matchName && p.category === "Nuevos";
  if (filter === "Dama") return matchName && p.gender === "Dama" && p.category !== "Nuevos";
  if (filter === "Caballero") return matchName && p.gender === "Caballero" && p.category !== "Nuevos";

  return matchName;
});

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>

      {/* HEADER CON LOGO */}
<div  
  style={{ 
    textAlign: "center", 
    marginBottom: "30px",
    animation: "fadeIn 1.5s ease"
  }}
>
  
  <img 
    src="/logo.png" 
    alt="Logo Maison Venexis"
    style={{ 
      width: "100%",
      maxWidth: "800px",
      marginBottom: "10px",
      animation: "slideUp 1.2s ease"
    }} 
  />

  <div style={{ 
    width: "60px", 
    height: "2px", 
    background: "#c9a96e", 
    margin: "10px auto" 
  }}></div>

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
          {item}
        </div>

      </div>

      <div style={{ fontSize: "12px", marginTop: "5px" }}>
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
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  justifyContent: "center",
  gap: "20px",
  padding: "10px"
}}>
  {filtered.map((perfume) => (
    <div
      key={perfume.id}
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >

      {/* IMAGEN */}
      <img
  src={perfume.img}
  alt={perfume.name}
  onError={(e) => {
    e.target.src = `https://dummyimage.com/400x500/ffffff/000000&text=${perfume.name.replace(/ /g,"+")}`;
  }}
  style={{
    width: "100%",
    height: "260px",
    objectFit: "cover"
  }}
/>

      {/* INFO */}
      <div style={{ padding: "12px", textAlign: "center" }}>
        
        <h4 style={{ margin: "5px 0" }}>{perfume.name}</h4>

        <div style={{
          fontSize: "12px",
          marginBottom: "5px",
          color: perfume.gender === "Dama" ? "#e91e63" : "#2196f3"
        }}>
          {perfume.gender}
        </div>

        <strong style={{ display: "block", marginBottom: "10px" }}>
          S/ {perfume.price}
        </strong>

        <button
  onClick={() => addToCart(perfume)}
  style={{
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    background: "#c9a96e",
    color: "#000",
    fontWeight: "bold",
    marginBottom: "5px",
    cursor: "pointer"
  }}
>
  Agregar al carrito
</button>

        <a
          href={`https://wa.me/51974374060?text=Hola,%20vi%20tu%20página%20Maison%20Venexis%20y%20quiero%20comprar:%20${encodeURIComponent(perfume.name)}%20¿Está%20disponible?`}
          target="_blank"
          rel="noreferrer"
        >
          <button style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#000",
            color: "#fff",
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

/* 👇 AQUÍ VA EL NUEVO */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
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
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    padding: "10px",
    zIndex: 1000
  }}>

    <h4 style={{ textAlign: "center" }}>🛒 Carrito</h4>

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
{/* TOTAL + WHATSAPP */}
<div style={{ marginTop: "10px", textAlign: "center" }}>
  <strong>Total: S/ {total}</strong>
</div>

<a
  href={`https://wa.me/51974374060?text=${whatsappMessage}`}
  target="_blank"
  rel="noreferrer"
>
  <button>Finalizar pedido por WhatsApp</button>
</a>
  </div>
);
}