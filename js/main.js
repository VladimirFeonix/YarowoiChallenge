import { initializeApp, randomizeHeroes } from './core.js';
import { handleCardClick, handleMobileDoubleTap } from './events.js';
import { audioManager } from './audio.js';

// Инициализация аудио системы
audioManager;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    document.addEventListener('click', function(event) {
        if (event.target.closest('.option')) {
            handleCardClick(event);
        }
    });
    
    document.addEventListener('touchstart', function(event) {
        if (event.target.closest('.option')) {
            handleMobileDoubleTap(event);
        }
    });
});

window.randomizeHeroes = randomizeHeroes;