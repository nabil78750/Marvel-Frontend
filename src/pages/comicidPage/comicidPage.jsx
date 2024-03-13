import "../comicidPage/comicidPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const comicidPage = () => {
  const [dataComics, setDataComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--vmpzhpnkq74r.code.run/comic/${id}`
        );
        console.log(">>>>>data", response.data);
        setDataComics(response.data);
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
    <main className="container-comic">
      <div className="comicid-container ">
        <img
          src={dataComics.thumbnail.path + "." + dataComics.thumbnail.extension}
        />
        <div className="comicid-descript">
          <h2>{dataComics.title}</h2>
          <p>{dataComics.description}</p>
        </div>
      </div>
    </main>
  );
};
export default comicidPage;
