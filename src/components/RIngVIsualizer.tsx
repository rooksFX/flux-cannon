import "./RingVisualizer.css";
import "./audioVisualizer.css";

interface RingVisualizerProps {
  frequencies: number[] | null;
  type?: "bits" | "bar";
  color?: string;
}

const RingVisualizer: React.FC<RingVisualizerProps> = ({
  frequencies,
  color = "bg-pink-700",
  type = "bits",
}) => {
  //   console.log(" -------- frequencies.length: ", frequencies?.length);
  return (
    <div className="ring-container relative flex justify-center items-center w-[240px] h-[240px] border border-teal-700 rounded-full motion-safe:animate-spin-slow">
      {frequencies?.map((frequency, index) => (
        <div
          className="absolute flex w-[20px] h-[120px] origin-bottom"
          style={{
            transform: `translateY(-60px) rotate(${
              (360 / frequencies.length) * index
            }deg)`,
          }}
        >
          <div
            className={`${
              frequency === 0 ? "bg-zinc-700" : color
            } w-[5px] h-[5px] ${
              frequency === 0 ? "" : type === "bits" ? "glow-pink" : "glow"
            }
            rounded-full
            `}
            style={{
              transform: `translateY(-${frequency}px)`,
              ...(type === "bar" && {
                height: frequency === 0 ? 5 : frequency,
              }),
            }}
          ></div>
        </div>
      ))}

      <div className="text-zinc-700 motion-safe:animate-spin-reverse animate-pulse">
        rfx / Flux Cannon
      </div>
    </div>
  );
};

export default RingVisualizer;
