import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';


const App = () => {
  return (
    <div className='App'>
      <NavMenu />
      <Banner />
      <Skills/>
      <Projects />
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App


