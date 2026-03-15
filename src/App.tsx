import './App.css'
import Header from './components/Header';
import Hero from "./components/Hero.tsx";
import Cards from "./components/Cards.tsx";
import Road from "./components/Road.tsx";
import AboutUs from "./components/AboutUs.tsx";

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
    </>
  )
}

export default App
