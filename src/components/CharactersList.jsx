import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  function NavePage(props) {
    if (props.page == 1) {
      return (
        <header className="d-flex justify-content-between align-items-center">
          <p>Página actual: {props.page}</p>
          <div>
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => props.setPage(props.page + 1)}
            >
              Página: {props.page + 1}
            </button>
          </div>
        </header>
      );
    } else if (props.page >= 2 && props.page <= 41) {
      return (
        <header className="d-flex justify-content-between align-items-center">
          <p>Página actual: {props.page}</p>
          <div>
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => props.setPage(props.page - 1)}
            >
              Página: {props.page - 1}
            </button>
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => props.setPage(props.page + 1)}
            >
              Página: {props.page + 1}
            </button>
          </div>
        </header>
      );
    } else {
      return (
        <header className="d-flex justify-content-between align-items-center">
          <p>Página actual: {props.page}</p>
          <div>
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() => props.setPage(props.page - 1)}
            >
              Página: {props.page - 1}
            </button>
          </div>
        </header>
      );
    }
  }

  useEffect(() => {
    //   //Realiza la peticion a otro servidor de forma asincronica
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json(); //Convierte la respuesta en un archivo json
      //
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results);
    }

    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  {
    /* <CharacterList/> */
  }
  return (
    <div className="container">
      <NavePage page={page} setPage={setPage} />
      <div className="row">
        {characters.map((character) => {
          return (
            <div key={character.id} className="col-md-4">
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
