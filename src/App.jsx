import { useState, useEffect } from "react";
import IdeaCard from "./components/IdeaCard";

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchedIdeas = [
      {
        id: 1,
        idea: "Role playing game adalah game yang paling banyak dimainkan",
        backgroundColor: "lightblue",
      },
      {
        id: 2,
        idea: "First person shooter adalah game yang paling banyak dimainkan",
        backgroundColor: "lightpink",
      },
      {
        id: 3,
        idea: "Simulation game adalah game yang paling banyak dimainkan",
        backgroundColor: "lightgreen",
      },
    ];

    setIdeas(fetchedIdeas);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Ide Game (Conditional Rendering)
      </h1>
      {ideas.map((item) => (
        <IdeaCard
          key={item.id}
          idea={item.idea}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </div>
  );
}

export default App;
