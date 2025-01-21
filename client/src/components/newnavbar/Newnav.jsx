import "./newnav.css";

const Newnav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Bestsllers</p>
          <p>Fashion</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today deal</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src="./nav.jpg" alt="navdata"></img>
        </div>
      </div>
    </div>
  );
};

export default Newnav;
