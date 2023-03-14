import { userData } from "./data";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  

  return (
    <main className="App">
      <Hero name={userData.name} lastName={userData.lastName} profilePicture={userData.profilePicture} description={userData.description} />
      <Skills skills={userData.skills} />
      <Projects projects={userData.projects} />
    </main>
  );
}

export default App;
