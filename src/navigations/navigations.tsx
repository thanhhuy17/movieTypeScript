import { IoHome } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

// định nghĩa type cho icon
type iconType =
  | React.ReactElement<typeof IoHome>
  | React.ReactElement<typeof BiSolidCameraMovie>
  | React.ReactElement<typeof PiTelevisionFill>
  | React.ReactElement<typeof IoSearchOutline>;

type navigate = {
  label: string;
  href: string;
  icon: iconType;
};
export const navigation: navigate[] = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidCameraMovie />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoHome />,
  },
  ...navigation,
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline />,
  },
];
