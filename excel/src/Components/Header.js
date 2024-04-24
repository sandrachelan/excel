    import Img1 from "../Images/men.jpg" ;
import Img2 from "../Images/shule.jpg";
import Img3 from "../Images/cars.jpg";
import "./Images.css";
const Header = () => {

    return ( 
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#exel global college">EXCELL GLOBAL COLLEGE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about us">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#school of business" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School of Business
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#abe">ABE</a></li>
            <li><a class="dropdown-item" href="#abe course in kenya">ABE Course in Kenya</a></li>
            <li><hr class="dropdown-divider"/></li>
          </ul>
          </li>

          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#school of accounting" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School of Accounting
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#acca">ACCA</a></li>
          </ul>
           </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#school of ict" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            School of ICT
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#ict courses overview">ICT COURSES OVERVIEW</a></li>
            <li><a class="dropdown-item" href="#abma">ABMA</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact us">Contact Us</a>
        </li>

    </ul>
    </div>
 </div>
</nav>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>  


  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1} class="d-block w-100" alt="..men."></img>
    </div>
    <div class="carousel-item">
      <img src={Img2} class="d-block w-100" alt=".shule.."></img>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100" alt=".cars.."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>

     );
}
 
export default Header;