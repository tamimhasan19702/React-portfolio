import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner/Banner';

const App = () => {
  return (
    <div className='App'>
      <NavMenu />
      <Banner />
    </div>
  )
}

export default App
