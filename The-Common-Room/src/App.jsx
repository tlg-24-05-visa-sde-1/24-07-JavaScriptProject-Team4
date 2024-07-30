import {Link, Route, Routes} from "react-router-dom";
import './App.css'
import CommonPage from './Pages/CommonPage'
import WelcomePage from './Pages/WelcomePage'

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
      </Routes>
      
      
    </>
  )
}

export default App
