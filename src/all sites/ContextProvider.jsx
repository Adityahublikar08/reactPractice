/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();
import { useNavigate } from "react-router-dom";
export const ContextProvider = ({ children }) => {
  const imgArr = [
    "https://mercury.akamaized.net/i/2e987c8607150587d3e2e19dee64f05d_293992_0.jpg",
    "https://mercury.akamaized.net/i/50d5558ec084f352b06b2f3b704c3315_293369_0.jpg",
    "https://mercury.akamaized.net/i/84ebbae29be8511b52dba1fe9c8ee049_293838_0.jpg",
    "https://mercury.akamaized.net/i/750bb1d777785e52dac2493334afe0bf_293843_0.jpg",
    "https://mercury.akamaized.net/i/5a4b6a878fe7c45b627dc86a472c3452_293845_0.jpg",
    "https://mercury.akamaized.net/i/8c67a8c9bb9d873f71512b85f74e047d_293847_0.jpg",
    "https://mercury.akamaized.net/i/05de965dae8dadeb8f8cbd92db039d1a_293833_0.jpg",
    "https://mercury.akamaized.net/i/2123b80cbb096ce908c1a84d183686c6_293835_0.jpg",
    "https://mercury.akamaized.net/i/9f566b24bbcc6735beaf586446005085_293834_0.jpg",
  ];
  const imgArr1 = [
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-17102024-TopBanners-Z3-P4-crocs-uspa-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-17102024-TopBanners-Z3-P2-w-aurelia-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-17102024-TopBanners-Z3-P5-superdry-ax-upto50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-17102024-BrandHours-Z3-P2-tommyhilfiger-min30.jpg",
  ];

  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/shop");
  };

  const [img, setImg] = useState(0);
  const [img1, setImg1] = useState(0);
  //--------------home-------------------------------------//

  const [count, setCount] = useState(0);
  const location = useLocation();
  const selectedItem = location.state;

  //------------------orders--------------------------//

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const handleAddToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      cartItems.push(item); // Add the item if it's not already in the cart
      localStorage.setItem("cartData", JSON.stringify(cartItems));
    }

    navigate2("/cart"); // Redirect to cart page after adding to cart
  };

  const handleCurrent = (item) => {
    setSelectedItem1(item);
  };

  // Handle "Buy Now" click (can be customized for further actions)
  const handleBuyNow = (productItem) => {
    alert(`You are buying: ${productItem.title}`);
    
    // Further actions for buying, such as redirecting to a checkout page, can go here
  };

  const handleNav2 = (item) => {
    const isLoggedIn = localStorage.getItem("isLoggin");
  if (isLoggedIn) {
    navigate("/orders", { state: item });
  } else {
    alert("Please log in to view your orders.");
    navigate("/account", { state: { item } });
  }
   
  };

  //-----------------------dataFetch--------------------------------------------------------?
  const [data1, setData1] = useState(() => {
    const storedData = localStorage.getItem("data1");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [newData1, setNewData1] = useState({ email: "", pass: "" });
  useEffect(() => {
    // Update localStorage only when `data` changes
    localStorage.setItem("data1", JSON.stringify(data1));
  }, [data1]);

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewData1({ ...newData1, [name]: value });
  };

  const handleAddData = () => {
    const empty = data1.some(
      (item) => item.email === newData1.email && item.pass === newData1.pass
    );

    if (empty) {
      alert("duplicate entry");
    } else {
      newData1.email == "" || newData1.pass == ""
        ? alert("input is empty ")
        : setData1([...data1, newData1]);
    }

    setNewData1({
      email: "",
      pass: "",
    });
  };

  //----login---------------------//

  return (
    <Context.Provider
      value={{
        imgArr,
        imgArr1,
        handleNav,
        img,
        setImg,
        img1,
        setImg1,
        count,
        setCount,
        selectedItem,
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
        selectedItem1,
        setSelectedItem1,
        handleNav2,
        handleAddToCart,
        handleBuyNow,
        handleCurrent,

        //----------------//
        newData1,
        handleAddData,
        handleNewChange,
        data1,
      }}
    >
      {children}
    </Context.Provider>
  );
};
