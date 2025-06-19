export const categoryItem = [
  {
    id: 1,
    img: "/images/category/cat-1.jpg",
    title: "Tactical solutions",
  },
  {
    id: 2,
    img: "/images/category/cat-2.jpg",
    title: "Home Solutions",
  },
  {
    id: 3,
    img: "/images/category/cat-3.jpg",
    title: "Mounts",
  },
  {
    id: 4,
    img: "/images/category/cat-3.jpg",
    title: "ClipOn",
  },
  {
    id: 5,
    img: "/images/category/cat-3.jpg",
    title: "Accessories",
  },
];
export const products: IPrdoctsResponse[] = [
  {
    id: 1,
    img: "/images/products/img1.jpg",
    title: "Magne-Tech Rigel II: 1100 Lumen Magnetic Tactical Flashlight",
    brand: "RRP Incl GST",
    price: "499.99",
    instock: true,
  },
  {
    id: 2,
    img: "/images/products/img2.jpg",
    title:
      "Magne-Tech Rigel II-P: 1100 Lumen Magnetic Tactical Light Kit for Picatinny Rail",
    brand: "RRP Incl GST",
    price: "549.99",
    instock: true,
  },
  {
    id: 3,
    img: "/images/products/img3.jpg",
    title:
      "Magne-Tech Rigel II-M: 1100 Lumen Magnetic Tactical Light Kit for M-Lok Rail",
    brand: "RRP Incl GST",
    price: "459.99",
    instock: false,
  },
  {
    id: 4,
    img: "/images/products/img4.jpg",
    title: "Magne-Tech Magnetic Weapon Mount for Picatinny Rail non locking",
    brand: "RRP Incl GST",
    price: "219.99",
    instock: true,
  },
  {
    id: 5,
    img: "/images/products/img5.jpg",
    title: "Magne-Tech Magnetic Weapon Mount for M-Lok Rail",
    brand: "RRP Incl GST",
    price: "168.99",
    instock: false,
  },
  {
    id: 6,
    img: "/images/products/img6.jpg",
    title: "Magne-Tech Magnetic Belt Clip",
    brand: "RRP Incl GST",
    price: "99.99",
    instock: true,
  },
  {
    id: 7,
    img: "/images/products/img3.jpg",
    title:
      "Magne-Tech Rigel II-M: 1100 Lumen Magnetic Tactical Light Kit for M-Lok Rail",
    brand: "RRP Incl GST",
    price: "399.99",
    instock: true,
  },
];
export interface IPrdoctsResponse {
  id: number;
  img: string;
  title: string;
  brand: string;
  price: string;
  instock: boolean;
}
