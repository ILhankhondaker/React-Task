import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />

    <App />
    <Footer />
  </StrictMode>
);
