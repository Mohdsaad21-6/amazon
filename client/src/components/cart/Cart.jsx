import { Divider } from "@mui/material";
import "./cart.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const { id } = useParams("");
  // console.log(id);

  const getinddata = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8005/getproductsone/${id}`,
        {
          withCredentials: true,
        }
      );

      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="./image.png " alt="cart image" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>ac with best services</h4>
          <Divider />
          <p className="mrp">M.R.P ₹ 1195</p>
          <p>
            Deal Of The Day:<span style={{ color: "#b12704" }}>₹625.00</span>{" "}
          </p>
          <p>
            You save:<span style={{ color: "#b12704" }}>547 (47%)</span>{" "}
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% 0ff</span>
            </h5>
            <h4>
              {" "}
              Free Deleivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Oct 8-21{" "}
              </span>
              Details{" "}
            </h4>
            <p>
              Fastest Deleivery:
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Tommorrow 11 AM
              </span>
            </p>
          </div>
          <p className="description">
            About The Item{" "}
            <span
              style={{
                color: "565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.",
              }}
            >
              The sun was setting over the vast, rolling hills as a gentle
              breeze rustled the leaves of the tall trees. A group of children
              laughed and played in the distance, their joyful shouts carrying
              on the wind. The air was filled with the sweet scent of blooming
              wildflowers everywhere outside
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
