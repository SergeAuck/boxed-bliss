import React from "react";
import { GiPresent, GiBookPile, GiTruck, GiCalendar } from "react-icons/gi";
import { BsSearchHeart } from "react-icons/bs";

export const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const benefits = [
  {
    id: 1,
    icon: <GiPresent />,
    title: "Our Loyalty Program",
    text: "Join our Boxed-Bliss Game Guild! Earn points with every purchase, unlock exclusive discounts, access early releases, and enjoy member-only gaming nights. Start your rewarding journey into the world of games today!",
  },
  {
    id: 2,
    icon: <GiBookPile />,
    title: "Combined shipping",
    text: "Our convenient Hold-and-Dispatch service allows you to reserve your order in-store as you anticipate the restocking or release of other games. Minimize shipping costs and have control over your games' dispatch times!",
  },
  {
    id: 3,
    icon: <GiTruck />,
    title: "Fast and Free Shipping",
    text: "Get free standard shipping on orders from $150. For any order under $150, ship anywhere in NZ with reasonable rates starting at $5.99. ",
  },
  {
    id: 4,
    icon: <BsSearchHeart />,
    title: "Find My Game",
    text: "Can't find the game you're seeking on our website? Or perhaps a desired game is currently unavailable? Allow us to assist you in locating the game of your choice. Simply drop us an email, and we'll put our best foot forward to source it for you.",
  },
  {
    id: 5,
    icon: <GiCalendar />,
    title: "Preorders",
    text: "Be ahead of the game! To ensure you don't miss the most anticipated releases, place a preorder. You'll be the envy of your gaming group, being the first to possess the latest tabletop titles.",
  },
  {
    id: 6,
    icon: <GiTruck />,
    title: "Shop Local",
    text: "Support Your Community, Game Locally! Choose Boxed-Bliss for all your board game bliss.",
  },
];
