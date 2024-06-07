import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import Maincomp from "../comp/Maincomp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home </title>
        <meta
          name="description"
          content="this is your home page to introduce the web development"
        />
      </Helmet>

      <Header />
      <Maincomp pageName="Home Page" Designer="Johnson" />
      <Footer />
    </>
  );
};

export default Home;
