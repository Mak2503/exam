import React from "react";

type InputAnswerType = {
  handleChange: (index: number, value: string) => void;
  quesNum: number;
  defValue: string;
  isPara: boolean;
};

const InputAnswer: React.FC<InputAnswerType> = ({
  handleChange,
  quesNum,
  defValue,
  isPara,
}) => {
  return (
    <>
      {isPara ? (
        <textarea
          onChange={(e) => handleChange(quesNum, e.target.value)}
          value={defValue}
          placeholder="Type your answer"
          className="w-full mt-4 text-2xl h-48 p-4 border rounded focus:outline-0"
        />
      ) : (
        <input
          type="text"
          onChange={(e) => handleChange(quesNum, e.target.value)}
          value={defValue}
          placeholder="Type your answer"
          className="w-full mt-4 p-4 text-2xl border-0 border-b rounded focus:outline-0"
        />
      )}
    </>
  );
};

export default InputAnswer;
