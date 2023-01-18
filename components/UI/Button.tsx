export interface Props {
  text: string;
  href: string;
}

export const Button: React.FC<Props | any> = ({ text, ...props }) => {
  return (
    <button
      className="bg-gray-500 text-white px-2 py-1 rounded hover:opacity-90"
      {...props}
    >
      {text}
    </button>
  );
};
