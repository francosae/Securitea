import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import * as color from "../../assets/colorPalette";
//Components
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserDashboard from "../UserDashboard/UserDashboard";
import ContactUs from "../ContactUs/ContactUs";
import ModulePage from "../ModulePage/ModulePagePhishing";
import ResourcePage from "../ResourcePage/ResourcePage";
import AuthRoute from "../AuthRoute/AuthRoute";
import ModulePagePhishing from "../ModulePage/ModulePagePhishing";
import ModulePageTips from "../ModulePage/ModulePageTips";
import Modules from "../Modules/Modules";
import PageNotFound from "../PageNotFound/PageNotFound";
import SimulationPage from "../SimulationPage/SimulationPage";
import SimulationPage2 from "../SimulationPage/SimulationPage2";
import SimulationPage3 from "../SimulationPage/SimulationPage3";
import TipsPage from "../InternetTips/InternetTips";
import PasswordPage from "../PasswordPage/PasswordPage";
import Skeleton from "../AuthModulePage/Skeleton";
import CertificatePage from "../SimulationPage/CertificatePage"
//Libraries
import { NextUIProvider, createTheme, Progress } from "@nextui-org/react";
//Contexts
import { AuthContextProvider } from "../../contexts/auth";
import { ProgressContextProvider } from "../../contexts/progress";
import ManagerDashboard from "../ManagerDashboard/ManagerDashboard";
export default function AppContainer() {
  return (
    <NextUIProvider theme={theme}>
      <AuthContextProvider>
        <ProgressContextProvider>
          <App />
        </ProgressContextProvider>
      </AuthContextProvider>
    </NextUIProvider>
  );
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/UserDashboard/"
            element={<AuthRoute element={<UserDashboard />} />}
          />
          <Route path="/ModulePhishing" element={<ModulePagePhishing />} />
          <Route path="/ModuleTips" element={<ModulePageTips />} />
          <Route path="/Modules" element={<Modules />} />
          <Route path="/Resources" element={<ResourcePage />} />
          <Route path="/Modules/demo" element={<SimulationPage />} />
          <Route path="/Modules/tips" element={<TipsPage />} />
          <Route path="/PasswordPage" element={<PasswordPage />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/Skeleton"
            element={<AuthRoute element={<Skeleton />} />}
          />
          <Route
            path="/ManagerDashboard/*"
            element={<AuthRoute element={<ManagerDashboard />} />}
          />
          <Route path="/Sim2" element={<SimulationPage2 />} />
          <Route path="/Sim3" element={<SimulationPage3 />} />
          <Route path="/Done" element={<CertificatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      platinum: color.platinum,
      black: color.richBlackFogra,
      lightpurple: color.languidLavender,
      medpurple: color.blueBell,
      darkpurple: color.maximumBluePurple,
    },
    space: {},
    fonts: {
      wee: "Roboto",
      mono: "Open Sans",
    },
  },
});