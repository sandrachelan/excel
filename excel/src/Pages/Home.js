import Img1 from "../Images/girl.jpg";
import Img2 from "../Images/janvi.jpg";
import Img3 from "../Images/shruti.jpg"
import "./Home.css";

const Home = () => {

    return (    

         <div className="container">
          <div className="text">
            <h1>Welcome To Excel College</h1>
            <p>Best ACCA, ABE, Microsoft Office, Tally Courses, Quickbooks, ICDL,<br></br>
                 Computer packages College in Nairobi, Kenya. Apply now for basic and <br></br>
                  advanced courses for higher education in Excel Global College. The <br></br>
             college provides training for professional qualifications and computer based courses<br></br>

</p>
</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="side-image">
      <img src={Img1} class="d-block w-100" alt="..girl."></img>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Img2}class="d-block w-100" alt=".indian.."></img>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

     );
}
 
export default Home ;