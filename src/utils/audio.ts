/**
 * Audio synthesis utility using standard browser Web Audio API & Web Speech API.
 * 100% client-side, zero external MP3 dependencies, works completely offline.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * Play a cheerful chime when answer is correct
 */
export function playSuccessChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (cheerful major chord)

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.1);

    gain.gain.setValueAtTime(0, now + idx * 0.1);
    gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.1 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.1);
    osc.stop(now + idx * 0.1 + 0.5);
  });
}

/**
 * Play a gentle, encouraging soft sound when an answer needs retry
 */
export function playWrongSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(330, now); // E4
  osc.frequency.exponentialRampToValueAtTime(220, now + 0.28); // Slide down gently to A3

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.35);
}

/**
 * Play celebratory fanfare for Sultan Adab graduation
 */
export function playFanfare() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  // Fanfare pattern: C5, C5, C5, G5, E5, G5, C6
  const pattern = [
    { freq: 523.25, time: 0, dur: 0.15 },
    { freq: 523.25, time: 0.15, dur: 0.15 },
    { freq: 523.25, time: 0.3, dur: 0.2 },
    { freq: 783.99, time: 0.55, dur: 0.3 },
    { freq: 659.25, time: 0.9, dur: 0.2 },
    { freq: 783.99, time: 1.15, dur: 0.2 },
    { freq: 1046.5, time: 1.4, dur: 0.8 },
  ];

  pattern.forEach(p => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(p.freq, now + p.time);

    gain.gain.setValueAtTime(0.01, now + p.time);
    gain.gain.linearRampToValueAtTime(0.3, now + p.time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + p.time + p.dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + p.time);
    osc.stop(now + p.time + p.dur);
  });
}

/**
 * Play a light click sound for UI buttons
 */
export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.07);
}

/**
 * Web Speech API to speak Arabic or Indonesian
 */
export function speakText(text: string, lang: 'ar-SA' | 'id-ID' = 'ar-SA', onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending utterance

    const cleanText = text.replace(/[\r\n]+/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = lang === 'ar-SA' ? 0.85 : 0.95; // slightly slower for clear prayer recitation
    utterance.pitch = 1.05;

    // Try finding a matching voice
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.startsWith(lang.substring(0, 2)));
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (onEnd) onEnd();
  }
}

/**
 * Stop any ongoing speech synthesis
 */
export function stopSpeech() {
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }
}
