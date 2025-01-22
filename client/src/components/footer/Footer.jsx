import "./footer.css"
const Footer = () => {

const year=new Date().getFullYear();
console.log(year);


  return (
    <div>
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3>Get To Know Us</h3>
                <p>About Us</p>
                <p> Carrers</p>
                <p>Press Release</p>
                <p>Amazon Cares</p>
            </div>
            <div className='footr_details_one'>
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p> Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='footr_details_one forres'>
                <h3>Get To Know Us</h3>
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p> Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='footr_details_one forres'>
                <h3>Make Money With Us</h3>
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p> Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src='./image.png'/>
            <p>
                Condition of Use and sale  &nbsp; &nbsp; &nbsp; Privacy Notice  &nbsp; &nbsp; &nbsp; Intersts Based Ads  &nbsp; &nbsp; &nbsp; ©. 1996-{year},
            </p>
        </div>
    </footer>
      
    </div>
  )
}

export default Footer
