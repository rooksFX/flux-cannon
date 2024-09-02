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
    <div className="ring-container relative flex justify-center items-center w-[240px] h-[240px] rounded-full motion-safe:animate-spin-slow">
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
            } w-[5px]
            ${
              frequency === 0 ? "" : type === "bits" ? "glow-pink" : "glow"
            }
            rounded-full
            transform-gpu
            `}
            style={{
              transform: `translateY(-${frequency}px)`,
              ...(type === "bar" && {
                height: frequency === 0 ? 1 : frequency / 4,
              }),
              ...(type === "bits" && {
                height: frequency === 0 ? 1 : 5,
              }),
            }}
            // style={{
            //   transform: `translateY(-${frequency}px)`,
            //   ...(type === "bar" && {
            //     height: frequency === 0 ? 1 : frequency / 2,
            //   }),
            //   ...(type === "bits" && {
            //     height: frequency === 0 ? 1 : 5,
            //   }),
            // }}
          ></div>
        </div>
      ))}

      <div className="text-zinc-700 motion-safe:animate-spin-reverse">
        rfx / Flux Cannon
      </div>
    </div>
  );
};

export default RingVisualizer;
