import { render } from "react-dom";
import { App } from "./components/App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
export const App = () => {
  return <h1>簡易メモ</h1>;
};

