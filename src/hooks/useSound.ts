import { useCallback, useEffect, useRef } from 'react';

// Singleton para el AudioContext para no exceder el límite del navegador
let audioCtx: AudioContext | null = null;
const getAudioContext = () => {
    if (typeof window !== 'undefined') {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        // Intentar reanudar si estaba suspendido (autoplay policy)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }
    return audioCtx;
};

export const useSound = () => {
    // Inicializar el contexto cuando el usuario interactúa por primera vez en toda la app
    useEffect(() => {
        const initAudio = () => getAudioContext();
        window.addEventListener('click', initAudio, { once: true });
        window.addEventListener('touchstart', initAudio, { once: true });
        return () => {
            window.removeEventListener('click', initAudio);
            window.removeEventListener('touchstart', initAudio);
        };
    }, []);

    const playClick = useCallback(() => {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.05);
        } catch (e) {
            // Silenciosamente ignorar si falla (ej: browser policy)
        }
    }, []);

    const playHover = useCallback(() => {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.02);

            gain.gain.setValueAtTime(0.02, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.02);
        } catch (e) {
            // Silenciosamente ignorar
        }
    }, []);

    return { playClick, playHover };
};
