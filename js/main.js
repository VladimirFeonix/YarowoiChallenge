// Добавьте перед другими импортами
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js';
import { initializeApp, randomizeHeroes } from './core.js';
import { handleCardClick, handleMobileDoubleTap } from './events.js';
import { audioManager } from './audio.js';
import { challengeSystem } from './challenges.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();

    setTimeout(() => {
        challengeSystem.updateCardsChallenges();
    }, 1000);
    
    document.addEventListener('click', (e) => {
        // Пропускаем клики по плашке челленджа
        if (e.target.closest('.challenge-display')) {
            return;
        }
        
        if (e.target.closest('.option')) {
            handleCardClick(e);
            const card = e.target.closest('.option');
            challengeSystem.updateCardChallenge(card);
        }
    });
    
    document.addEventListener('touchstart', (e) => {
        // Пропускаем тапы по плашке челленджа
        if (e.target.closest('.challenge-display')) {
            return;
        }
        
        if (e.target.closest('.option')) {
            handleMobileDoubleTap(e);
            const card = e.target.closest('.option');
            challengeSystem.updateCardChallenge(card);
        }
    });
});

window.randomizeHeroes = randomizeHeroes;
window.challengeSystem = challengeSystem;