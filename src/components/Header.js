import { useState, useEffect ,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../customHooks/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [signIn, setSignIn] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  const loggedData = useContext(UserContext);
  console.log(loggedData)
  useEffect(()=>{
    // console.log("useEffect() called");
  },[signIn])

  //subscribing to the store using useselector
  const cartItms = useSelector((store)=>store.cart.items)
  return (
    <>
      <div className="header shadow-lg flex justify-between items-center border-gray-200 border-2 bg-slate-200">
        <div className="nav-logo ">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX////zgCjzfiLycwDydgD96d7zfiX++vj0j0v5ya/60rvzeQ3zfBzycAD71b784tT+9/L3rYD97+f4xKXzhjb4vpvziT74upf2pHL62MX3tIv4uJL0i0T73cz0k1L1nmX1ml7xaQD3VXH+AAAFC0lEQVR4nO2c2ZaqOhCGzcCYKKOoiEq//0tuAratQiCIa6U4p76rXrYX+a0hSVXBZoMgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCDKNcwr2ZZIk5SHbRbHt1Szgcq6rIieUSimpS/K8qMuT7UV9xOXWaqDUdYnCdWmrStRr0xOfxVZ0InrILStT2ws0xkvLH65R0hmJs8TxbC/TiDSTfERJBxcHx/ZCp4l3V0YntTTWYUUIPbk5JZEGUrrYSSLbyx3lUgsTs/z62jW0veARgkqYS1HGyTOweWDvmrrYQw09AA2cM5/hYneoKEGqOY/uLVrYGaCnZbodf4ptZnvpPUIy38d+1exsL/6NyJ8b+39QDmu/SY/zcvIrsoCUBLy9/DBgOlhiW8ETl/xzJ1O4As4dJ17kZAp5BeNou+kjf/v7j/yL7m2LuBNfTZysuWBu9d+TVyCXz3BrZJZ0E1Ujas62ZbR4hYlheNB8NdP7o6xBmCb6MdBCmMpXgT5RUBLYFqK4GaUyps4sI2KISAAkNM8kYgzESB/AoWb3JTFEAPAzww1zWgwHcLEZ2wtniZG19UqaY3gqmxbjUutBE35NDGHWC0/l98Twve2guZmKCSfF2N9pTK/LBmL4zfaJpjKsY0yKoYIElt3M+4oYKjnPk9B2yMTFLDFc9TZ/UY1BKQRnjNRlcLEdMHPFpKVP+fYOY5JU9bHMwkuU2leymStmE6ep40QdjpM2xLFt53piVsxAx/8viTHdNDmAA/4kiaEYWjlDqKiBEzSBcT+W8R6S5P4tyU5Qhmoi88KsO0C70WxJAqONHi+rMndQIWG00U03mik5R9unTEWytGje4UoI6W7HviKmuc0AyGrez5fEgPCzhY0mWGL2Zt2ZSTHWL80Kx6ykOSnmYFtIi/FQ1hguhZDN1JzJF8TICkaPNvpGcpbWSzMd8YLpjAcCyCiAly03jUugjANFnw40/QGi1dSyfKihCRnbIh4YTjXocV0oXtbsm2ZNWj20sN5o+iNbKAaQlzWmMZo40SNADQMuGzijue31v7DMNAzKTNOd7POBU+JuAVwyXzAtbQ7AgRxl/kjlx2p+YJwxn0mFaJ8x06BPEPAM0xCXV78qiqJq8N+pXK0aBs8wU2hLBRxCjWkumnsCtT9lMh9P8xAHh/nMyTgaMbIAb5jUuZx2YRCGp+g3ujVi+AF0xETZ8abSWq4oqmudXNTHw2LkFbJhQp+4Uj5tOOpvNUeiEQPsVPZCVIj+9tiWkQfFAJlm1jD4II04xsNigAwzaxm6c2otI4+2lztONHCx0VmG5pCjX3Ho3zl1YgTk6G8ZuHO2rZe+GOmD3mJast6ks0bMFrqTNXg90wyLYTCemJng9B41XYePvX4qq3UcMN/3Gkqa1By8XQHW4GQt7y+eoCK5vWlh1ieyTek9huKKN2MJ0OeYV44TbQGZX2wv0Zx4fNKBUrivmxggHK09SxDTGMZ45UifU1ZryWR3nFrbsoF+8B9A/+oGub5CmVdqMposVqeluXRqHA1gmdyA02B+Bvf6D0MG7mkwS/5G9BtQol5hwHQ4+VtGE/4qA6bj7cQpcxhDZR/ychBY2ZGsR/yUn12gb8wyx5GPsGkrTuvmETbSBzTs8yHevgsbSlZ0H9PS1dKpXMNDZ9Oo14W5HHwp1pBdLtd7iumRCeC9iznE2YpPMQiCIAiCIAiCIAiCIAiCIAiCIMj/gH9bGEUC/D7EFAAAAABJRU5ErkJggg=="
            alt="logo" className=" w-20 "
          ></img>
        </div>
        <div>
          <ul className="nav-items flex  ">
            <li className="mr-5">Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="mr-5"><Link to="/">Home</Link></li>
            <li className="mr-5" ><Link to="/about">About</Link></li>
            <li className="mr-5"><Link to="/grocery">Grocery</Link></li>
            <li className="mr-5"><Link to="/cart">Cart-{cartItms.reduce((total, item) => total + item.quantity, 0)}</Link></li>
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
