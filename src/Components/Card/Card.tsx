interface Props {
  imgPath?: string;
  borderColor?: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <img
      className={` 
      animate-bounce-slow
      transition-all
      duration-500 transform
      ease-in-out w-52 lg:w-96 lg:ml-32 rounded-2xl border-0 
      hover:scale-110
      ${props.borderColor === "red" ? "border-2 border-red-400" : ""}
      ${props.borderColor === "green" ? "border-2 border-green-400" : ""}
      ${props.borderColor === "yellow" ? "border-2 border-yellow-400" : ""}
      ${props.borderColor === "pink" ? "border-2 border-pink-400" : ""}
      ${props.borderColor === "purple" ? "border-2 border-purple-400" : ""}
      hover:border-8
      `}
      src={props.imgPath}
      alt="gif"
    />
  );
};

export default Card;
