import { useRef, useEffect } from "react";

const Backsound = () => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = 0.5;
    }
  }, []);

  return (
    <audio
      ref={ref}
      src="/audio/backsound.mp3"
      autoPlay
      loop
      controls={false}
    />
  );
};

export default Backsound;
