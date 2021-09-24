import classes from "PageContent/Title/TextAnimation.module.scss";
interface Props {
  text?: string;
}
const TextAnimation: React.FC<Props> = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.glitch} data-text={props.text}>
          {props.text}
        </div>
        <div className={classes.glow}>{props.text}</div>
      </div>
      <div className={classes.scanlines}></div>
    </>
  );
};

export default TextAnimation;
