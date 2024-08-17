import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/footer"
import Projects from "./components/projects/Projects"
import ScrollMe from "./components/suggestionIcons/ScrollMe"
import HoverMe from "./components/suggestionIcons/HoverMe"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ScrollMe/>
      <About/>
      <HoverMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App