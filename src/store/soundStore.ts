import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Howler } from 'howler';

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
      },
      setMuted: (muted) => {
        set({ muted });
        Howler.mute(muted);
      },
    }),
    { name: 'sound-settings' }
  )
);