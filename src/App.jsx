import Header from "./components/Header";
import Home from "./components/Home";
import Voice from "./components/App";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/Voice'
          element={<Voice/>}
        />
        <Route
          path='/'
          element={<Header/>}
        />
     
      </>
    )
  );
  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
