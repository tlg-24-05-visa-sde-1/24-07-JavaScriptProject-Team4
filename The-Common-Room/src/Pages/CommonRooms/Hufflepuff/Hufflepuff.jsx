import Header from "../../../Components/Header/Header";
import CommonRoom from "../../../Components/CommonRoom/CommonRoom";
import "./Hufflepuff.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import CrCarouselData from "../../../Components/CommonRoom/CommonRoomCarouselData";

function Hufflepuff() {
  let data = CrCarouselData({house: "hufflepuff"})
  return (
    <div>
      <Header name="Hufflepuff" />
      <CommonRoom />
      <Carousel data={data} />
    </div>
  );
}

export default Hufflepuff;
