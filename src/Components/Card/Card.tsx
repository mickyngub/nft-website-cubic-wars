interface Props {
  imgPath?: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <img
      className="w-52 lg:w-96 lg:ml-32 rounded-2xl shadow-inner"
      src={props.imgPath}
      alt="gif"
    />
  );
};

export default Card;
