import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="equipments" element={"EQUIPAMENTOS"}></Route>
          <Route path="employees" element={"FUNCIONARIOS"}></Route>
          <Route path="deliverys" element={"ENTREGAS"}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
