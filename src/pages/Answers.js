import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Answers = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      const data = await fetch(
        `https://api.stackexchange.com/2.3/questions/${params.id}/answers?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQ)wlg1u`
      );
      const result = await data.json();
      setAnswers(result.items);
      setLoading(false);
    };
    getAnswers();
  }, []);
  return (
    <>
      {console.log(answers)}
      <Navbar />
      {!loading && (
        <div className="px-5 mt-10 md:px-10 lg:px-30">
          <div className="border rounded-md w-full p-10">
            <h3 className="text-lg font-medium">
              React Hooks: useEffect() is called twice even if an empty array is
              used as an argument
            </h3>
            <div className="flex justify-start gap-5 mt-1 ">
              <p>
                <span className="text-gray-700">Asked:</span>
              </p>
              <p>
                <span className="text-gray-700">Modified:</span>
              </p>
              <p>
                <span className="text-gray-700">Views:</span>
              </p>
            </div>
            <div className="mt-3 border"></div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold">Answers</h3>
              {answers.map((answer) => (
                <>
                  <div className="pt-7 flex flex-row text-md font-medium">
                    <p className="basis-1/4">{answer.owner.display_name}</p>
                    <h3 className="basis-1/4">Score: {answer.score}</h3>
                    <h3 className="basis-1/4">
                      Accepted: {String(answer.is_accepted)}
                    </h3>
                  </div>
                  <div className="border rounded-md bg-slate-50">
                    <div
                      className="p-4"
                      dangerouslySetInnerHTML={{ __html: answer.body }}
                    ></div>
                    <div className="mt-3 border"></div>
                  </div>
                </>
              ))}
            </div>
            <div className="">
              <h4>Comments</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Answers;
