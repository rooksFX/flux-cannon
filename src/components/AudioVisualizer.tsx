import "./audioVisualizer.css";

interface Props {
  frequencies: number[] | null;
}

export const AudioVisualizer = ({ frequencies }: Props) => {
  return (
    <div
      id="frequencies"
      className="w-screen flex flex-row justify-center items-center"
    >
      <div className="h-[300px] flex flex-row-reverse justify-center items-center">
        {frequencies !== null &&
          frequencies.map((frequency, index) => {
            if (index % 8 === 0 && index < 800)
              return (
                <div
                  key={"left-" + index}
                  className={`
                    w-[5px]
                    mr-[4px]
                    rounded-md
                    hover:invert
                    transition-colors
                    ${
                      index > 500
                        ? "brightness-100 opacity-50 saturate-100"
                        : index > 255
                        ? "brightness-150 opacity-75 saturate-150"
                        : "brightness-200 opacity-100 saturate-200"
                    }
                    ${
                      frequency > 160
                        ? "bg-purple-700 "
                        : frequency > 80
                        ? "bg-pink-700 "
                        : frequency > 0
                        ? "bg-teal-400 "
                        : "bg-zinc-700"
                    }
                `}
                  style={{ height: frequency > 0 ? frequency : "5px" }}
                />
              );
            return null;
          })}
      </div>
      <div className="h-[300px] flex flex-row justify-center items-center">
        {frequencies !== null &&
          frequencies.map((frequency, index) => {
            if (index % 8 === 0 && index < 800)
              return (
                <div
                  key={"right-" + index}
                  className={`
                    w-[5px]
                    mr-[4px]
                    rounded-md
                    hover:invert
                    transition-colors
                    ${
                      index > 500
                        ? "brightness-100 opacity-50 saturate-100"
                        : index > 255
                        ? "brightness-150 opacity-75 saturate-150"
                        : "brightness-200 opacity-100 saturate-200"
                    }
                    ${
                      frequency > 160
                        ? "bg-purple-700"
                        : frequency > 80
                        ? "bg-pink-700"
                        : frequency > 0
                        ? "bg-teal-400"
                        : "bg-zinc-700"
                    }
              `}
                  style={{ height: frequency > 0 ? frequency : "5px" }}
                />
              );
            return null;
          })}
      </div>
    </div>
  );
};
