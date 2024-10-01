import Accordion from "./Components/Accordion";
import BeMarchant from "./Components/BeMarchant";
import FeatureCard from "./Components/FeatureCard";
import Hero from "./Components/Hero";
import Partner from "./Components/Partner";
import Service from "./Components/Service";

function App() {
  return (
    <>
      {/* Hero Section  */}
      <Hero />
      <Partner />
      <Service />
      <FeatureCard />
      <Accordion />
      <BeMarchant />
    </>
  );
}

export default App;
