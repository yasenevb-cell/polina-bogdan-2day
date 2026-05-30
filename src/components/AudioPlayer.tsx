import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_20970a2f1d.mp3?filename=wedding-piano-110292.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-[#E8D8CE] transition-all duration-300 hover:scale-105 group">
      <button 
        onClick={togglePlay}
        className="flex items-center gap-2 text-[#8C7365] hover:text-[#4A3B32] focus:outline-none cursor-pointer"
        title={isPlaying ? "Выключить музыку" : "Включить музыку"}
      >
        <div className={`p-2 rounded-full ${isPlaying ? 'bg-[#D4A394] text-white animate-pulse' : 'bg-[#E8D8CE] text-[#4A3B32]'}`}>
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </div>
        <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline pr-2 font-sans">
          {isPlaying ? "Музыка играет" : "Включить музыку"}
        </span>
      </button>
      {isPlaying && (
        <span className="absolute -top-1 -left-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A394] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4A394]"></span>
        </span>
      )}
    </div>
  );
};
