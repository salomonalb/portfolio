import { userData } from "./data";
import Hero from "./components/Hero";

function App() {
  

  return (
    <main className="App">
      <Hero userData={userData} />
    </main>
  );
}

export default App;
