// utils/seedProducts.js    
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./config";

const products = [
  {
    name: "Café Colombia",
    price: 2500,
    rate: 5,
    description: "Notas dulces con cuerpo medio",
    image: "https://via.placeholder.com/150",
    category: "cafe"
  },
  {
    name: "Café Perú",
    price: 2700,
    rate: 5,
    description: "Café suave con notas a nuez",
    image: "https://via.placeholder.com/150",
    category: "cafe"
  },
  {
    name: "Café Etiopía",
    price: 2900,
    rate: 5,
    description: "Café floral con notas a frutas rojas",
    image: "https://via.placeholder.com/150",
    category: "cafe"
  },
  {
    name: "Café Brasil",
    price: 2400,
    rate: 5,
    description: "Cuerpo intenso y sabor achocolatado",
    image: "https://via.placeholder.com/150",
    category: "cafe"
  },
  {
    name: "Café Guatemala",
    price: 2600,
    rate: 5,
    description: "Café con acidez brillante y notas cítricas",
    image: "https://via.placeholder.com/150",
    category: "cafe"
  },
  {
    name: "Remera Oversize Negra",
    price: 6500,
    description: "Remera unisex de algodón suave, ideal para uso diario.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1585386959984-a4155222d45a?auto=format&fit=crop&w=500&q=80",
    rate: 4
  },
  {
    name: "Pantalón Cargo Beige",
    price: 11200,
    description: "Pantalón cargo con bolsillos laterales, estilo urbano.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1602810310591-268f4d5a4e11?auto=format&fit=crop&w=500&q=80",
    rate: 5
  },
  {
    name: "Campera Rompeviento Celeste",
    price: 18500,
    description: "Campera liviana ideal para viento o lluvias leves.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1618354691373-fb01439c7f41?auto=format&fit=crop&w=500&q=80",
    rate: 4
  },
  {
    name: "Vestido Largo Floral",
    price: 15000,
    description: "Vestido largo y fresco con estampado floral.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
    rate: 5
  },
  {
    name: "Buzo Unisex Azul Marino",
    price: 9800,
    description: "Buzo de algodón con capucha y bolsillo delantero.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1622016927702-ec7e4328859e?auto=format&fit=crop&w=500&q=80",
    rate: 4
  },
  {
    name: "Jean Slim Azul Oscuro",
    price: 13200,
    description: "Jean de corte slim, resistente y cómodo.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1602810310651-7d439c788f89?auto=format&fit=crop&w=500&q=80",
    rate: 5
  },
  {
    name: "Top Deportivo Rosa",
    price: 7200,
    description: "Top cómodo para entrenamiento o uso diario.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1593032457860-4d8acb6ea2c5?auto=format&fit=crop&w=500&q=80",
    rate: 4
  },
  {
    name: "Camisa Blanca Clásica",
    price: 8900,
    description: "Camisa formal, ideal para oficina o eventos.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1583225341261-019f189a8a3c?auto=format&fit=crop&w=500&q=80",
    rate: 5
  },
  {
    name: "Campera de Jean",
    price: 16200,
    description: "Campera de jean azul claro, estilo vintage.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1618354691221-129a41b1f740?auto=format&fit=crop&w=500&q=80",
    rate: 4
  },
  {
    name: "Pollera Plisada Negra",
    price: 9400,
    description: "Pollera elegante con pliegues, cómoda y versátil.",
    category: "clothes",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=500&q=80",
    rate: 5
  }
];

const db = getFirestore(app)

export const seedProducts = async () => {
    
  const productsRef = collection(db, "items");
  for (let product of products) {
    try {
      await addDoc(productsRef, product);
      console.log("Agregado:", product.name);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  }
};
