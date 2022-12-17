import HomeText from "../component/HomeText";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <HomeText />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
