"use client";

import React, { useEffect, useRef } from 'react';

const BackMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/bg-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackMusic;