  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Service.tsx";


  function App() {
    return (
      <Router>
        <div className="min-h-screen flex flex-col bg-yellow-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;