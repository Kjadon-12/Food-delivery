import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";


const Header = () => {
  const [signIn, setSignIn] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  useEffect(()=>{
    // console.log("useEffect() called");
  },[signIn])
  return (
    <>
      <div className="header">
        <div className="nav-logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"
            alt="logo"
          ></img>
        </div>
        <div>
          <ul className="nav-items">
            <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <li>
              <button
                onClick={() => {
                  signIn === "Sign In"
                    ? setSignIn("Sign Out")
                    : setSignIn("Sign In");
                }}
              >
                {signIn}
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
