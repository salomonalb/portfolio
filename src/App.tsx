import { userData } from "./data";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  

  return (
    <main className="App">
      <Hero name={userData.name} lastName={userData.lastName} profilePicture={userData.profilePicture} description={userData.description} />
      <Skills skills={userData.skills} />
    </main>
  );
}

export default App;
