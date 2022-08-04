import { tw } from "twind";
import ColorSelector from "./components/ColorSelector";
import Grid from "./components/Grid";
import Timer from "./components/Timer";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <h1 className={tw`text-3xl font-semibold text-center`}>place</h1>
      <UserProvider>
        <div className={tw`mt-8`}>
          <Grid />
          <ColorSelector />
          <Timer />
        </div>
        {/* issue with orange not showing on hover, so hacky way to fix */}
        <span className={tw`hover:bg-orange-400`} />
      </UserProvider>
    </>
  );
};

export default App;
