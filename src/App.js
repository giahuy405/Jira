import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./app/routes";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
