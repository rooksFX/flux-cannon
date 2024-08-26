import { useEffect, useRef, useState } from "react";

export const useAudioVisualizer = () => {
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const [frequencies, setFrequencies] = useState<number[] | null>([]);

  //   const audioRef = useRef<HTMLMediaElement | null>(null);
  //   const analyserRef = useRef<AnalyserNode | null>(null);

  //   const audioContextRef = useRef<AudioContext | null>(null);
  //   const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  //   const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    // Create a single AudioContext if it doesn't already exist
    if (!audioContextRef.current) {
      audioContextRef.current = new window.AudioContext();
    }

    const audioContext = audioContextRef.current;
    const audioElement = audioRef.current;

    // if (!audioElement) return;

    // Ensure the AudioContext is resumed on user interaction
    const handlePlay = () => {
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
    };

    (audioElement as HTMLMediaElement).addEventListener("play", handlePlay);

    // Create the MediaElementSourceNode only if it doesn't already exist
    if (!sourceRef.current) {
      sourceRef.current = audioContext.createMediaElementSource(
        audioElement as HTMLMediaElement
      );
    }

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    analyserRef.current = analyser;

    // Connect the existing source to the analyser
    sourceRef.current.connect(analyser);
    analyser.connect(audioContext.destination);

    const bufferLength = analyser.frequencyBinCount;
    // console.log(" --------- bufferLength: ", bufferLength);
    const dataArray = new Uint8Array(bufferLength);
    dataArrayRef.current = dataArray;
    setFrequencies([...dataArray]);

    const update = () => {
      analyser.getByteFrequencyData(dataArray);
      //   console.log(dataArray[0]); // Example: log the first frequency bin value
      dataArrayRef.current = dataArray;
      setFrequencies([...dataArray]);
      // console.log(' --------- dataArrayRef.current: ', dataArrayRef.current);
      requestAnimationFrame(update);
    };

    update();

    // Cleanup on unmount
    return () => {
      analyser.disconnect();
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      (audioElement as HTMLMediaElement).removeEventListener(
        "play",
        handlePlay
      );
    };
  }, []);

  return {
    audioRef,
    dataArrayRef,
    frequencies,
  };
};
