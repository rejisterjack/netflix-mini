import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home"
import "./styles.css"
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
