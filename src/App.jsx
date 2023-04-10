import CharacterList from "./components/CharactersList";

function App() {
  //Se pasa al Componente CharacterList
  //se crea una variable de arreglo donde se van a alamacenar 2 datos

  return (
    <div className="bg-dark text-white py-3">
      <h1 className="text-center text-info py-4">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
