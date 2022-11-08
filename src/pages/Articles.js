import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import TagCard from "../components/TagCard";

const Articles = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([
    {
      title: "Building Azure Functions Project with Ballerina",
    },
    {
      title: "A crash course on React JS",
    },
  ]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch(
        `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=${params.tagname}&site=stackoverflow`
      );
      const result = await data.json();
      console.log("questions: ", result);
      setQuestions(result.items);
      setLoading(false);
    };
    // getQuestions();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <span>Loading... </span>
      ) : (
        <div className="px-5 mt-10 md:px-10 lg:px-30">
          <div className="flex flex-row">
            <div className="basis-1/4">
              <h3 className="text-xl font-normal">Related tags</h3>
            </div>
            <div className="basis-1/4">
              <h3 className="text-xl text-center font-normal mb-7">
                Showing aricles for{" "}
                <span className="italic underline text-cyan-600">
                  {params.tagname}
                </span>
              </h3>
            </div>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-8">
            <div className="border rounded-lg px-4 w-80 shadow-md">
              <SideMenu />
            </div>
            <div className="rounded-lg border px-4">
              {questions.map((question) => (
                <ListingCard name={question.title} key={question.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
