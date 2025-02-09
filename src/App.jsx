import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz id="quiz" />
      </main>
    </>
  );
}

export default App;
