import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TagCard from "../components/TagCard";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTags = async () => {
      const data = await fetch(
        "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
      );

      const result = await data.json();
      setTags(result.items);
      console.log("tags: ", result);
      setLoading(false);
    };
    getTags();
  }, []);

  return (
    <>
      <Navbar />
      <div className="py-20">
        <div className="text-center p-10">
          <h2 className="text-5xl  text-teal-600 font-medium md:text-6xl">
            Hello Developers
          </h2>
          <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            I have created this concept to search on stack overflow in an
            efficient and organized way.
          </p>
          <p className="text-md leading-8 pt-4">
            This project is in-development, so more features will be coming.
          </p>
        </div>
        <p className="text-center text-lg mt-10 mb-2">Connect with me</p>
        <div className="text-5xl pb-10 flex justify-center gap-16 text-gray-600 dark:text-gray-400">
          <AiFillGithub className="cursor-pointer" />
          <AiFillLinkedin className="cursor-pointer" />
          <AiFillInstagram className="cursor-pointer" />
        </div>
      </div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {tags.length ? (
            <>
              <div className="px-5 md:px-10 lg:px-30 mt-10">
                <h3 className="text-xl font-medium">Questions</h3>
                <div className="lg:flex gap-10">
                  {tags.slice(0, 5).map((tag) => (
                    <TagCard
                      name={tag.name}
                      type="question"
                      onClick={navigate}
                      key={tag.name}
                    />
                  ))}
                </div>
              </div>
              <div className="px-5 md:px-10 lg:px-30">
                <h3 className="text-xl mt-10 font-medium">Articles</h3>
                <div className="lg:flex gap-10">
                  {tags.slice(5, 10).map((tag) => (
                    <TagCard
                      name={tag.name}
                      type="article"
                      onClick={navigate}
                      key={tag.name}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-medium">API limit reached</h3>
              <p className="text-lg">Please try again tomorrow</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
