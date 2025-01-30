import { Divider } from "@mui/material";
import "./cart.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const { id } = useParams("");

  const [inddata, setInddata] = useState([]);

  // console.log(id);
  console.log(inddata);
  
  // const { title, description, url, } = inddata;

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
      if (res.status !== 201) {
        console.log("No data available");
      } else {
        console.log("getdata");
        setInddata(data);
      }
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
          <img src={inddata.url} alt="cart image" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3> 
          {inddata?.title?.shortTitle} 
          </h3>
          <h4>{inddata?.title?.longTitle}</h4>
          <Divider />
          <p className="mrp">₹{inddata?.price?.mrp}.00</p>
          <p>
            Deal Of The Day:<span style={{ color: "#b12704" }}>{inddata?.price?.cost}.00</span>{" "}
          </p>
          <p>
            You save:<span style={{ color: "#b12704" }}>₹{inddata?.price?.mrp- inddata?.price?.cost} ({inddata?.price?.discount})</span>{" "}
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>{inddata?.discount}</span>
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
              {inddata?.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
