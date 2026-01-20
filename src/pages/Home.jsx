import Header from "../components/Header";
import Hero from "../components/Hero";
import LoginSection from "../components/LoginSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <section className="content">
        <LoginSection />
        <AboutSection />
      </section>
    </>
  );
};

export default Home;
