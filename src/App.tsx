import "./App.css";
import { Footer } from "./components/Footer";
import {Header} from "./components/Header";
import { Nav } from "./components/Nav";
import { Profile } from "./components/Profile";


function App () {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
