import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Repos } from './components/repos/Repos';

const App = () => {
  return (
    <div className='App'>
      <NavMenu />
      <Banner />
      <Skills/>
      <Repos/>

    </div>
  )
}

export default App
