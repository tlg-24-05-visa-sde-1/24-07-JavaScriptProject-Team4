import Header from "../../../Components/Header/Header";
import CommonRoom from "../../../Components/CommonRoom/CommonRoom";
import "./Slytherin.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import CrCarouselData from "../../../Components/CommonRoom/CommonRoomCarouselData";

function Slytherin() {
  let data = CrCarouselData({house: "slytherin"});
  return (
    <div>
      <Header name="Slytherin" />
      <CommonRoom />
      <Carousel data={data} />
    </div>
  );
}

export default Slytherin;
