import AdviceCard from "./components/AdviceCard";
import Attribution from "./components/Attribution";
import { AdviceProvider } from "./context/AdviceContext"; 

export default function App() {
  return (
    <AdviceProvider>
      <div className="App font-Manrope bg-dark-blue h-screen flex items-start md:items-center justify-center pt-28 md:pt-0">
        <AdviceCard/>
        <Attribution />
      </div>
    </AdviceProvider>
  );
}
