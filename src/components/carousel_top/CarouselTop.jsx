import "./carousel.css";
import comex from "../../assets/COMEX1.jpg";
import calindra from "../../assets/CALINDRA2.jpg";
import saint from "../../assets/SAINT3.jpg";
import truper from "../../assets/TRUPER4.jpg";

const CarouselTop = () => {
  return (
    <div className="slider-frame">
      <ul>
        <li>
          <img src={comex} alt="" />
        </li>
        <li>
          <img src={calindra} alt="" />
        </li>
        <li>
          <img src={saint} alt="" />
        </li>
        <li>
          <img src={truper} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default CarouselTop;
