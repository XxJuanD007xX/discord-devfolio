import { useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music2, ListMusic } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

/* ============================================================================
   Spotify Activity — Discord "Listening to Spotify" + mini playlist
   ============================================================================
   - Album gradients stay per-track (each album has its own identity)
   - Card chrome (border glow, controls, equalizer, hover states) reacts to
     the active palette via `--primary` and `--gradient-start/-end`
   - Replace `playlist` to use your real songs
   ============================================================================ */

interface Track {
    title: string;
    artist: string;
    album: string;
    duration: number; // seconds
}

const playlist: Track[] = [
    {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        duration: 200,
    },
    {
        title: 'Yellow',
        artist: 'Coldplay',
        album: 'Parachutes',
        duration: 269,
    },
    {
        title: 'Locked Out of Heaven',
        artist: 'Bruno Mars',
        album: 'Unorthodox Jukebox',
        duration: 233,
    },
];

const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, '0')}`;
};

/* Equalizer reusable — barras animadas con palette primary + glow */
const Equalizer = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
    let bars = [0, 1, 2];
    let barWidth = '2px';
    let heightClass = 'h-2.5 gap-[3px]';
    let glow = '0 0 3px hsl(var(--primary) / 0.5)';

    if (size === 'md') {
        bars = [0, 1, 2, 3, 4];
        barWidth = '3px';
        heightClass = 'h-3.5 gap-[4px]';
    } else if (size === 'lg') {
        bars = [0, 1, 2, 3, 4, 5, 6, 7]; // Más barras para ocupar el espacio
        barWidth = '3.5px';
        heightClass = 'h-7 gap-[4px]';
        glow = '0 0 6px hsl(var(--primary) / 0.6)';
    }

    return (
        <div
            className={`flex items-end justify-center ${heightClass}`}
            aria-hidden="true"
        >
            {bars.map((i) => (
                <span
                    key={i}
                    className="rounded-t-sm animate-eq-bar"
                    style={{
                        width: barWidth,
                        background: `linear-gradient(to top, var(--gradient-end, #7928ca), var(--gradient-start, #ff0080))`,
                        boxShadow: glow,
                        animationDelay: `${i * 90}ms`,
                        animationDuration: `${0.7 + (i % 4) * 0.2}s`,
                    }}
                />
            ))}
        </div>
    );
};

