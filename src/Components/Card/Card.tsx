interface Props {
  imgPath?: string;
}

const Card: React.FC<Props> = (props) => {
  return <img className="w-52" src={props.imgPath} alt="gif" />;
};

export default Card;
