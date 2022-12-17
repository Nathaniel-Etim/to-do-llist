import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import ListItem from "./pages/AddWish";
import Root from "./pages/Root";
import WishDetails, { loader as wishDetilesItem } from "./pages/WishDetails";
import PostList, { loader as wishItems } from "./component/PostList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />}>
        <Route path="Posts" element={<PostList />} loader={wishItems} />
        <Route path=":id" element={<WishDetails />} loader={wishDetilesItem} />
      </Route>
      <Route path="newItem" element={<ListItem />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
