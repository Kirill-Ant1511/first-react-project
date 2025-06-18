import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/home/App";
import { MovieDetail } from "./pages/movie/MovieDetail";
import Layout from "./Components/Layout";
import { route } from "./constant/route.config";

export function MainRoutes() {
  return <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route 
          path={route.home}
          element={<App />}
        />

        <Route 
          path={route.movieDetail}
          element={<MovieDetail />}
        />
      </Route>
    </Routes>
  </Router>
}