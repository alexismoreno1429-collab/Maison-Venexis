import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

 const perfumes = [

  // 🆕 NUEVOS (SOLO AQUÍ)
  { id: 3, name: "9PM Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/9PM.jpeg" },
  { id: 4, name: "Club de Nuit Intense Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/club-de-nuit-intense-les.jpg" },
  { id: 5, name: "Odyssey Mega Man", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/odyssey-mega-man.jpg" },
  { id: 6, name: "Asad Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/asad-les.jpg" },
  { id: 7, name: "Asad Bourbon", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/asad-bourbon.jpg" },
  { id: 8, name: "Asad Zanzíbar Les", gender: "Caballero", category: "Nuevos", price: 45, img: "/perfumes/asad-zanzíbar-les.jpg" },

  { id: 9, name: "Odyssey Candee Les", gender: "Dama", category: "Nuevos", price: 45, img: "/perfumes/odyssey-candee-les.jpg" },
  { id: 10, name: "Yum Yum Les", gender: "Dama", category: "Nuevos", price: 45, img: "/perfumes/yum-yum-les.jpg" },
  { id: 11, name: "Island Bliss Les", gender: "Dama", category: "Nuevos", price: 45, img: "/perfumes/island-bliss-les.jpg" },
  { id: 12, name: "Amber Oud Les", gender: "Unisex", category: "Nuevos", price: 45, img: "/perfumes/amber-oud-les.jpg" },
  { id: 13, name: "Odyssey Mandarin Sky Les", gender: "Unisex", category: "Nuevos", price: 45, img: "/perfumes/odyssey-mandarin-sky-les.jpg" },
  { id: 14, name: "Khamrah Qahwa", gender: "Unisex", category: "Nuevos", price: 45, img: "/perfumes/khamrah-qahwa.jpg" },

    //  (NUEVOS PERFUMES AGREGADOS PERO NO SE PUEDE ABAJO POR EL " i < 24 " )
    
    // (MUJERES)

{ id: 2000, 
  name: "DEVOTION", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/devotion.jpg",

  inspiredBy: "Dolce & Gabbana Devotion",
  description: "Fragancia dulce y elegante con notas cremosas y un toque gourmand muy femenino.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2001, 
  name: "FAME", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/fame.jpg",

    inspiredBy: "Paco Rabanne Fame",
  description: "Aroma moderno y brillante, mezcla de frutas y flores con estilo juvenil y llamativo.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2002, 
  name: "COCONUT", 
  gender: "Dama", 
  category: "Normal", 
  price: 50, 
  oldPrice: 60,
  bestSeller: true,
  img: "/perfumes/coconut.jpg",
  
  inspiredBy: "Fragancias tropicales tipo Victoria’s Secret",
  description: "Aroma tropical dulce a coco, cremoso y relajante ideal para clima cálido.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2003, 
  name: "MANGO TEMPTATION", 
  gender: "Dama", 
  category: "Normal", 
  price: 60, 
  oldPrice: 70,
  recommended: true,
  img: "/perfumes/mango-temptation.jpg",

  inspiredBy: "Frutales tropicales tipo Escada",
  description: "Fragancia frutal intensa de mango maduro, fresca, dulce y muy veraniega.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2004, 
  name: "GOOD GIRL", 
  gender: "Dama", 
  category: "Normal", 
  price: 55, 
  oldPrice: 65,
  bestSeller: true,
  img: "/perfumes/good-girl.jpg",
  
   inspiredBy: "Good Girl Carolina Herrera",
  description: "Aroma sensual y elegante con mezcla de dulzura y notas intensas femeninas.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2005, 
  name: "S SHAKIRA", 
  gender: "Dama", 
  category: "Normal", 
  price: 60, 
  oldPrice: 70,
  recommended: true,
  img: "/perfumes/s-shakira.jpg",

  inspiredBy: "Shakira perfumes línea Dance",
  description: "Fragancia dulce y juvenil con toque frutal y femenino muy suave.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2006, 
  name: "212 HEROES", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/212-heroes.jpg",
  
  inspiredBy: "Carolina Herrera 212 línea femenina",
  description: "Fragancia juvenil y moderna con notas frescas y dulces, ideal para uso diario.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2007, 
  name: "AMARIGE", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/amarige.jpg",

  inspiredBy: "Givenchy Amarige",
  description: "Aroma floral intenso, clásico y elegante con presencia femenina fuerte.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2008, 
  name: "AQUA KISS", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/aqua-kiss.jpg",

   inspiredBy: "Victoria’s Secret Aqua Kiss",
  description: "Fragancia fresca y acuática con toque suave y limpio muy femenino.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2009, 
  name: "ACQUA DI GIOIA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/acqua-di-gioia.jpg",

  inspiredBy: "Giorgio Armani Acqua di Gioia",
  description: "Aroma fresco marino con toque cítrico y elegante muy natural.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2010, 
  name: "YARA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/yara.jpg",

   inspiredBy: "Lattafa Yara",
  description: "Fragancia dulce, cremosa y suave con toque oriental moderno.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2011, 
  name: "BORN IN ROMA YELLOW", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/born-in-roma-yellow.jpg",

   inspiredBy: "Valentino Born in Roma Yellow Dream",
  description: "Aroma floral frutal brillante, juvenil y elegante.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2012, 
  name: "BURBERRY", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/burberry.jpg",

  inspiredBy: "Burberry Her",
  description: "Fragancia dulce frutal con fresas y notas suaves muy femeninas.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2013, 
  name: "CAROLINA HERRERA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/carolina-herrera.jpg",

  inspiredBy: "Good Girl Carolina Herrera línea femenina",
  description: "Aroma elegante, sensual y sofisticado con presencia fuerte.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2014, 
  name: "CLOUD PINK", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/cloud-pink.jpg",

  inspiredBy: "Ariana Grande Cloud Pink",
  description: "Fragancia dulce, cremosa y moderna con toque juvenil y suave.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2015, 
  name: "COCO CHANEL", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/coco-chanel.jpg",

  inspiredBy: "Chanel Coco Mademoiselle",
  description: "Aroma elegante, clásico y sofisticado con toque cítrico floral.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2016, 
  name: "FANTASY", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/fantasy.jpg",

  inspiredBy: "Britney Spears Fantasy",
  description: "Fragancia dulce frutal con toque de caramelo y frutas rojas.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2017, 
  name: "GOOD GIRL BLUSH", 
  gender: "Dama", 
  category: "Normal", 
  price: 45,
  img: "/perfumes/good-girl-blush.jpg",

  inspiredBy: "Good Girl Blush Carolina Herrera",
  description: "Aroma floral suave, elegante y moderno con toque femenino delicado.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2018, 
  name: "J ADORE", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/j-adore.jpg",

  inspiredBy: "Dior J’adore",
  description: "Fragancia floral elegante y lujosa con presencia femenina clásica.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2019, 
  name: "MISS DIOR", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/miss-dior.jpg",

  inspiredBy: "Miss Dior Eau de Parfum 2017",
  description: "Aroma romántico, floral y dulce con elegancia juvenil.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2020, 
  name: "MOD VANILLA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/mod-vanilla.jpg",

   inspiredBy: "Ariana Grande Mod Vanilla",
  description: "Fragancia dulce cremosa con vainilla intensa y moderna.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2021, 
  name: "OLYMPEA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/olympea.jpg",

  inspiredBy: "Paco Rabanne Olympea",
  description: "Aroma dulce salado único con presencia fuerte y femenina.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2022, 
  name: "PARIS HILTON", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/paris-hilton.jpg",

  inspiredBy: "Paris Hilton Women",
  description: "Fragancia frutal dulce juvenil con estilo glamoroso.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2023, 
  name: "SCANDAL", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/scandal.jpg",

  inspiredBy: "Jean Paul Gaultier Scandal",
  description: "Aroma dulce intenso con miel y flores muy sensual.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2024, 
  name: "SWEET LIKE CANDY", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/sweet-like-candy.jpg",

  inspiredBy: "Ariana Grande Sweet Like Candy",
  description: "Fragancia dulce tipo golosina con frutas y vainilla suave.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2025, 
  name: "VANILLA DIORAMA", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/vanilla-diorama.jpg",

  inspiredBy: "Dior Vanilla Diorama",
  description: "Aroma cálido de vainilla con toque elegante y dulce sofisticado.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ id: 2028, 
  name: "212 VIP", 
  gender: "Dama", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/212-vip.jpg",

  inspiredBy: "Carolina Herrera 212 VIP Women",
  description: "Aroma dulce elegante de fiesta con estilo moderno y atractivo.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},
    
    // (HOMBRES)
   
{ 
  id: 1100, 
  name: "VALENTINO", 
  gender: "Caballero", 
  category: "Normal", 
  price: 60, 
  oldPrice: 70, 
  recommended: true, 
  img: "/perfumes/valentino.jpg" 
},

{ 
  id: 1101, 
  name: "SAUVAGE ELIXIR", 
  gender: "Caballero", 
  category: "Normal", 
  price: 55, 
  oldPrice: 65, 
  bestSeller: true, 
  img: "/perfumes/sauvage-elixir.jpg" 
},

{ 
  id: 1102, 
  name: "LE BEAU", 
  gender: "Caballero", 
  category: "Normal", 
  price: 55, 
  oldPrice: 65, 
  recommended: true, 
  img: "/perfumes/le-beau.jpg" },

{ 
  id: 1104, 
  name: "KHAMRAH", 
  gender: "Caballero", 
  category: "Normal", 
  price: 55, 
  oldPrice: 65, 
  bestSeller: true, 
  img: "/perfumes/khamrah.jpg" 
},

{ 
  id: 1105, 
  name: "ACQUA DI GIO PROFUMO", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/acqua-di-gio-profumo.jpg" 
},

{ 
  id: 1106, 
  name: "BAD BOY", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/bad-boy.jpg" 
},

{ 
  id: 1107, 
  name: "BOSS BOTTLED NIGHT", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/boss-bottled-night.jpg" 
},

{ 
  id: 1108, 
  name: "EROS", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/eros.jpg" 
},

{ 
  id: 1109, 
  name: "EROS FLAME", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/eros-flame.jpg" 
},

{ 
  id: 1110, 
  name: "HUGO", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/hugo.jpg" 
},

{ 
  id: 1111, 
  name: "INVICTUS", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/invictus.jpg" 
},

{ 
  id: 1112, 
  name: "INVICTUS VICTORY", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/invictus-victory.jpg" 
},

{ 
  id: 1113, 
  name: "LE MALE", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/le-male.jpg" },

{ 
  id: 1114, 
  name: "LE MALE ELIXIR", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/le-male-elixir.jpg" 
},

{ 
  id: 1115, 
  name: "ODYSSEY MANDARIN SKY", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/odyssey-mandarin-sky.jpg" 
},

{ id: 2029, 
  name: "ACQUA DI GIO", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/acqua-di-gio.jpg",

  inspiredBy: "Giorgio Armani Acqua di Gio masculino",
  description: "Fragancia fresca acuática con toque limpio y natural.",
  duration: "6–8 horas",
  fixation: "ALTA",
  similarity: "ALTA"
},

{ 
  id: 1116, 
  name: "PLAY INTENSE", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/play-intense.jpg" 
},

{ 
  id: 1117, 
  name: "SAUVAGE", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/sauvage.jpg" 
},

{ 
  id: 1118, 
  name: "SCANDAL MEN", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/scandal-men.jpg" },

{ 
  id: 1119, 
  name: "ULTRA MALE", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/ultra-male.jpg" 
},

{ 
  id: 1120, 
  name: "THE ONE FOR MEN", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/the-one-for-men.jpg" 
},

{ 
  id: 1122, 
  name: "ERBA PURA", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/erba-pura.jpg" 
},

{ 
  id: 1023, 
  name: "ONE MILLION ELIXIR", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/one-million-elixir.jpg" 
},

{ id: 1024, 
  name: "ONE MILLION", 
  gender: "Caballero", 
  category: "Normal", 
  price: 45, 
  img: "/perfumes/one-million.jpg"
},

];

const featuredPerfumes = perfumes.filter((p) =>
  [
    "VALENTINO",
    "LE BEAU",
    "KHAMRAH",
    "GOOD GIRL",
    "COCONUT",
  ].includes(p.name)
);

export default function App() {
  /* =========================
     1. ESTADOS PRINCIPALES
  ========================= */

  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [query, setQuery] = useState("");
  const [activeStory, setActiveStory] = useState("Dama");
  const [filter, setFilter] = useState("Todos");
  const [showCart, setShowCart] = useState(false);

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
    <>
    {selectedPerfume && (

<div
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100vh",

background:"#f7f7f7",

overflowY:"auto",

zIndex:999999
}}
>

{/* BOTÓN VOLVER */}

<div
style={{
position:"sticky",
top:0,

background:"#fff",

padding:"20px",

boxShadow:"0 5px 20px rgba(0,0,0,.08)",

zIndex:20
}}
>

<button

onClick={()=>setSelectedPerfume(null)}

style={{

padding:"10px 20px",

border:"none",

borderRadius:"12px",

background:"#111",

color:"#fff",

cursor:"pointer",

fontWeight:"bold"

}}

>

← Volver

</button>

</div>

{/* FOTO PREMIUM */}

<div
style={{
width:"100%",
height:"480px",

display:"flex",
justifyContent:"center",
alignItems:"center",

background:"linear-gradient(180deg,#ffffff,#f6f6f6)",

borderBottomLeftRadius:"45px",
borderBottomRightRadius:"45px",

boxShadow:"0 15px 35px rgba(0,0,0,.08)"
}}
>

<img

src={selectedPerfume.img}

alt={selectedPerfume.name}

style={{

width:"320px",

maxWidth:"80%",

maxHeight:"420px",

objectFit:"contain",

filter:"drop-shadow(0 30px 35px rgba(0,0,0,.18))"

}}

 />

</div>

{/* INFORMACIÓN */}

<div
style={{

maxWidth:"900px",

margin:"-40px auto 40px",

background:"#fff",

borderRadius:"35px",

padding:"40px",

boxShadow:"0 20px 50px rgba(0,0,0,.12)"

}}
>

<h1
style={{

color:"#111",

fontSize:"42px",

fontFamily:"Playfair Display",

textAlign:"center",

marginBottom:"10px"

}}
>

{selectedPerfume.name}

</h1>

<h2
style={{

color:"#c9a96e",

fontSize:"45px",

fontWeight:"bold",

textAlign:"center",

marginTop:"5px",

marginBottom:"15px"

}}
>

S/ {selectedPerfume.price}

</h2>

{selectedPerfume.inspiredBy && (

<p
style={{

fontSize:"18px",

color:"#777",

textAlign:"center",

fontStyle:"italic",

marginBottom:"30px"

}}
>

Inspirado en {selectedPerfume.inspiredBy}

</p>

)}

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"10px",
marginBottom:"30px"
}}
>

<div
style={{
fontSize:"30px",
color:"#FFD700",
letterSpacing:"3px"
}}
>

★★★★★

</div>

<div
style={{
fontSize:"18px",
fontWeight:"bold",
color:"#555"
}}
>

⭐ {ratingData[selectedPerfume.id]?.average?.toFixed(2) || "5.00"}

</div>

</div>

{/* DESCRIPCIÓN */}

<div
style={{
background:"#fafafa",
padding:"30px",
borderRadius:"25px",
marginBottom:"30px",
boxShadow:"0 10px 25px rgba(0,0,0,.08)"
}}
>

<h3
style={{
color:"#111",
marginBottom:"20px",
fontSize:"24px"
}}
>

📖 Descripción

</h3>

<p
style={{
lineHeight:"1.9",
fontSize:"17px",
color:"#666"
}}
>

{selectedPerfume.description}

</p>

</div>

{/* INFORMACIÓN */}

<div
style={{
background:"#fff",
padding:"30px",
borderRadius:"25px",
boxShadow:"0 10px 25px rgba(0,0,0,.08)",
marginBottom:"30px"
}}
>

<p style={{fontSize:"17px"}}>
⏳ <strong>Duración:</strong> {selectedPerfume.duration}
</p>

<hr style={{margin:"20px 0",opacity:.2}}/>

<p style={{fontSize:"17px"}}>
💎 <strong>Fijación:</strong> {selectedPerfume.fixation}
</p>

<hr style={{margin:"20px 0",opacity:.2}}/>

<p style={{fontSize:"17px"}}>
👃 <strong>Similaridad:</strong> {selectedPerfume.similarity}
</p>

</div>


</div>

</div>

)}

  {/* FONDO FIJO */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",

      backgroundImage: `
        linear-gradient(
          rgba(0,0,0,.75),
          rgba(0,0,0,.75)
        ),
        url('/fondo-lujo.jpg')
      `,

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      zIndex: -2
    }}
  ></div>
    <div style={{
  minHeight: "100vh",
  padding: "20px",
  color: "white",
  position: "relative",
  zIndex: 1
}}>

    {/* HERO BANNER ANIMADO */}
    
    {/* ================= HEADER PREMIUM ================= */}

<div
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
zIndex:9999,
background:"#3a3a49",
color:"#fff"
}}
>

