import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import HackathonsPage from "./pages/HackathonsPage";
import AchievementsPage from "./pages/AchievementsPage";
import Events from "./pages/Events";
import Team from "./pages/Team";
import LearningPage from "./pages/LearningPage";
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
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "hackathons",
        element: <HackathonsPage />,
      },
      {
        path: "achievements",
        element: <AchievementsPage />,
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
        path: "learning",
        element: <LearningPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;