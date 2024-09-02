import { useState } from "react";
import { useAudioVisualizer } from "../hooks/useAudioVisualizer";
import { AudioVisualizer } from "./AudioVisualizer";

export const AudioPlayer = () => {
  const { audioRef, frequencies } = useAudioVisualizer();
  const [selectedMusic, setSelectedMusic] = useState("epic-cinematic-trailer.mp3");
  // const [musicFile, setMusicFile] = useState<string | null>(null);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setMusicFile(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div
      id="audio-player"
      className="flex flex-col justify-center items-center"
    >
      <AudioVisualizer frequencies={frequencies} />
      <div className="absolute p-4 rounded-lg bottom-12 flex justify-center items-center flex-col transition-shadow shadow-xl hover:shadow-teal-900 hover:cursor-pointer">
        {/* <input
          className="p-2 text-justify self-center m-auto"
          type="file"
          onChange={handleFileChange}
          style={{
            textAlignLast: "center",
          }}
        /> */}
        {/* {musicFile ? (<audio ref={audioRef} controls src={window.URL.createObjectURL(musicFile)} />) : null} */}
        {/* <audio ref={audioRef} controls src={musicFile ?? ""} /> */}
        <select className="m-2 p-2 bg-zinc-700 rounded-md" onChange={(e) => setSelectedMusic(e.target.value)}>
          <option value="epic-cinematic-trailer.mp3">epic-cinematic-trailer</option>
          <option value="bass_cannon.mp3">bass_cannon</option>
          <option value="bangarang.mp3">bangarang</option>
          <option value="imma_try_it_out.mp3">imma_try_it_out</option>
        </select>
        <audio ref={audioRef} controls src={selectedMusic} />
      </div>
    </div>
  );
};
