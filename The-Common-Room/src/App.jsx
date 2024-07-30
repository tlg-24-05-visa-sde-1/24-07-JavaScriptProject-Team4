import {Link, Route, Routes} from "react-router-dom";
import './App.css'
import CommonPage from './Pages/CommonPage'
import WelcomePage from './Pages/WelcomePage'
import HufflepuffPage from './Pages/Hufflepuff'
import RavenclawPage from './Pages/Ravenclaw'
import SlytherinPage from './Pages/Slytherin'

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/room">Common Room</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/room" element={<CommonPage />} />
        <Route path="/hufflepuff" element={<HufflepuffPage />} />
        <Route path="/ravenclaw" element={<RavenclawPage />} />
        <Route path="/slytherin" element={<SlytherinPage />} />
      </Routes>
      
      
    </>
  )
}

export default App
