import "./App.scss";
import Header from "./components/header/header";
import Meme from "./components/meme/meme";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Meme />
      </div>
      <p className="credits">@Ruttika ©2022</p>
    </div>
  );
}

export default App;
