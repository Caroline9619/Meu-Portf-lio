import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import "./App.css"
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
  <div className={darkMode ? "dark" : ""}>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
    </button>

    <Header />
    <main>
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  </div>
);
}

export default App;