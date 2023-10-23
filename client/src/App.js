import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./styles/App.css";

function App() {
  return (
    <div className="a">
      <Header />
      <div className="app-body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
