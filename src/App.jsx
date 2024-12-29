import SignUpPage from "../components/SignUpPage";
import LoginPage from "../components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "../components/Body";
import ProfilePAge from "../components/ProfilePAge";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Body />} />
              <Route path="profile/view" element={<ProfilePAge />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
