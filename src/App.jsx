import { useEffect, useState } from "react";
import "./App.css";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import MyWorks from "./sections/MyWorks";
import Services from "./sections/Services";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  setTimeout(() => setLoading(false), 5000);
  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="bg-base w-screen h-screen grid grid-cols-5 fixed top-0 bottom-0 z-1">
        <div className="h-screen border-r border-gray relative">
          <span className="animate-bgLine"></span>
        </div>
        <div className="h-screen border-r border-gray relative">
          <span className="animate-bgLine"></span>
        </div>
        <div className="h-screen border-r border-gray relative">
          <span className="animate-bgLine"></span>
        </div>
        <div className="h-screen border-r border-gray relative">
          <span className="animate-bgLine"></span>
        </div>
        <div className="h-screen ">
          <span className="animate-bgLine"></span>
        </div>
      </section>
      <main className="mx-auto w-[95%] lg:max-w-[85%]  z-1 h-screen relative flex flex-col gap-5">
        <Header />
        <section className="w-full flex gap-5 relative max-lg:flex-col">
          <Sidebar />
          <div className="flex flex-col card-grid gap-5 max-lg:w-full">
            <About />
            <Skills />
            <Services />
            <MyWorks />
            <Resume />
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