export const SpotifyActivity = () => {
    const [trackIdx, setTrackIdx] = useState(0);
    const [progress, setProgress] = useState(42);
    const [isPlaying, setIsPlaying] = useState(true);
    const { playClick, playHover } = useSound();

    const current = playlist[trackIdx];
    const upcoming = [...playlist.slice(trackIdx + 1), ...playlist.slice(0, trackIdx)].slice(0, 3);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= current.duration) {
                    setTrackIdx((i) => (i + 1) % playlist.length);
                    return 0;
                }
                return p + 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, current.duration]);

    const goPrev = () => {
        playClick();
        setTrackIdx((i) => (i - 1 + playlist.length) % playlist.length);
        setProgress(0);
    };
    const goNext = () => {
        playClick();
        setTrackIdx((i) => (i + 1) % playlist.length);
        setProgress(0);
    };
    const togglePlay = () => {
        playClick();
        setIsPlaying((p) => !p);
    };
    const selectTrack = (absoluteIdx: number) => {
        playClick();
        setTrackIdx(absoluteIdx);
        setProgress(0);
        setIsPlaying(true);
    };

    const progressPct = Math.min(100, (progress / current.duration) * 100);

    return (
        <div className="space-y-2">
            {/* ============== HEADER ============== */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full" style={{ background: '#1DB954' }}>
                        <Music2 className="w-2 h-2 text-black" strokeWidth={3} />
                    </span>
                    <h3 className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--fg-muted, #b5bac1)' }}>
                        Listening to Spotify
                    </h3>
                </div>
                {/* Small equalizer en el header como indicador permanente de "playing" */}
                {isPlaying && <Equalizer size="sm" />}
            </div>

            {/* ============== ACTIVITY CARD (current track) ============== */}
            <div
                className="relative overflow-hidden rounded-xl p-3 border"
                style={{
                    background: 'var(--bg-tertiary, #232428)',
                    borderColor: 'hsl(var(--primary) / 0.18)',
                    boxShadow: '0 0 0 1px hsl(var(--primary) / 0.06), 0 8px 24px hsl(var(--primary) / 0.08)',
                }}
            >
                {/* Backdrop glow palette-aware (más intenso, antes apenas se veía) */}
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                    style={{
                        background:
                            'radial-gradient(circle at 20% 0%, hsl(var(--primary) / 0.15), transparent 60%), linear-gradient(135deg, var(--gradient-start, #ff0080) 0%, transparent 50%, var(--gradient-end, #7928ca) 100%)',
                        opacity: 0.18,
                    }}
                />

                <div className="relative z-10 flex gap-3 items-center">
                    {/* Album art */}
                    <div
                        className="shrink-0 w-14 h-14 rounded-md shadow-lg flex items-center justify-center relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, var(--gradient-start, #ff0080), var(--gradient-end, #7928ca))',
                            boxShadow: '0 4px 14px hsl(var(--primary) / 0.3), 0 0 0 1px hsl(var(--primary) / 0.2)',
                        }}
                    >
                        <Music2 className="w-6 h-6 text-white/90" />
                    </div>

                    {/* Track info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                        <p className="font-bold text-sm leading-tight truncate" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                            {current.title}
                        </p>
                        <p className="text-xs leading-tight truncate mt-0.5" style={{ color: 'var(--fg-muted, #b5bac1)' }}>
                            by <span className="font-medium">{current.artist}</span>
                        </p>
                        <p className="text-[10px] leading-tight truncate mt-0.5" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                            on {current.album}
                        </p>
                    </div>

                    {/* BIG Equalizer filling the right space */}
                    {isPlaying && (
                        <div className="shrink-0 flex items-center pr-2">
                            <Equalizer size="lg" />
                        </div>
                    )}
                </div>

                {/* Progress bar — fill usa la paleta primary */}
                <div className="relative z-10 mt-2.5">
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-main, #1e1f22)' }}>
                        <div
                            className="h-full rounded-full transition-all duration-1000 ease-linear"
                            style={{
                                width: `${progressPct}%`,
                                background: `linear-gradient(90deg, var(--gradient-start, #ff0080), var(--gradient-end, #7928ca))`,
                                boxShadow: `0 0 10px hsl(var(--primary) / 0.6)`,
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-1 text-[9px] font-mono" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                        <span>{formatTime(progress)}</span>
                        <span>{formatTime(current.duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="relative z-10 flex items-center justify-center gap-1 mt-1">
                    <button
                        onClick={goPrev}
                        onMouseEnter={playHover}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--fg-muted, #b5bac1)' }}
                        aria-label="Canción anterior"
                    >
                        <SkipBack className="w-3.5 h-3.5" fill="currentColor" />
                    </button>
                    {/* Play button — usa gradient palette para reaccionar al picker */}
                    <button
                        onClick={togglePlay}
                        onMouseEnter={playHover}
                        className="p-2 rounded-full text-white hover:scale-110 active:scale-95 transition-all shadow-lg relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, var(--gradient-start, #ff0080), var(--gradient-end, #7928ca))',
                            boxShadow: '0 4px 14px hsl(var(--primary) / 0.5)',
                        }}
                        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                    >
                        {isPlaying ? (
                            <Pause className="w-3.5 h-3.5 relative z-10" fill="currentColor" />
                        ) : (
                            <Play className="w-3.5 h-3.5 ml-0.5 relative z-10" fill="currentColor" />
                        )}
                    </button>
                    <button
                        onClick={goNext}
                        onMouseEnter={playHover}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                        style={{ color: 'var(--fg-muted, #b5bac1)' }}
                        aria-label="Siguiente canción"
                    >
                        <SkipForward className="w-3.5 h-3.5" fill="currentColor" />
                    </button>
                </div>
            </div>

            {/* ============== UP NEXT — mini playlist ============== */}
            <div>
                <div className="flex items-center gap-1.5 mt-3 mb-1.5 px-0.5">
                    <ListMusic className="w-3 h-3" style={{ color: 'var(--fg-muted, #949ba4)' }} />
                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                        Up Next
                    </span>
                    <div className="flex-1 h-px" style={{ background: 'var(--border-palette, #3f4147)', opacity: 0.4 }} />
                </div>
                <div className="space-y-0.5">
                    {upcoming.map((track, idx) => {
                        const absoluteIdx = playlist.findIndex(
                            (t) => t.title === track.title && t.artist === track.artist
                        );
                        return (
                            <button
                                key={`${track.title}-${idx}`}
                                onClick={() => selectTrack(absoluteIdx)}
                                onMouseEnter={playHover}
                                className="group w-full flex items-center gap-2 px-1.5 py-1 rounded-md transition-colors text-left"
                                style={{
                                    background: 'transparent',
                                }}
                                onMouseOver={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = 'hsl(var(--primary) / 0.10)';
                                }}
                                onMouseOut={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                                }}
                            >
                                <div
                                    className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center relative overflow-hidden"
                                    style={{ background: 'linear-gradient(135deg, var(--gradient-start, #ff0080), var(--gradient-end, #7928ca))' }}
                                >
                                    <Music2 className="w-3 h-3 text-white/90 group-hover:opacity-0 transition-opacity" />
                                    <Play className="w-3 h-3 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" fill="currentColor" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-semibold leading-tight truncate group-hover:text-[color:hsl(var(--primary))] transition-colors" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                                        {track.title}
                                    </p>
                                    <p className="text-[9px] leading-tight truncate" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                                        {track.artist}
                                    </p>
                                </div>
                                <span className="text-[9px] font-mono shrink-0" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                                    {formatTime(track.duration)}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
