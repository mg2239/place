import { tw } from "twind";
import ColorSelector from "./components/ColorSelector";
import Grid from "./components/Grid";
import Timer from "./components/Timer";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Grid />
        <ColorSelector />
        <Timer />
      </UserProvider>
      {/* issue with orange not showing on hover, so hacky way to fix */}
      <span className={tw`hover:bg-orange-400`} />
    </>
  );
};

export default App;
