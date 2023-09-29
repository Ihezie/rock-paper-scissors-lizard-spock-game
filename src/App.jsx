import AppProvider from "./AppProvider";
import Attribution from "./components/Attribution";
import GameBody from "./components/GameBody";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <AppProvider>
      <ScoreBoard />
      <GameBody />
      <Attribution />
    </AppProvider>
  );
}
export default App;
