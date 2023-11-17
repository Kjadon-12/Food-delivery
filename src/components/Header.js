const Header = () => {
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
            <li>Home</li>
            <li>About</li>
            <li>Sign In</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
