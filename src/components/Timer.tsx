import { DateTime } from "luxon";
import { useUser } from "../context/UserContext";
import { tw } from "twind";

const Timer = () => {
  const { timeRemaining } = useUser();
  return (
    <p
      className={tw`text-center mt-8 ${
        !timeRemaining && "hidden"
      } font-bold text-3xl`}
    >
      {DateTime.fromSeconds(timeRemaining).toFormat("m:ss")}
    </p>
  );
};

export default Timer;
