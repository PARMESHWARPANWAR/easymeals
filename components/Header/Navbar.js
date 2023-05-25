import React, { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AnchorRoundedIcon from "@mui/icons-material/AnchorRounded";
import Link from "next/link";
import { logout, getUserData } from "../../utils/authDemo";
// Add the necessary styles for the navbar
const NavbarStyles = () => (
  <style jsx>{`
    .nav-link {
      transition: color 0.3s;
    }

    .nav-link:hover {
      color: #4c51bf;
    }

    .register-button,
    .login-button {
      background-color: #4caf50;
    }

    .register-button:hover,
    .login-button:hover {
      background-color: #45a049;
    }
  `}</style>
);

function Navbar() {
  const [user, setUser] = useState();
  const [isAuthenticate, setIsAuthenticate] = useState();

  useEffect(() => {
    const { isAuthenticate, user } = getUserData();
    setUser(user);
    setIsAuthenticate(isAuthenticate);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-black py-2 px-28">
      <Link href={`/`}>
        <ul className="flex">
          <li className="mr-4 nav-link text-gray-400 hover:text-white">
            Forum
          </li>
          <li className="mr-4 nav-link text-gray-400 hover:text-white">
            Categories
          </li>
          <li className="mr-4 nav-link text-gray-400 hover:text-white">
            Books
          </li>
          <li className="mr-4 nav-link text-gray-400 hover:text-white">
            Recipe Index
          </li>

          <li className="nav-link text-gray-400 hover:text-white">Popular</li>
        </ul>
      </Link>
      <ul className="flex">
        <Link href={`/register`}>
          <li className="mr-2">
            <button className="register-button text-white px-4 rounded-full hover:bg-green-700">
              <AnchorRoundedIcon className="text-yellow-600" />
              REGISTER
            </button>
          </li>
        </Link>
        {/* <Link href={`/login`}> */}
        <li>
          {isAuthenticate ? (
            <button
              className="login-button text-white px-2 rounded-full hover:bg-green-700"
              onClick={() => logout()}
            >
              <PermIdentityIcon className="text-yellow-600" />
              LOGOUT
            </button>
          ) : (
            <Link href={`/login`}>
              <button className="login-button text-white px-2 rounded-full hover:bg-green-700">
                <PermIdentityIcon className="text-yellow-600" />
                LOGIN
              </button>
            </Link>
          )}
        </li>
        {/* </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