{/* Barra superior */}

<div
style={{
height:"34px",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontSize:"13px",
fontWeight:"bold",
letterSpacing:"1px"
}}
>

MAISON VENEXIS

<a

href="https://www.tiktok.com/@masion_venexis.18"

target="_blank"

rel="noreferrer"

style={{
color:"#fff",
marginLeft:"8px",
textDecoration:"none"
}}

>

CONÓCENOS →

</a>

</div>

{/* Barra principal */}

<div
style={{
  position: "fixed",
  top: "30px",
  left: 0,
  width: "100%",

  zIndex: 9999,

  background: "rgba(255,255,255,.95)",

  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "10px 40px",

  boxShadow: "0 8px 25px rgba(0,0,0,.10)"
}}
>

{/* LOGO */}

<img
  src="/logo-maison-venexis.png"
  alt="Maison Venexis"

  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  style={{
    width: "75px",
    height: "75px",
    objectFit: "contain",
    cursor: "pointer",
    transition: ".35s",
    userSelect: "none"
  }}

  onMouseEnter={(e)=>{
    e.currentTarget.style.transform="scale(1.08)";
  }}

  onMouseLeave={(e)=>{
    e.currentTarget.style.transform="scale(1)";
  }}
/>

{/* MENÚ */}

<div
style={{
display:"flex",
gap:"35px",
fontSize:"15px",
color:"#111",
flex:1,
justifyContent:"center"
}}
>

