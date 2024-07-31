import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GreatHall from "./Pages/GreatHall/GreatHall";
import Gryffindor from "./Pages/CommonRooms/Gryffindor/Gryffindor";
import Hufflepuff from "./Pages/CommonRooms/Hufflepuff/Hufflepuff";
import Ravenclaw from "./Pages/CommonRooms/Ravenclaw/Ravenclaw";
import Slytherin from "./Pages/CommonRooms/Slytherin/Slytherin";

function App() {
  const audio = new Audio("/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3");

  const playAudio = () => {
    audio
      .play()
      .then(() => {
        console.log("Playing Music");
      })
      .catch((error) => {
        console.error("Error playing", error);
      });
  };

  return (
    <>
      <menu>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link onClick={playAudio} to="/">
            Home
          </Link>
        </nav>
      </menu>

      <Routes>
        <Route path="/" element={<GreatHall />} />
        <Route path="/gryffindor" element={<Gryffindor />} />
        <Route path="/hufflepuff" element={<Hufflepuff />} />
        <Route path="/ravenclaw" element={<Ravenclaw />} />
        <Route path="/slytherin" element={<Slytherin />} />
      </Routes>
    </>
  );
}

export default App;
