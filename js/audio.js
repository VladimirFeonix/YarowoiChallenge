/**
 * Dota 2 Hero Randomizer - Audio System
 * Handles all sound effects with volume control
 */

class AudioManager {
  constructor() {
    this.audioContext = null;
    this.spinBuffer = null;
    this.stopBuffer = null;
    this.userInteracted = false;
    this.masterVolume = 0.5;
    this.gainNode = null;
    this.init();
  }

  async init() {
    try {
      // Initialize audio context
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create gain node for master volume control
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
      
      // Load saved volume or use default
      const savedVolume = localStorage.getItem('dota2Volume');
      this.masterVolume = savedVolume ? parseFloat(savedVolume) : 0.5;
      this.gainNode.gain.value = this.masterVolume;

      // Load audio files
      await this.loadAudio('/YarowoiChallenge/sounds/spin.mp3', 'spin');
      await this.loadAudio('/YarowoiChallenge/sounds/stop.mp3', 'stop');

      // Initialize volume controls
      this.initVolumeControls();

      // First click unlocks audio
      const unlockHandler = () => {
        this.unlockAudio();
        document.removeEventListener('click', unlockHandler);
      };
      document.addEventListener('click', unlockHandler);

    } catch (e) {
      console.error('Audio initialization error:', e);
    }
  }

  async loadAudio(url, name) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      this[`${name}Buffer`] = await this.audioContext.decodeAudioData(arrayBuffer);
    } catch (e) {
      console.error(`Error loading ${name} audio:`, e);
    }
  }

  initVolumeControls() {
    const slider = document.querySelector('.volume-slider');
    const icon = document.querySelector('.volume-icon');
    
    if (slider) {
      slider.value = this.masterVolume;
      slider.addEventListener('input', (e) => {
        const volume = parseFloat(e.target.value);
        this.setMasterVolume(volume);
      });
    }

    this.updateVolumeIcon();
  }

  setMasterVolume(volume) {
    volume = Math.min(1, Math.max(0, volume));
    this.masterVolume = volume;
    
    if (this.gainNode) {
      this.gainNode.gain.value = volume;
    }
    
    localStorage.setItem('dota2Volume', volume);
    this.updateVolumeIcon();
  }

  updateVolumeIcon() {
    const icon = document.querySelector('.volume-icon');
    if (!icon) return;
    
    icon.className = 'volume-icon fas ' + (
      this.masterVolume <= 0 ? 'fa-volume-mute' :
      this.masterVolume < 0.5 ? 'fa-volume-down' : 'fa-volume-up'
    );
  }

  unlockAudio() {
    if (!this.userInteracted && this.audioContext.state === 'suspended') {
      this.userInteracted = true;
      this.audioContext.resume()
        .then(() => console.log('Audio unlocked'))
        .catch(e => console.error('Audio unlock failed:', e));
    }
  }

  playSpin() {
    if (!this.userInteracted) this.unlockAudio();
    return this.playSound('spin');
  }

  playStop() {
    return this.playSound('stop');
  }

  playSound(name) {
    if (!this[`${name}Buffer`]) return null;
    
    try {
      const source = this.audioContext.createBufferSource();
      source.buffer = this[`${name}Buffer`];
      source.connect(this.gainNode);
      source.start(0);
      return source;
    } catch (e) {
      console.error(`Error playing ${name} sound:`, e);
      return null;
    }
  }
}

export const audioManager = new AudioManager();
