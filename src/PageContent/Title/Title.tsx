import TextAnimation from "./TextAnimation";

const Title = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <TextAnimation text="Cubic Wars" />
      <div>
        <TextAnimation text="by Goodgulp" />
      </div>
    </div>
  );
};

export default Title;
