import axios from "axios";
import { useState, useEffect } from "react";
import "../comicPage/comicPage.css";
import { useSearchParams, Link } from "react-router-dom";
import Heros from "../../components/heros-comics/heros-comics";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          `https://site--marvel-backend--vmpzhpnkq74r.code.run/comics?title=${search}&page=${page}`
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

  // const previousPage = () => {
  //   setSearchParams({ page: page - 1 });
  //   setPage(page - 1);
  // };

  // const nextPage = () => {
  //   setSearchParams({ page: page + 1 });
  //   setPage(page + 1);
  // };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
        <div>
          {/* {page > 1 && <button onClick={previousPage}>PREV</button>}
          <span>{page}</span>
          {page < 474 && <button onClick={nextPage}>NEXT</button>} */}{" "}
          <PaginationControl
            page={page}
            between={4}
            total={dataComics.count}
            limit={100}
            changePage={(page) => {
              setPage(page);
            }}
            ellipsis={1}
          />
        </div>
        <Carousel responsive={responsive} slidesToSlide={2}>
          {dataComics.results.map((data) => {
            return (
              <div className="comic-container" key={data._id}>
                <div className="comic-map">
                  <Link className="comic-link" to={`/comic/${data._id}`}>
                    {/* {console.log(data.thumbnail.path + "." + data.thumbnail.extension)} */}
                    <img
                      src={data.thumbnail.path + "." + data.thumbnail.extension}
                    />
                    <div className="comic-descript">
                      <h1>{data.title}</h1>
                      {/* <p>{data.description && data.description}</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
      </main>
    </>
  );
};
export default ComicPage;
