import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Management from "./pages/Management";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import ProductCategory from "./pages/ProductCategory";
import FaceComponents from "./pages/FaceComponents";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/management-team" element={<Management />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/mechanical-seal-face-components" element={<FaceComponents />} />
        <Route path="/products/:slug" element={<ProductCategory />} />
      </Route>
    </Routes>
  );
}
