interface Props {
  frequencies: number[] | null;
}

export const LineVisualizer = ({ frequencies }: Props) => {
  return (
    <>
      <div className="h-[300px] flex flex-row-reverse justify-center items-center">
        {frequencies !== null &&
          frequencies.map((frequency, index) => {
            if (index % 4 === 0)
              return (
                <div
                  key={"left-" + index}
                  className={`
                  w-[2px]
                  mr-[2px]
                  rounded-md
                  hover:invert
                  transition-colors
                  ${
                    index > 600
                      ? "brightness-100 opacity-50 saturate-100"
                      : index > 300
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
                  style={{
                    height: frequency > 0 ? frequency : "5px",
                    // transform: `rotate(0.${index}turn) translate(-${
                    //   index / 10
                    // }px, -${index / 10}px)`,
                  }}
                ></div>
              );
            return null;
          })}
      </div>
      <div className="h-[300px] flex flex-row justify-center items-center">
        {frequencies !== null &&
          frequencies.map((frequency, index) => {
            if (index % 4 === 0)
              return (
                <div
                  key={"right-" + index}
                  className={`
                  w-[2px]
                  mr-[2px]
                  rounded-md
                  hover:invert
                  transition-colors
                  ${
                    index > 600
                      ? "brightness-100 opacity-50 saturate-100"
                      : index > 355
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
                  style={{
                    height: frequency > 0 ? frequency : "5px",
                    // transform: `rotate(0.${index}turn) translate(${
                    //   index / 10
                    // }px, ${index / 10}px)`,
                  }}
                ></div>
              );
            return null;
          })}
      </div>
    </>
  );
};
