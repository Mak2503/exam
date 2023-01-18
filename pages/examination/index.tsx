import Pagination from "@ui/Pagination";
import ProgressBar from "@ui/ProgressBar";
import ViewQuestion from "@ui/ViewQuestion";
import { useState } from "react";
import { sampleQuestions } from "../../constants/sample-data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

export type QuestionType = {
  id: string;
  question: string;
  answerType: string;
  options: Array<string>;
  answer: string;
  selected: string | null;
};

const Examination = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [questions, setQuestions] = useState<Array<QuestionType>>(
    sampleQuestions.map((samp) => {
      return {
        id: samp.id,
        question: samp.question,
        answerType: samp.answerType,
        options: samp.options,
        answer: samp.answer,
        selected: null,
      };
    })
  );

  const handleSubmit = () => {
    console.log(questions);
  };
  // const quesIncrement = () => {
  //   setCurrentQuestion(
  //     currentQuestion < sampleQuestions.length - 1
  //       ? currentQuestion + 1
  //       : sampleQuestions.length - 1
  //   );
  // };

  // const quesDecrement = () => {
  //   setCurrentQuestion(currentQuestion > 0 ? currentQuestion - 1 : 0);
  // };

  return (
    <div>
      <div className="flex mt-1">
        {questions.map((ques) => {
          return (
            <ProgressBar key={ques.id} isTouched={ques.selected !== null} />
          );
        })}
      </div>
      <div
        className="w-full flex justify-center items-center pt-28"
        style={{ height: "78vh" }}
      >
        <ViewQuestion
          key={questions[currentQuestion - 1].id}
          question={questions[currentQuestion - 1]}
          quesNumber={currentQuestion}
          setQuestions={setQuestions}
          questions={questions}
          setCurrentQuestion={setCurrentQuestion}
        />
      </div>
      {currentQuestion === questions.length && (
        <div className="flex justify-end mr-10 mb-5 absolute right-5 bottom-20">
          <button
            onClick={() => handleSubmit()}
            className="px-3 py-2 rounded bg-indigo-600 text-white"
          >
            Submit
          </button>
        </div>
      )}
      <Pagination
        currentQues={currentQuestion}
        quesLength={questions.length}
        setQues={setCurrentQuestion}
      />
    </div>
  );
};

export default Examination;
