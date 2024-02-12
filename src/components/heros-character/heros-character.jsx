import imgcharacter from "../../assets/img-character.jpg";
import "../../components/heros-character/heros-character.css";
const Heros = () => {
  return (
    <main className="container-heros-character">
      <div className="heros-character-img">
        <img src={imgcharacter} alt="img-character" />
        <div className="title-character">
          <h1>MARVEL CHARACTER</h1>
        </div>
      </div>
    </main>
  );
};
export default Heros;
