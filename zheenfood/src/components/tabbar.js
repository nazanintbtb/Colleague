import "./tabbar.css";
import { Link } from "react-scroll";
import Salad from "../image/healthy-food (2).png";
import Drink from "../image/cocktail.png";
import Coffee from "../image/coffee.png";
import Dish from "../image/dish (1).png";
import Sandwich from "../image/hamburger.png";

function ControlledTabsExample() {
  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link
            to="menu2"
            smooth={true}
            duration={500}
            offset={-320}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 10px",
            }}>
            <img src={Drink} alt="drink" width="85" height="85" />
            <span>نوشیدنی</span>
          </Link>
          <Link
            to="menu3"
            smooth={true}
            duration={500}
            offset={-320}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 10px",
            }}>
            <img src={Salad} alt="salad" width="85" height="85" />
            <span>دسر و سالاد</span>
          </Link>
          <Link
            to=""
            smooth={true}
            duration={100}
            offset={-320}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 10px",
            }}>
            <img src={Dish} alt="dish" width="85" height="85" />
            <span>غذای اصلی</span>
          </Link>
          <Link
            to=""
            smooth={true}
            duration={100}
            offset={-320}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 10px",
            }}>
            <img src={Sandwich} alt="sandwich" width="85" height="85" />
            <span>ساندویج</span>
          </Link>

          <Link
            to="menu2"
            smooth={true}
            duration={500}
            offset={-320}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 10px",
            }}>
            <img src={Coffee} alt="coffee" width="85" height="85" />
            <span>قهوه</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ControlledTabsExample;
