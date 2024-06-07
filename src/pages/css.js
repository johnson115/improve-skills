import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Maincomp from "../comp/Maincomp";
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <>
      <Helmet>
        <title>Css Page </title>
        <meta
          name="description"
          content="Here You will find all the css tips and example of design"
        />
      </Helmet>
      <Header />
      <h1>Welcome to your css page is Default</h1>
      <Maincomp pageName="Css Page" Designer="Johnson" />
      <Footer />
    </>
  );
};

export default Css;
