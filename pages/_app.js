import "../styles/globals.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import Login from "../components/Login";
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || HomeLayout;

  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

const HomeLayout = ({ children }) => {
  return <>{children}</>;
};

export default MyApp;
