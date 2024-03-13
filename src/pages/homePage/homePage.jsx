import axios from "axios";
import { useState, useEffect } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import Heros from "../../components/heros-character/heros-character";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          `https://site--marvel-backend--vmpzhpnkq74r.code.run/characters?name=${search}&page=${page}`
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

  // const handlSubmit = (event) => {
  //   event.prentDefault();
  //   if (data) {
  //     //--  Création du cookie
  //     Cookies.set("userToken", data.token, { secure: true });

  //     // -- Envoie du token au state
  //     {
  //       console.log(data.token);
  //     }
  //     setToken("token>>>>", data.token);
  //   } else {
  //     setErrorMessage("Veuillez remplir tous les champs");
  //   }
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
        <div>
          <PaginationControl
            page={page}
            between={4}
            total={dataCharacters.count}
            limit={100}
            changePage={(page) => {
              setPage(page);
            }}
            ellipsis={1}
          />
        </div>
        <Carousel responsive={responsive} slidesToSlide={2}>
          {dataCharacters.results.map((data) => {
            return (
              <div key={data._id} className="character-container">
                <div className="character-map">
                  <Link
                    className="character-link"
                    to={`/character/${data._id}`}
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
                      {/* <p>{data.description}</p> */}
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
export default HomePage;
