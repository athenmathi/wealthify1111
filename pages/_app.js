import "../styles/globals.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { Provider } from "react-redux";
import { store } from "../store/index";
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || HomeLayout;

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Provider>
    </>
  );
}

const HomeLayout = ({ children }) => {
  return <>{children}</>;
};

export default MyApp;
