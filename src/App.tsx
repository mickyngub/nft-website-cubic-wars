import Content1 from "PageContent/Content1/Content1";
import Title from "PageContent/Title/Title";
import "./App.css";

function App() {
  return (
    <div className="bg-future bg-fixed">
      <p className="text-5xl">
        <Title />
        <Content1 />
      </p>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
