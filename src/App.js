import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AlbumSearch from "./pages/albumSearch/AlbumSearch";
import ArtistSearch from "./pages/artistSearch/ArtistSearch";
import Login from "./pages/login/Login";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/artistsearch" element={<ArtistSearch />} />
        <Route path="/albumsearch" element={<AlbumSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
