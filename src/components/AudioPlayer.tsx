import { useAudioVisualizer } from "../hooks/useAudioVisualizer";
import { AudioVisualizer } from "./AudioVisualizer";

export const AudioPlayer = () => {
  const { audioRef, frequencies } = useAudioVisualizer();
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
        <div className="text-zinc-700 my-2">epic-cinematic-trailer</div>
        <audio ref={audioRef} controls src="epic-cinematic-trailer.mp3" />
      </div>
    </div>
  );
};
