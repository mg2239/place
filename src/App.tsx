import ColorSelector from "./components/ColorSelector";
import Grid from "./components/Grid";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Grid />
        <ColorSelector />
      </UserProvider>
    </>
  );
};

export default App;
