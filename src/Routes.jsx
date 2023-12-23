import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const Masihdalampengembangan = React.lazy(
  () => import("pages/Masihdalampengembangan"),
);
const Tablet = React.lazy(() => import("pages/Tablet"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Tablet />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route
            path="/masihdalampengembangan"
            element={<Masihdalampengembangan />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
