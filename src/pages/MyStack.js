import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";

const MyStack = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let ids = "";

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch(
        `https://api.stackexchange.com/2.3/questions/${ids}?order=desc&sort=popular&site=stackoverflow`
      );
      const result = await data.json();
      console.log(result);
      setData(result.items);
    };
  });
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-10 lg:px-30">
        <div className="text-center mt-3">
          <h3 className="text-2xl font-medium">My Stack</h3>
          <p className="mt-2 text-lg">Your stacked questions</p>
        </div>
        <div>
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </>
  );
};

export default MyStack;
