import Feed from "./Feed";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import LogIn from "./Login";
import { useStateValue } from "./StateProvider";
import reducer from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log(user);
  return (
    <>
      {!user ? (
        <LogIn />
      ) : (
        <div className="App">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />

            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
