import photo from "../../assets/photo-hero.jpg";
import photo1 from "../../assets/photo-heros1.jpg";
import photo2 from "../../assets/photo-heros2.jpg";
import photo3 from "../../assets/photo-heros3.jpg";
import photo4 from "../../assets/photo-heros4.jpg";
import "../heros-comics/heros-comics.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Heros = () => {
  return (
    <main className="container-heros">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        <img src={photo} />
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
      </Carousel>
    </main>
  );
};
export default Heros;
