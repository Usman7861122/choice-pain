import { useRef, useState } from 'react';

export default function VideoPlayer({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-3 rounded-lg border border-accent/50" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-md bg-navy shadow-2xl shadow-navy/40">
        <video ref={ref} src={src} poster={poster} playsInline preload="metadata" controls={playing} aria-label={title}
          className="aspect-video w-full object-cover" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
        {!playing && (
          <button onClick={toggle} aria-label={`Play video: ${title}`} className="group absolute inset-0 flex items-center justify-center bg-navy/35 transition hover:bg-navy/20">
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent-light bg-white/10 backdrop-blur transition duration-500 group-hover:scale-110 group-hover:bg-accent">
              <span className="absolute inset-0 animate-ping rounded-full border border-accent-light/60" />
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
