
import { Howl } from 'howler';

const soundFiles = {
  countdown: '/sounds/countdown.mp3',
  glitch: '/sounds/glitch.mp3',
  success: '/sounds/success.mp3',
  wrong: '/sounds/wrong.mp3',
  click: '/sounds/click.mp3',
  distraction: '/sounds/distraction.mp3',
  ambient: '/sounds/ambient.mp3', 
  hover: '/sounds/hover.mp3'
};

const sounds: Record<keyof typeof soundFiles, Howl> = {} as any;
let soundsPreloaded = false;

for (const [key, src] of Object.entries(soundFiles)) {
  sounds[key as keyof typeof soundFiles] = new Howl({
    src,
    preload: false,
    loop: key === 'ambient', 
    volume: key === 'ambient' ? 0.3 : 0.8, // lower volume for background
  });
}

export const preloadSounds = () => {
  if (soundsPreloaded) return;
  Object.values(sounds).forEach(sound => {
    if (sound.state() === 'unloaded') sound.load();
  });
  soundsPreloaded = true;
};

export const playSound = (name: keyof typeof soundFiles, options?: { volume?: number }) => {
  const sound = sounds[name];
  if (!sound) return;
  if (sound.state() === 'unloaded') sound.load();
  if (options?.volume !== undefined) sound.volume(options.volume);
  sound.play();
};

export const stopSound = (name: keyof typeof soundFiles) => {
  const sound = sounds[name];
  if (sound?.playing()) sound.stop();
};

export const setSoundVolume = (name: keyof typeof soundFiles, volume: number) => {
  const sound = sounds[name];
  if (sound) sound.volume(volume);
};