import styles from './App.module.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Project from './components/Projects/Project'

function App() {
  return <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Project></Project>
  </div>
}

export default App
