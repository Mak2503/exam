import { QuestionType } from "pages/examination";
// import { useState } from "react";
import InputAnswer from "./InputAnswer";
import Option from "./Option";

type ViewQuestionType = {
  question: QuestionType;
  questions: Array<QuestionType>;
  quesNumber: number;
  setQuestions: React.Dispatch<React.SetStateAction<Array<QuestionType>>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};

const ViewQuestion: React.FC<ViewQuestionType> = ({
  question,
  questions,
  quesNumber,
  setQuestions,
  setCurrentQuestion,
}) => {
  const handleOption = (index: number, option: string) => {
    let newArr = [...questions];
    newArr[index] = {
      id: questions[index].id,
      question: questions[index].question,
      answerType: questions[index].answerType,
      options: questions[index].options,
      answer: questions[index].answer,
      selected: option,
    };
    setQuestions(newArr);
    setCurrentQuestion(
      questions.length > quesNumber ? quesNumber + 1 : quesNumber
    );
  };

  const handleText = (index: number, value: string) => {
    let newArr = [...questions];
    newArr[index] = {
      id: questions[index].id,
      question: questions[index].question,
      answerType: questions[index].answerType,
      options: questions[index].options,
      answer: questions[index].answer,
      selected: value,
    };
    setQuestions(newArr);
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white w-max h-full">
      <div className="px-4 py-5 sm:p-6">
        <div className="text-5xl">{`${quesNumber}. ${question.question}`}</div>
        {question.answerType === "multiselect" && (
          <div className="text-green-500 mt-4 text-center">
            Select multiple choices
          </div>
        )}
        {question.answerType === "paragraph" && (
          <div className="mt-5">
            <InputAnswer
              isPara={true}
              handleChange={handleText}
              defValue={question.selected!}
              quesNum={quesNumber - 1}
            />
          </div>
        )}
        {question.answerType === "text" && (
          <div className="mt-5">
            <InputAnswer
              isPara={false}
              handleChange={handleText}
              defValue={question.selected!}
              quesNum={quesNumber - 1}
            />
          </div>
        )}
        {question.answerType === "select" && (
          <div className="grid grid-cols-1 gap-8 mt-8">
            {question.options.map((opt, index) => {
              return (
                <Option
                  handleClick={() => {
                    handleOption(quesNumber - 1, opt);
                  }}
                  isChecked={questions[quesNumber - 1].selected === opt}
                  key={opt}
                  option={opt}
                />
              );
            })}
          </div>
        )}
        {question.answerType === "multiselect" && (
          <div className="grid grid-cols-1 gap-8 mt-8">
            {question.options.map((opt, index) => {
              return (
                <Option
                  handleClick={() => {
                    handleOption(quesNumber - 1, opt);
                  }}
                  isChecked={questions[quesNumber - 1].selected === opt}
                  key={opt}
                  option={opt}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewQuestion;
