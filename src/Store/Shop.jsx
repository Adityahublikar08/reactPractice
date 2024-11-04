import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";

function Shop() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <div style={{display:"flex",gap:"50px",padding:"30px"}}>
        <div>
          {" "}
          <img
            src="https://m.media-amazon.com/images/I/61W3XQlsw-L._AC_UY327_FMwebp_QL65_.jpg"
            alt="bagpack"
          />
          <p>$499</p>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <Checkout count={count} price={499} />
          <Link to='/checkout'>Buy</Link>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/616TNEXtO7L._AC_UY327_FMwebp_QL65_.jpg"
            alt="airdopes"
          />
          <p>$1199</p>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <button onClick={() => setCount1(count1 - 1)}>-</button>
            <div>{count1}</div>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
          </div>
          <Checkout count={count1} price={1199} />
          <Link to='/checkout'>Buy</Link>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/619oqSJVY5L._AC_UY327_FMwebp_QL65_.jpg"
            alt="iphone"
          />
          <p>$1,44,599</p>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <button onClick={() => setCount2(count2 - 1)}>-</button>
            <div>{count2}</div>
            <button onClick={() => setCount2(count2+ 1)}>+</button>
          </div>
      

          <Checkout count={count2} price={144599} />
          <Link to='/checkout'>Buy</Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
