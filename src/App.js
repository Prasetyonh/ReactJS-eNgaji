import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Pages/Home";
import AlQuran from "./Pages/Quran/AlQuran";
import DetailSurat from "./Pages/Quran/DetailSurat.jsx";
import Tafsir from "./Pages/Quran/Tafsir";
import JadwalSholat from "./Pages/Sholat/JadwalSholat";
import DetailKota from "./Pages/Sholat/DetailKota";
import About from "./Pages/About";
import Doa from "./Pages/Doa/KumpulanDoa";

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
              <Route exact path="/about" component={About} />
              <Route exact path="/quran" component={AlQuran} />
              <Route path="/quran/surat/:id" component={DetailSurat} exact />
              <Route path="/quran/tafsir/:id" component={Tafsir} exact />
              <Route path="/jadwal-sholat" component={JadwalSholat} exact />
              <Route
                path="/jadwal-sholat/detail/:id"
                component={DetailKota}
                exact
              />
              <Route exact path="/doa" component={Doa} />
            </Switch>
          </main>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
