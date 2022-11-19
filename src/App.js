import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';

const App = () => {
  return (
    <div className='App'>
      <NavMenu />
      <Banner />
      <Skills/>
    </div>
  )
}

export default App
