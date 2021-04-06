import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import SignUp from "./screens/SignUp";
import routes from "./screens/routes";

// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
//   color: ${(props) => props.theme.fontColor};
// `;
function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          {!isLoggedIn ? (
            <Route path={routes.SignUp}>
              <SignUp />
            </Route>
          ) : null}
          <NotFound />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
