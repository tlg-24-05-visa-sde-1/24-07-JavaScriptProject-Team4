import Header from "../../../Components/Header/Header";
import CommonRoom from "../../../Components/CommonRoom/CommonRoom";
import "./Gryffindor.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import CrCarouselData from "../../../Components/CommonRoom/CommonRoomCarouselData";

function Gryffindor() {
  let data = CrCarouselData({ house: "gryffindor" });
  // console.log(data);
  return (
    <div>
      <Header name="Gryffindor" />
      <CommonRoom />
      <Carousel data={data} />
    </div>
  );
}

export default Gryffindor;
