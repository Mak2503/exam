type OptionType = {
  option: string;
  isChecked: boolean;
  handleClick: () => void;
};

const Option: React.FC<OptionType> = ({ option, isChecked, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex justify-center items-center rounded-full border ${
        isChecked
          ? "bg-indigo-600 text-white"
          : "border-indigo-600 text-indigo-600"
      } px-7 py-5 text-2xl font-medium leading-4 shadow-sm hover:bg-indigo-700 hover:text-white transition-all focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {option}
    </button>
  );
};

export default Option;
