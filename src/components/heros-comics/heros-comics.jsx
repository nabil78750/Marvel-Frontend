import photo from "../../assets/photo-hero.jpg";
import photo1 from "../../assets/photo-heros1.jpg";
import photo2 from "../../assets/photo-heros2.jpg";
import photo3 from "../../assets/photo-heros3.jpg";
import photo4 from "../../assets/photo-heros4.jpg";
import "../heros-comics/heros-comics.css";

const Heros = () => {
  return (
    <main className="container-heros">
      <div className="heros-img">
        <img src={photo} />
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
      </div>
    </main>
  );
};
export default Heros;
