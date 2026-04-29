import Header from "./Header";
import GamePanel from "./GamePanel";
import Footer from "./Footer";
import "../styles/app.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <GamePanel />
      <Footer />
    </div>
  );
}
