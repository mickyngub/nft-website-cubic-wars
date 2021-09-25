import { useState, useEffect } from "react";

import Card from "Components/Card/Card";
import buckz from "assets/buckzgif.gif";
import bowieboyz from "assets/bowieboyzgif.gif";
import coco from "assets/cocogif.gif";
import coolcat from "assets/coolcatgif.gif";
import harald from "assets/haraldgif.gif";
import oda from "assets/odagif2.gif";
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
        style={{ transform: `translateX(${offsetY * 0.02}%)` }}
        className="text-white text-left text-8xl text-sha w-11/12 my-16 ml-5"
      >
        Cubic Wars Collection
      </p>
      <div
        style={{ transform: `translateX(${offsetY * 0.21}%)` }}
        className="w-52 lg:w-96 my-16 mr-auto flex items-center"
      >
        <p className="text-xl w-96 text-center text-white">
          <span className="text-pink-500 text-xl">005 ODA</span>
          <br></br>
          <br></br> ipsum dolor sit amet consectetur adipisicing elit. Ad autem
          similique magnam sed blanditiis,
        </p>
        <Card imgPath={oda} borderColor="pink" />
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.16}%)` }}
        className="w-52 lg:w-96 my-16 ml-auto lg:mr-64 flex items-center"
      >
        <Card imgPath={harald} borderColor="yellow" />
        <p className="text-xl w-96 ml-28 text-center text-white">
          <span className="text-yellow-500 text-xl">006 HARALD</span>
          <br></br>
          <br></br> ipsum dolor sit amet consectetur adipisicing elit. Ad autem
          similique magnam sed blanditiis,
        </p>
      </div>
      <div
        style={{ transform: `translateX(${offsetY * 0.13}%)` }}
        className="w-52 lg:w-96 my-16 mr-auto flex items-center"
      >
        <p className="text-xl w-96 text-center text-white">
          <span className="text-green-500 text-xl">016 BUCKZ</span>
          <br></br>
          <br></br> ipsum dolor sit amet consectetur adipisicing elit. Ad autem
          similique magnam sed blanditiis,
        </p>
        <Card imgPath={buckz} borderColor="green" />
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.25}px)` }}
        className="w-52 lg:w-96 my-16 ml-auto lg:mr-64 flex items-center"
      >
        <Card imgPath={oni} borderColor="red" />
        <p className="text-xl w-96 ml-28 text-center text-white">
          <span className="text-red-500 text-xl">014 ONI</span>
          <br></br>
          <br></br> ipsum dolor sit amet consectetur adipisicing elit. Ad autem
          similique magnam sed blanditiis,
        </p>
      </div>
      <div
        style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        className="w-52 lg:w-96 my-16 mr-auto flex items-center"
      >
        <p className="text-xl w-96 text-center text-white">
          <span className="text-purple-500 text-xl">XX4 COCO</span>
          <br></br>
          <br></br> ipsum dolor sit amet consectetur adipisicing elit. Ad autem
          similique magnam sed blanditiis,
        </p>
        <Card imgPath={coco} borderColor="purple" />
      </div>
    </div>
  );
};

export default Content1;
