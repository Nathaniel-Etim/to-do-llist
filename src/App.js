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
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />}>
        <Route
          path="Posts"
          element={<PostList />}
          loader={wishItems}
          errorElement={<p className="centered"> Error loading Wish list </p>}
        />
        <Route
          path=":id"
          element={<WishDetails />}
          loader={wishDetilesItem}
          errorElement={<p className="centered"> Detailes Not Found </p>}
        />
      </Route>
      <Route
        path="newItem"
        element={<ListItem />}
        errorElement={<p className="centered"> Error sending wish </p>}
      />
      <Route path="*" element={NotFound} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
