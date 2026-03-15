import './App.css'
import Header from './components/Header';
import Hero from "./components/Hero.tsx";
import Cards from "./components/Cards.tsx";
import Road from "./components/Road.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Faq from "./components/Faq.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <Header/>
        <section id="hero">
            <Hero/>
        </section>
        <section id="trade">
            <Cards/>
        </section>
        <section id="earn">
            <Road/>
        </section>
        <section id="about">
            <AboutUs/>
        </section>
        <section id="faq">
            <Faq/>
        </section>
        <Footer/>
    </>
  )
}

export default App
