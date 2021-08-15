import React from "react";
import { Home, Explore, VideoLibrary, Subscriptions } from "@material-ui/icons";

type ITEMS = {
  id: number;
  icon: JSX.Element;
  label: string;
  position: string;
  active: string;
  unactive: string;
};
export const SIDEBAR_ITEMS: ITEMS[] = [
  {
    id: 0,
    icon: <Home />,
    label: "Acceuil",
    position: "-5px",
    active: "white",
    unactive: "#909090"
  },
  {
    id: 1,
    icon: <Explore />,
    label: "Explorer",
    position: "-5px",
    active: "white",
    unactive: "#909090"
  },
  {
    id: 2,
    icon: <Subscriptions />,
    label: "Abonnements",
    position: "-15px",
    active: "white",
    unactive: "#909090"
  },
  {
    id: 3,
    icon: <VideoLibrary />,
    label: "Bibliothèque",
    position: "-15px",
    active: "white",
    unactive: "#909090"
  }
];
