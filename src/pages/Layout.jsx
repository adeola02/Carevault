import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