<div
style={{cursor:"pointer"}}
onClick={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}
>

Inicio

</div>

<div
style={{cursor:"pointer"}}
>

Perfumes

</div>

<div
style={{cursor:"pointer"}}
>

Categorías

</div>

</div>

{/* ICONOS */}

<div
style={{
display:"flex",
alignItems:"center",
gap:"18px",
minWidth:"90px",
justifyContent:"flex-end",
paddingRight:"60px"
}}
>

{/* LUPA */}

<div
style={{
fontSize:"24px",
cursor:"pointer",
transition:".3s"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="scale(1.15)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="scale(1)";
}}
>
🔍
</div>

{/* CARRITO */}

<div
onClick={()=>setShowCart(!showCart)}
style={{
position:"relative",
fontSize:"24px",
cursor:"pointer",
transition:".3s"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="scale(1.15)";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="scale(1)";
}}
>
🛒

{cart.length > 0 && (
<div
style={{
position:"absolute",
top:"-8px",
right:"-10px",

minWidth:"20px",
height:"20px",

padding:"0 5px",

borderRadius:"50%",

background:"#ff2b2b",

color:"#fff",

display:"flex",
justifyContent:"center",
alignItems:"center",

fontSize:"11px",
fontWeight:"bold",

border:"2px solid white",

boxShadow:"0 3px 10px rgba(255,0,0,.4)"
}}
>
{cart.length}
</div>
)}

