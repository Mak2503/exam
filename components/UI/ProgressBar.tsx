type ProgressBarType = {
  isTouched: boolean;
};
// bg-gray-300 - untouched
// bg-green-500 - touched

const ProgressBar: React.FC<ProgressBarType> = ({ isTouched }) => {
  return (
    <div
      className={`h-2 w-full mx-px rounded-full ${
        isTouched ? "bg-green-500" : "bg-gray-300"
      } `}
    ></div>
  );
};

export default ProgressBar;
