import React from "react";
import { BsPin, BsPlus, BsStack, BsViewStacked } from "react-icons/bs";

const ListingCard = ({ name, anscount, type, showBtn, onClick }) => {
  return (
    <div className="border flex justify-start cursor-pointer rounded-xl my-5 group">
      <div className="px-10 py-5 " onClick={onClick}>
        <h3 className="text-lg font-medium ">{name}</h3>
        <p className="mt-2">Answer count: {anscount}</p>
      </div>
      {showBtn && (
        <div className="p-2">
          <button className="border bg-orange-500 text-white invisible group-hover:visible rounded-md p-2">
            <span className="text-normal">
              <BsPlus title="Add to stack" className="text-xl font-bold" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListingCard;
