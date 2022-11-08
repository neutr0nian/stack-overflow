import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Tags from "../components/Tags";

const Listings = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  let type = "";
  if (location.pathname.includes("questions")) {
    type = "questions";
  } else {
    type = "articles";
  }
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetch(
        `https://api.stackexchange.com/2.3/${type}?order=desc&sort=activity&tagged=${params.tagname}&site=stackoverflow&filter=!6VvPDzQ)wlg1u`
      );
      const result = await data.json();
      console.log("questions: ", result);
      setQuestions(result.items);
      result.items.map((item) => {
        setTags((prev) => [...prev, ...item.tags]);
      });
      setLoading(false);
    };
    // getQuestions();
  }, [params.tagname]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <span>Loading... </span>
      ) : (
        <>
          {questions.length ? (
            <div className="px-5 mt-10 md:px-10 lg:px-30">
              <div className="flex flex-row">
                <div className="basis-1/4">
                  <h3 className="text-xl font-normal">Related tags</h3>
                </div>
                <div className="basis-1/4">
                  <h3 className="text-xl text-center font-normal mb-7">
                    Showing results for tag{" "}
                    <span className="italic underline text-cyan-600">
                      {params.tagname}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="grid grid-flow-col auto-cols-max gap-8">
                <div className="border rounded-lg px-4 w-60 shadow-md">
                  {tags.slice(0, questions.length).map((tag) => (
                    <Tags
                      name={tag}
                      onClick={() => navigate(`/${type}/${tag}`)}
                    />
                  ))}
                </div>
                <div className="rounded-lg border px-4">
                  {questions.map((question) => (
                    <ListingCard
                      name={question.title.slice(0, 105)}
                      key={question.question_id}
                      onClick={() =>
                        navigate(`/answers/${question.question_id}`)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center mt-10">
              <h3 className="text-2xl mb-2 font-medium">No Artices found</h3>
              <p className="text-normal">Please try another tag</p>
              <button
                className="mt-3 rounded-md border p-2"
                onClick={() => navigate("/")}
              >
                Go Home
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Listings;
