import React from "react";

const TagCard = ({ name, type, onClick }) => {
  let path = "";
  if (type === "question") {
    path = `/list/questions/${name}`;
  } else {
    path = `/list/articles/${name}`;
  }
  return (
    <div
      className="text-center hover:shadow-lg border bg-stone-50 w-60 py-5 cursor-pointer rounded-xl my-10"
      onClick={() => onClick(path)}
    >
      <h3 className="text-lg font-medium">{name}</h3>
      {/* <p>Creating elegant designs suited for your needs</p> */}
    </div>
  );
};

export default TagCard;
