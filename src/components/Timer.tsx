import * as dayjs from "dayjs";
import * as duration from "dayjs/plugin/duration";
import { useUser } from "../context/UserContext";
import { tw } from "twind";

dayjs.extend(duration);

const Timer = () => {
  const { timeRemaining } = useUser();
  return (
    <p className={tw`text-center ${!timeRemaining && "hidden"}`}>
      time until next place:{" "}
      {dayjs.duration(timeRemaining, "seconds").format("m:ss")}
    </p>
  );
};

export default Timer;
