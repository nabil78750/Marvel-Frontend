import axios from "axios";
import { useState, useEffect } from "react";
import "../comicPage/comicPage.css";
import { useSearchParams } from "react-router-dom";
import Heros from "../../components/heros-comics/heros-comics";

const ComicPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [dataComics, setDataComics] = useState();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comics?title=${search}&page=${page}`
        );
        console.log(response.data);
        setDataComics(response.data);
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
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <Heros />
      <main className="container">
        <input
          type="search"
          name=""
          id=""
          placeholder="Barre de recherche"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <p>{dataComics.count} RESULTS</p>
        <div className="button-page">
          {page > 1 && <button onClick={previousPage}>PREV</button>}
          <span>{page}</span>
          {page < 474 && <button onClick={nextPage}>NEXT</button>}
        </div>

        <div className="comic-container">
          {dataComics.results.map((data) => {
            return (
              <div key={data._id} className="comic-map">
                {/* {console.log(data.thumbnail.path + "." + data.thumbnail.extension)} */}
                <img
                  src={data.thumbnail.path + "." + data.thumbnail.extension}
                />
                <div className="comic-descript">
                  <h1>{data.title}</h1>
                  <p>{data.description && data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default ComicPage;
