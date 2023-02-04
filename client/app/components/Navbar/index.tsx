import { Link } from "react-router-dom";
import WhiteLogo from "../../assets/WhiteLogo.png";
import Button from "../Button";
import { NAV_LINKS } from "./config";
const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center h-min w-full">
      <img src={WhiteLogo} alt="fampay" className="w-56" />
      <div className="flex flex-row items-center">
        {NAV_LINKS.map((link) => (
          <Link to={link.path} key={link.label} className="p-2 mx-2 ">
            <span className="text-xl font-medium">{link.label}</span>
          </Link>
        ))}
        <Button variant="secondary" className="ml-4">
          Download Fampay
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
