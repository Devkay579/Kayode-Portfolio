import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Howler } from 'howler';
import { preloadSounds } from '../services/sound';

interface SoundState {
  muted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
}

export const useSoundStore = create<SoundState>()(
  persist(
    (set, get) => ({
      muted: false,
      toggleMute: () => {
        const newMuted = !get().muted;
        set({ muted: newMuted });
        Howler.mute(newMuted);
        if (!newMuted) preloadSounds();
      },
      setMuted: (muted) => {
        set({ muted });
        Howler.mute(muted);
        if (!muted) preloadSounds();
      },
    }),
    { name: 'sound-settings' }
  )
);