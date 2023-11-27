import AppRoutes from "./routes/AppRoutes";
// import { ThemeProvider } from "styled-components";
// import { defaultTheme } from "./style/default";
import { GlobalStyle } from "./style/default";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
};

export default App;
