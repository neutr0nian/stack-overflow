import React from "react";
import ListingCard from "./ListingCard";
import Tags from "./Tags";

const SideMenu = ({ name, type, onClick }) => {
  return (
    <div>
      <Tags name={"React"} />
      <Tags name={"React"} />
    </div>
  );
};

export default SideMenu;
