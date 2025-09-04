import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="employees" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
