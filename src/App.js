import AdviceCard from "./components/AdviceCard";
import Attribution from "./components/Attribution";
import { AdviceProvider } from "./context/AdviceContext"; 

export default function App() {
  return (
    <AdviceProvider>
      <main className="App font-Manrope bg-dark-blue h-screen flex items-start md:items-center justify-center pt-28 md:pt-0">
        <h1 className="absolute w-1 h-1 overflow-hidden">Advice Generator</h1>
        <AdviceCard/>
        <Attribution />
      </main>
    </AdviceProvider>
  );
}