</div>

</div>

</div>

</div>
    
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

  {/* 🔥 BARRA DE CONFIANZA */}
  <div style={{
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "30px",
  padding: "15px",
  background: "linear-gradient(90deg, #1a1a1a, #0f0f0f)",
  borderRadius: "15px",
  border: "1px solid rgba(255,255,255,0.05)"
}}>

  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "20px" }}>🔥</div>
    <div style={{ fontSize: "13px", color: "#fff", fontWeight: "500" }}>
      Más de +100 clientes satisfechos
    </div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "20px" }}>🚚</div>
    <div style={{ fontSize: "13px", color: "#fff", fontWeight: "500" }}>
      Envíos a todo Lima
    </div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "20px" }}>💎</div>
    <div style={{ fontSize: "13px", color: "#fff", fontWeight: "500" }}>
      Calidad garantizada
    </div>
  </div>

</div>

{/* ⭐ PERFUMES MÁS VENDIDOS */}

<div style={{ margin: "25px 0" }}>

  <h2
    style={{
      textAlign: "center",
      color: "#c9a96e",
      fontSize: "34px",
      marginBottom: "10px",
      fontFamily: "'Playfair Display', serif"
    }}
  >
    ⭐ Perfumes más vendidos
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#bbb",
      marginBottom: "15px"
    }}
  >
    Los favoritos de nuestros clientes
  </p>

  <Swiper
