import { Divider } from "@mui/material";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1> Shopping Cart</h1>
          <p>Select All Items</p>
          <span className="leftbuyprice">Price </span>
          <Divider />
          <div className="item_containert">
            <img src="https://m.media-amazon.com/images/I/41549pixTSL._SX300_SY300_QL70_FMwebp_.jpg" />
            <div className="item_details">
              <h3>boAt Airdopes 91 Prime, 45HRS Battery,</h3>
              <h3>smart watches</h3>
              <h3 className="diffrentprice">₹4049.00</h3>
              <p className="unusuall">Usually dispatch in 3 days.</p>
              <p> Elgible for FREE shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt="logo"
              />
              <Option/>
            </div>
            <h3 className="item_price"> ₹4049.00</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
        <Right/>
        
      </div>
    </div>
  );
};

export default Buynow;
