import { Link } from "react-router-dom";

function NavBar() {
  const link_padding = {
    padding: "25px",
    color: "#7f7fd2"
  }
  return (
    <nav className="flex flex-col items-center bg-black">
      <div className="container max-w-[67rem]">
        <div className="flex justify-between items-center m-[30px] mx-[50px]">
          <div className="navbar-brand">
            <Link to="/" className="text-[#7f7fd2]">Movies Application</Link>
          </div>
          <div className="navbar-links">
            <Link to="/" style={link_padding} >Home</Link>
            <Link to="/favorites" style={link_padding} >Favorites</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
