import Card from "Components/Card/Card";
import buckz from "assets/buckzgif.gif";
import bowieboyz from "assets/bowieboyzgif.gif";
import coco from "assets/cocogif.gif";
import coolcat from "assets/coolcatgif.gif";
import harald from "assets/haraldgif.gif";
import oda from "assets/odagif.gif";
import oni from "assets/onigif.gif";

const Content1 = () => {
  return (
    <div>
      <p className="text-white text-left text-5xl w-11/12 my-16 ml-5">
        Cubic Wars Collection
      </p>
      <Card imgPath={oda} />
      <div className="w-52 my-16 ml-auto">
        <Card imgPath={harald} />
      </div>
      <Card imgPath={buckz} />
      <div className="w-52 my-16 ml-auto">
        <Card imgPath={oni} />
      </div>
      <Card imgPath={coco} />
    </div>
  );
};

export default Content1;
