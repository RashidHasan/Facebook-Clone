import Feed from "./Feed";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />

          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default App;
