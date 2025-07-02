/**
 * Dota 2 Hero Randomizer - Audio System
 * Handles all sound effects with immediate playback
 */

class AudioManager {
  constructor() {
    this.audioContext = null;
    this.spinBuffer = null;
    this.stopBuffer = null;
    this.userInteracted = false;
    this.init();
  }

  async init() {
    // Создаем контекст сразу, но приостанавливаем
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.audioContext.suspend();

    // Предзагрузка аудио файлов
    await this.loadAudio('/sounds/spin.mp3', 'spin');
    await this.loadAudio('/sounds/stop.mp3', 'stop');

    // Разрешаем звуки после первого клика
    document.addEventListener('click', () => {
      if (!this.userInteracted) {
        this.userInteracted = true;
        this.audioContext.resume().then(() => {
          console.log('Audio context unlocked');
        });
      }
    }, { once: true });
  }

  async loadAudio(url, name) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this[`${name}Buffer`] = audioBuffer;
    } catch (e) {
      console.error(`Error loading ${name} audio:`, e);
    }
  }

  playSpin() {
    if (!this.userInteracted) {
      // Если еще не было взаимодействия, разблокируем аудио
      this.userInteracted = true;
      this.audioContext.resume();
    }

    if (this.spinBuffer) {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.spinBuffer;
      source.connect(this.audioContext.destination);
      source.start(0);
      return source;
    }
    return null;
  }

  playStop() {
    if (this.stopBuffer) {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.stopBuffer;
      source.connect(this.audioContext.destination);
      source.start(0);
      return source;
    }
    return null;
  }
}

export const audioManager = new AudioManager();