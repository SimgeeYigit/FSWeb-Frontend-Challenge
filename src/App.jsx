import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  useEffect(() => {
    toast.success("Sayfama hoşgeldiniz! 🎉");
  }, []);

  return (
    <>
      <ToastContainer icon={false} position="top-center" />
      <Header />
      <Switch>
        <Route path="/contact" component={Form} />
        <Route path="/">
          <>
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
