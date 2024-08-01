import Header from "../../../Components/Header/Header";
import CommonRoom from "../../../Components/CommonRoom/CommonRoom";
import "./Hufflepuff.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import CrCarouselData from "../../../Components/CommonRoom/CommonRoomCarouselData";

function Hufflepuff({ houseName }) {
  let data = CrCarouselData({ house: "hufflepuff" });
  return (
    <div>
      <Header name="Hufflepuff" />
      <CommonRoom houseName={"Hufflepuff"} />
      <Carousel data={data} />
    </div>
  );
}

export default Hufflepuff;
