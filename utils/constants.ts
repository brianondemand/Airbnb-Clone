import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCastle,
  GiCaveEntrance,
  GiFamilyHouse,
  GiForestCamp,
  GiIsland,
  GiModernCity,
  GiTreehouse,
} from "react-icons/gi";
import { FaFireAlt, FaSkiing } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Trending",
    icon: FaFireAlt,
    description: "This property is trending!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lakefront",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Top Cities",
    icon: GiModernCity,
    description: "This property is in a top city!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is a big castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Mansions",
    icon: GiFamilyHouse,
    description: "This property is a mansion!",
  },
  {
    label: "Treehouses",
    icon: GiTreehouse,
    description: "This property is in the tree top!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Luxury",
    icon: IoDiamondOutline,
    description: "This property is brand new and luxurious!",
  },
];

export const LISTINGS_BATCH = 16;

export const menuItems = [
  {
    label: "My trips",
    path: "/trips",
  },
  {
    label: "My favorites",
    path: "/favorites",
  },
  {
    label: "My reservations",
    path: "/reservations",
  },
  {
    label: "My properties",
    path: "/properties",
  },
];
