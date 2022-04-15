import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Pages/Home";
import AlQuran from "./Pages/AlQuran";
import DetailSurat from "./Pages/DetailSurat.jsx";
import Tafsir from "./Pages/Tafsir";
import JadwalSholat from "./Pages/JadwalSholat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <br />
        <Container>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/quran" component={AlQuran} />
              <Route path="/quran/surat/:id" component={DetailSurat} exact />
              <Route path="/quran/tafsir/:id" component={Tafsir} exact />
              <Route path="/jadwal-sholat" component={JadwalSholat} exact />
            </Switch>
          </main>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
