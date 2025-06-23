import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Work from "./components/Work";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DevelopmentSection from "./components/DevelopmentSection";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Media />
            <DevelopmentSection />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<DevelopmentSection />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other pages here if needed */}
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}


export default App;
