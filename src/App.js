import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./app/routes";
import NotFoundPage from "./pages/NotFoundPage";
import { LoadingPage } from "./components/Global";
import { useDispatch, useSelector } from "react-redux";
import ButtonDarkMode from "./components/Global/ButtonDarkMode";
import RouteComponent from "./HOCs/AppRoute";
import { useEffect } from "react";
import { testTokenAction } from "./redux/actions/Auth/actions";
function App() {
  const { isLoading } = useSelector(state => state.reducer);
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      {isLoading && <LoadingPage />}
      <Routes>
        {routes.map(({ path, component: Component, isPrivate, isAuth, redirectPath, isAdmin }) =>
          <Route key={path} path={path} element={<RouteComponent isPrivate={isPrivate} isAdmin={isAdmin} isAuth={isAuth} Component={Component} redirectPath={redirectPath} />} />
        )}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ButtonDarkMode />
    </BrowserRouter>
  );
}

export default App;
