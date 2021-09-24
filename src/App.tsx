import { useState, useEffect } from "react";
import Content1 from "PageContent/Content1/Content1";
import Title from "PageContent/Title/Title";
import "./App.css";

function App() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.scrollY);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className="bg-future bg-fixed bg-cover overflow-hidden">
      <p
        // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        className="text-5xl"
      >
        <Title />
      </p>
      {/* <div
        style={{ transform: `translateY(${offsetY * 0.05}vh)` }}
        className="text-6xl text-white w-screen h-screen text-center flex items-center"
      >
        This is test
      </div> */}
      <Content1 />

      <div className="h-screen"></div>
    </div>
  );
}

export default App;
