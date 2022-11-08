import React from "react";

const ListingCard = ({ name, type, onClick }) => {
  return (
    <div className="border cursor-pointer rounded-xl my-5" onClick={onClick}>
      <div className="px-10 py-5">
        <h3 className="text-lg font-medium ">{name}</h3>
        <p className="mt-2">Upvotes: 5</p>
      </div>
      {/* <p>Creating elegant designs suited for your needs</p> */}
    </div>
  );
};

export default ListingCard;
