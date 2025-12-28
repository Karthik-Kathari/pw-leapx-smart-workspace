import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import TeamOverview from "./pages/TeamOverview/TeamOverview";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
import TaskBoard from "./pages/TaskBoard/TaskBoard";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<TeamOverview />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />
          <Route path="/projects/:projectId" element={<TaskBoard />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
