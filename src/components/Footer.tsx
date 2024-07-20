import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-12 bg-neutral-600">
      <div className="flex items-center justify-center gap-6">
        <Link to={"/"} className="hover:text-orange-400">
          About
        </Link>
        <Link to={"/"} className="hover:text-orange-400">
          Contact
        </Link>
      </div>
      <p className="text-center">
        © Created by
        <Link
          to={'"https://www.facebook.com/profile.php?id=100069410599370"'}
          className=" hover:text-orange-500"
          target="_blank"
        >
          {" "}
          Huy Nguyen
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
