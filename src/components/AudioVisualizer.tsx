import "./audioVisualizer.css";
import { LineVisualizer } from "./LineVisualizer";
import RingVisualizer from "./RIngVIsualizer";

interface Props {
  frequencies: number[] | null;
}

export const AudioVisualizer = ({ frequencies }: Props) => {
  return (
    <div
      id="frequencies"
      className="w-screen flex flex-row justify-center items-center"
    >
      {/* <div className="opacity-40 size-full flex justify-center items-center">
        <LineVisualizer frequencies={frequencies} />
      </div> */}
      <div className="absolute size-full flex justify-center items-center">
        <RingVisualizer
          frequencies={frequencies?.length ? frequencies?.slice(100, 720) : []}
        />
      </div>
      <div className="absolute size-full flex justify-center items-center">
        <RingVisualizer
          frequencies={frequencies?.length ? frequencies?.slice(720, 1024) : []}
          color="bg-teal-700 glow"
          type="bar"
        />
      </div>
    </div>
  );
};
