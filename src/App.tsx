import "./App.css";
import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import ClimbSection from "./components/ClimbSection";
import ScheduleSection from "./components/ScheduleSection";
import Footer from "./components/Footer";
import HistorySection from "./components/HistorySection";

function App() {
  return (
    <>
      <HeroSection />
      <NavSection />
      <HistorySection />
      <ClimbSection />
      <ScheduleSection />
      <Footer />
    </>
  );
}

export default App;
