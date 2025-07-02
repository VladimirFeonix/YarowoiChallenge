// Добавьте перед другими импортами
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js';
import { initializeApp, randomizeHeroes } from './core.js';
import { handleCardClick, handleMobileDoubleTap } from './events.js';
import { audioManager } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.option')) {
            handleCardClick(e);
        }
    });
    
    document.addEventListener('touchstart', (e) => {
        if (e.target.closest('.option')) {
            handleMobileDoubleTap(e);
        }
    });
});

window.randomizeHeroes = randomizeHeroes;