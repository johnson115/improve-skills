import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Maincomp from "../comp/Maincomp";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
    <Helmet>
      <title>JavaScript Page </title>
      <meta name="description" content="Here you can find all javaScript Function" />
    </Helmet>
    <Header />
    <h1>this is your html page is Default </h1>
    <Maincomp pageName="JavaScript Page" Designer="Johnson"/>
    <Footer />
    </>
  );
}

export default Html;



