import { useState, useEffect ,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../customHooks/UserContext";


const Header = () => {
  const [signIn, setSignIn] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const loggedData = useContext(UserContext);
  console.log(loggedData)
  useEffect(()=>{
    // console.log("useEffect() called");
  },[signIn])
  return (
    <>
      <div className="header shadow-lg flex justify-between items-center border-gray-200 border-2 bg-slate-200">
        <div className="nav-logo ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"
            alt="logo" className=" w-20 "
          ></img>
        </div>
        <div>
          <ul className="nav-items flex  ">
            <li className="mr-5">Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="mr-5"><Link to="/">Home</Link></li>
            <li className="mr-5" ><Link to="/about">About</Link></li>
            <li className="mr-5"><Link to="/grocery">Grocery</Link></li>
            <li className="mr-5">Cart</li>
            <li className="mr-5">
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
            <li>{loggedData.loggedInUser}</li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
