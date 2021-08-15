import React from "react";
import { Home, Explore, VideoLibrary, Subscriptions } from "@material-ui/icons";

type ITEMS = {
  id: number;
  icon: JSX.Element;
  label: string;
};
export const SIDEBAR_ITEMS: ITEMS[] = [
  {
    id: 0,
    icon: <Home />,
    label: "Acceuil"
  },
  {
    id: 1,
    icon: <Explore />,
    label: "Explorer"
  },
  {
    id: 2,
    icon: <Subscriptions />,
    label: "Abonnements"
  },
  {
    id: 3,
    icon: <VideoLibrary />,
    label: "Bibliothèque"
  }
];
