
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Mini Amazon</h1>
      <p>This is a simple e-commerce website</p>
      <div style={{display:"flex",justifyContent:"space-between",gap:"30px"}}>
        <div >
          {" "}
          <img
            src="https://m.media-amazon.com/images/I/61W3XQlsw-L._AC_UY327_FMwebp_QL65_.jpg"
            alt="bagpack"
          />
          <p>$499</p>
          <Link to='/shop' style={{border:"1px solid black",padding:"10px"}}>shop now</Link>
          
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/616TNEXtO7L._AC_UY327_FMwebp_QL65_.jpg"
            alt="airdopes"
          />
          <p>$1199</p>
          <Link to='/shop' style={{border:"1px solid black",padding:"10px"}}>shop now</Link>
         
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/619oqSJVY5L._AC_UY327_FMwebp_QL65_.jpg"
            alt="iphone"
          />
          <p>$1,44,599</p>
       <Link to='/shop' style={{border:"1px solid black",padding:"10px"}}>shop now</Link>
        </div>
     
      </div>
    </div>
  );
}

export default Home;
