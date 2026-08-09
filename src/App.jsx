import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;