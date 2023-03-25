import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./app/routes";
import NotFoundPage from "./pages/NotFoundPage";
import { LoadingPage } from "./components/Global";
import { useSelector } from "react-redux";
import ButtonDarkMode from "./components/Global/ButtonDarkMode";

function App() {
  const { isLoading } = useSelector(state => state.reducer)

  return (
    <BrowserRouter>
      {isLoading && <LoadingPage />}

      <Routes>
        {routes.map(({ path, component: Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ButtonDarkMode/>
    </BrowserRouter>
  );
}

export default App;
