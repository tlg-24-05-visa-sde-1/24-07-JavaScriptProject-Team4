import React, { useState } from "react";
import InputForm from "../../Components/InputForm/InputForm";
import "./GreatHall.css";
import { Carousel } from "../../Components/Carousel/Carousel";
import CarouselData from "../../Components/Carousel/CarouselData";

function GreatHall() {
  const [data, setData] = useState([]);
  // let data = CarouselData();
  // console.log(data)
  const fetchData = async () => {
    let data = await CarouselData();
    // data.forEach((item) => {
    //   console.log(item);
    // });
    setData(data);
  }
  fetchData();


  return (
    <div>
      <InputForm />
      {/* <CarouselData /> */}
      <Carousel data={data}/>;
    </div>
  );
}

export default GreatHall;
