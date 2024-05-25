import { Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Layout from "./components/Layout/_layout";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path={"*"}
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
