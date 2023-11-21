import logo from "../assets/ttt.svg";

const NavBar = () => {
  return (
    <div className="bg-black flex justify-between text-white px-4 py-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <span className="font-bold border-l-2 border-yellow-300 ml-2 px-2">
          S T O R I E S
        </span>
      </div>
      <button className=" text-black font-bold px-4 py-2 bg-yellow-400 rounded-md">
        Courses
      </button>
    </div>
  );
};

export default NavBar;
