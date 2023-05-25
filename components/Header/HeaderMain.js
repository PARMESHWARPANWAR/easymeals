import Link from "next/link";
import {
  Home,
  Category,
  Fastfood,
  Mail,
  Info,
  Instagram,
  Twitter,
  Facebook,
  Pinterest,
  Wifi,
  YouTube,
} from "@mui/icons-material";

const HeaderMain = () => {
  return (
    <nav className="flex justify-between items-center border-y border-gray-300 py-2 px-4">
      <ul className="flex items-center space-x-4">
        <li className="text-gray-700 cursor-pointer">HOME</li>
        <li className="text-gray-700 cursor-pointer">CATEGORIES</li>
        <li className="text-gray-700 cursor-pointer">RECIPES</li>
        <li className="text-gray-700 cursor-pointer">CONTACT</li>
        <li className="text-gray-700 cursor-pointer">ABOUT</li>
      </ul>

      <ul className="flex items-center space-x-2">
        <li>
          <Instagram className="text-gray-700 cursor-pointer h-4" />
        </li>
        <li>
          <Twitter className="text-gray-700 cursor-pointer h-4" />
        </li>
        <li>
          <Facebook className="text-gray-700 cursor-pointer h-4" />
        </li>
        <li>
          <Pinterest className="text-gray-700 cursor-pointer h-4" />
        </li>
        <li>
          <Wifi className="text-gray-700 cursor-pointer h-4" />
        </li>
        <li>
          <YouTube className="text-gray-700 cursor-pointer h-4" />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMain;