modules={[
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow
]}

effect="coverflow"

grabCursor={true}

centeredSlides={true}

loop={true}

slidesPerView={3}

spaceBetween={25}

coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 1,
  scale: 0.88,
  slideShadows: false
}}

autoplay={{
  delay: 2800,
  disableOnInteraction: false
}}

navigation

pagination={{
  clickable: true
}}

style={{
  paddingTop: "10px",
  paddingBottom: "20px"
}}
>

    {featuredPerfumes.map((perfume) => (

<SwiperSlide
  key={perfume.id}
  style={{
    width: "340px"
  }}
>

<div
style={{
width:"320px",
margin:"0 auto",

background:"linear-gradient(180deg,#ffffff,#f8f8f8)",

borderRadius:"22px",

overflow:"hidden",

position:"relative",

boxShadow:"0 20px 55px rgba(0,0,0,.25)",

transition:"all .45s ease",

cursor:"pointer"

}}

onMouseEnter={(e)=>{

e.currentTarget.style.transform="translateY(-12px) scale(1.03)";

e.currentTarget.style.boxShadow="0 35px 80px rgba(201,169,110,.35)";

}}

onMouseLeave={(e)=>{

e.currentTarget.style.transform="translateY(0px) scale(1)";

e.currentTarget.style.boxShadow="0 20px 55px rgba(0,0,0,.25)";

}}
>

<div
style={{
height:"250px",

background:"linear-gradient(180deg,#ffffff,#fafafa)",

display:"flex",

justifyContent:"center",

alignItems:"center",

overflow:"hidden",

position:"relative"
}}
>

<div
className="gold-shine"
style={{
position:"absolute",
top:0,
left:"-120%",
width:"60%",
height:"100%",
background:"linear-gradient(120deg,transparent,rgba(255,255,255,.6),transparent)",
transform:"skewX(-25deg)"
}}
></div>

<img
src={perfume.img}
alt={perfume.name}
style={{
maxWidth:"88%",
maxHeight:"90%",
objectFit:"contain",
transition:"transform .5s ease"
}}
/>

</div>

<div
style={{
padding:"22px"
}}
>

<h3
style={{
margin:"0",
fontSize:"22px",
color:"#111",
fontFamily:"Playfair Display"
}}
>
{perfume.name}
</h3>

<div
style={{
marginTop:"12px"
}}
>

{perfume.oldPrice && (

<div
style={{
textDecoration:"line-through",
color:"#888",
fontSize:"14px"
}}
>

S/ {perfume.oldPrice}

</div>

)}

<div
style={{
fontSize:"28px",
fontWeight:"bold",
color:"#c9a96e"
}}
>

S/ {perfume.price}

</div>

</div>

<button

onClick={()=>{
setSelectedPerfume(perfume);
}}

style={{
marginTop:"18px",
width:"100%",
padding:"13px",
borderRadius:"12px",
border:"none",
background:"linear-gradient(45deg,#c9a96e,#f3d59a)",
fontWeight:"bold",
cursor:"pointer",
fontSize:"15px"
}}

>

Ver perfume

</button>

</div>

</div>

</SwiperSlide>

    ))}

  </Swiper>

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

      {/* BUSCADOR + CARRITO */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px"
  }}
