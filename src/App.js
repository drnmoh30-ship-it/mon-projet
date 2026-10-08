import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Formations from "./components/Formations";
import Formateurs from "./components/Formateurs";
import Etudiants from "./components/Etudiants";
import Statistiques from "./components/Statistiques";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <Navbar />

      <Banner />

      <About />

      <Formations />

      <Formateurs />

      <Etudiants />

      <Statistiques />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;