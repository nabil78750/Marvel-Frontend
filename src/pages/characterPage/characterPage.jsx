import "../characterPage/characterPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const CharacterPage = () => {
  const [dataCharacters, setDataCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--vmpzhpnkq74r.code.run/comics/${id}`
        );
        console.log(">>>>>data", response.data);
        setDataCharacters(response.data);
      } catch (error) {
        console.log("catch", error.response);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const { id } = useParams();
  console.log("params id>>", id);

  return isLoading ? (
    <span>Chargement en cours</span>
  ) : (
    <main className="container-character">
      <div className="characterid-container ">
        <img
          src={
            dataCharacters.thumbnail.path +
            "." +
            dataCharacters.thumbnail.extension
          }
        />
        <div className="characterid-descript">
          <h2>{dataCharacters.name}</h2>
          <p>{dataCharacters.description}</p>
        </div>
      </div>
      <div className="comicId-container">
        {dataCharacters.comics.map((data) => {
          return (
            <div key={data._id} className="comicId-map">
              <img src={data.thumbnail.path + "." + data.thumbnail.extension} />
              <div className="comicId-descript">
                <h1>{data.title}</h1>
                <p>{data.description && data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default CharacterPage;
