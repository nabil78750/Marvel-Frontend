import axios from "axios";
import { useState, useEffect } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import Heros from "../../components/heros-character/heros-character";

const HomePage = ({ setToken }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [dataCharacters, setDataCharacters] = useState();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters?name=${search}&page=${page}`
        );
        // console.log("data>>>>>", response.data);
        setDataCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, page]);

  const previousPage = () => {
    setSearchParams({ page: page - 1 });
    setPage(page - 1);
  };

  const nextPage = () => {
    setSearchParams({ page: page + 1 });
    setPage(page + 1);
  };

  const handlSubmit = (event) => {
    event.prentDefault();
    if (data) {
      //--  Création du cookie
      Cookies.set("userToken", data.token, { secure: true });

      // -- Envoie du token au state
      {
        console.log(data.token);
      }
      setToken("token>>>>", data.token);
    } else {
      setErrorMessage("Veuillez remplir tous les champs");
    }
  };
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <Heros />
      <main className="container-ch">
        <input
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Barre de recherche"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <p>{dataCharacters.count} RESULTS</p>
        <div className="button-page">
          {page > 1 && <button onClick={previousPage}>PREV</button>}
          <span>{page}</span>
          {page < 15 && <button onClick={nextPage}>NEXT</button>}
        </div>

        <div className="character-container">
          {dataCharacters.results.map((data) => {
            return (
              <form onSubmit={handlSubmit} key={data._id}>
                <div className="character-map">
                  <Link
                    className="character-link"
                    to={`/characters/${data._id}`}
                  >
                    {/* {console.log("id>>>", data._id)}
                  {console.log("name>>>>", data.name)}
                  {console.log(">>>>>>", data)} */}
                    <div className="character-img">
                      <img
                        src={
                          data.thumbnail.path + "." + data.thumbnail.extension
                        }
                      />
                    </div>

                    <div className="character-descript">
                      <h1>{data.name}</h1>
                      <p>{data.description}</p>
                    </div>
                  </Link>
                </div>
                <button className="button-favoris">Favoris</button>
              </form>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default HomePage;
