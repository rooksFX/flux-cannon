import { ChangeEvent, useState } from "react";
import { useAudioVisualizer } from "../hooks/useAudioVisualizer";
import { AudioVisualizer } from "./AudioVisualizer";

export const AudioPlayer = () => {
  const { audioRef, frequencies } = useAudioVisualizer();
  const [musicFile, setMusicFile] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMusicFile(URL.createObjectURL(file));
    }
  };

  return (
    <div
      id="audio-player"
      className="flex flex-col justify-center items-center"
    >
      <AudioVisualizer frequencies={frequencies} />
      <div className="absolute bottom-12 flex justify-center items-center flex-col">
        <input
          className="p-2 text-justify self-center m-auto"
          type="file"
          onChange={handleFileChange}
          style={{
            textAlignLast: "center",
          }}
        />
        {/* {musicFile ? (<audio ref={audioRef} controls src={window.URL.createObjectURL(musicFile)} />) : null} */}
        <audio ref={audioRef} controls src={musicFile ?? ""} />
        {/* <audio ref={audioRef} controls src="cliffs_of_dover.mp3" /> */}
      </div>
    </div>
  );
};
