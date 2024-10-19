import Footer from "../Standard/Footer";
import Header from "../Standard/Header";
import AbstractFactory from "./DesignPatterns/AbstractFactory";
import Command from "./DesignPatterns/Command";
import Singleton from "./DesignPatterns/Singleton";

function BlogDesignPatternsCSharp() {    

  return (
    <>
        <Header />
        <AbstractFactory/>
        <Command/>
        <Singleton/>
        <Footer />
      
    </>
  );
}

export default BlogDesignPatternsCSharp;
