import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header img" src={logo} alt="react quiz" />
      <h1 id="h1">React Quiz</h1>
    </header>
  );
}