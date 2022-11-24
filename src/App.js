import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Testimonial } from './components/Testimonial/Testimonial';


const App = () => {
  return (
    <div className='App'>
      <NavMenu />
      <Banner />
      <Skills/>
      <Projects />
      <Testimonial/>
    </div>
  )
}

export default App


// test changes