import { Routes, Route } from "react-router-dom";
import Home from "./pages/layouts/home/Home";
import Project from "./pages/layouts/project/Project";
import Certificate from "./pages/layouts/certificate/Certificate";
import Contact from "./pages/layouts/contact/Contact";

export default function RoutePages() {
  const dataResponse = [
    {
      id: 1,
      nama: "Bahasa Pemrograman C",
      images: "react.svg",
    },
    {
      id: 2,
      nama: "Bahasa Pemrograman HTML, CSS, Javascript",
      images: "react.svg",
    },
    {
      id: 3,
      nama: "Bahasa Pemrograman Javascript Fundamental (Node.js)",
      images: "react.svg",
    },
    {
      id: 4,
      nama: "Postman, Github",
      images: "react.svg",
    },
    {
      id: 5,
      nama: "Bahasa Pemrograman Javascript (React)",
      images: "react.svg",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project data={dataResponse} />} />
      <Route path="/certificate" element={<Certificate data={dataResponse} />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
