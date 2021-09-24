import { useState, useEffect } from "react";

import Card from "Components/Card/Card";
import buckz from "assets/buckzgif.gif";
import bowieboyz from "assets/bowieboyzgif.gif";
import coco from "assets/cocogif.gif";
import coolcat from "assets/coolcatgif.gif";
import harald from "assets/haraldgif.gif";
import oda from "assets/odagif.gif";
import oni from "assets/onigif.gif";

const Content1 = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <p
        style={{ transform: `translateX(${offsetY * 0.5}px)` }}
        className="text-white text-left text-8xl text-sha w-11/12 my-16 ml-5"
      >
        Cubic Wars Collection
      </p>
      <div
        style={{ transform: `translateX(${offsetY * 0.21}px)` }}
        className="w-52 lg:w-96 my-16 mr-auto "
      >
        <Card imgPath={oda} />
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.16}px)` }}
        className="w-52 lg:w-96 my-16 ml-auto lg:mr-64"
      >
        <Card imgPath={harald} />
      </div>
      <div
        style={{ transform: `translateX(${offsetY * 0.13}px)` }}
        className="w-52 lg:w-96 my-16 mr-auto "
      >
        <Card imgPath={buckz} />
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.25}px)` }}
        className="w-52 lg:w-96 my-16 ml-auto lg:mr-64"
      >
        <Card imgPath={oni} />
      </div>
      <div
        style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        className="w-52 lg:w-96 my-16 mr-auto "
      >
        <Card imgPath={coco} />
      </div>
    </div>
  );
};

export default Content1;
