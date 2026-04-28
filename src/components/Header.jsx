import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_content">
        <img src={logo} alt="Memory card logo" />

        <div className="header_text">
          <p>Find all matching pairs!</p>
        </div>
      </div>
    </header>
  );
}