>

  {/* BUSCADOR */}

  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: "30px",
      padding: "8px 15px",
      width: "60%",
      maxWidth: "500px",
      boxShadow: "0 8px 25px rgba(0,0,0,.15)"
    }}
  >

    <span
      style={{
        fontSize: "20px",
        marginRight: "10px"
      }}
    >
      🔍
    </span>

    <input
      placeholder="Buscar perfume..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "15px",
        background: "transparent"
      }}
    />

  </div>

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

{/* 🔥 ETIQUETAS DINÁMICAS */}

{/* 🔥 MÁS VENDIDO */}
{perfume.bestSeller && (
  <div style={{
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#ff3b3b",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "10px",
    fontWeight: "bold",
    boxShadow: "0 0 10px rgba(255,0,0,0.5)"
  }}>
    🔥 Más vendido
  </div>
)}

{/* ⭐ RECOMENDADO */}
{!perfume.bestSeller && perfume.recommended && (
  <div style={{
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#ffd700",
    color: "#000",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "10px",
    fontWeight: "bold",
    boxShadow: "0 0 10px rgba(255,215,0,0.6)"
  }}>
    ⭐ Recomendado
  </div>
)}

{/* 🆕 NUEVO */}
{!perfume.bestSeller && !perfume.recommended && perfume.category === "Nuevos" && (
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
    <div style={{ marginBottom: "12px" }}>

  {/* PRECIO ANTIGUO (tachado) */}
  {perfume.oldPrice && (
    <div style={{
      textDecoration: "line-through",
      color: "#888",
      fontSize: "13px"
    }}>
      S/ {perfume.oldPrice}
    </div>
  )}

  {/* PRECIO NUEVO */}
  <div style={{
    color: "#c9a96e",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "1px"
  }}>
    S/ {perfume.price}
  </div>

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

.gold-shine{
    animation: shineMove 4s infinite;
}

@keyframes shineMove{

0%{
left:-120%;
}

100%{
left:180%;
}

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
{false && (
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

      {selectedPerfume.inspiredBy && (
  <p style={{
    color: "#c9a96e",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: "-8px",
    marginBottom: "15px"
  }}>
    Inspirado en {selectedPerfume.inspiredBy}
  </p>
)}

{selectedPerfume.description && (
  <div style={{
    background: "#252525",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    lineHeight: "1.7"
  }}>

    <p style={{ marginBottom: "15px" }}>
      {selectedPerfume.description}
    </p>

    <div>⏳ <strong>Duración:</strong> {selectedPerfume.duration}</div>

    <div>🌟 <strong>Fijación:</strong> {selectedPerfume.fixation}</div>

    <div>👃 <strong>Similar al original:</strong> {selectedPerfume.similarity}
    
  </div>
  </div>
)}


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
</>

  );
}