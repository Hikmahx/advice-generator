import AdviceCard from "./components/AdviceCard";
import { AdviceProvider } from "./context/AdviceContext"; 

export default function App() {
  return (
    <AdviceProvider>
      <div className="App font-Manrope">
        <AdviceCard/>
      </div>
    </AdviceProvider>
  );
}
