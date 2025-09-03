// Добавьте перед другими импортами
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js';
import { initializeApp, randomizeHeroes } from './core.js';
import { handleCardClick, handleMobileDoubleTap } from './events.js';
import { audioManager } from './audio.js';
import { challengeSystem } from './challenges.js';

// Ждем полной загрузки DOM и всех ресурсов
window.addEventListener('load', () => {
    initializeApp();

    // Даем время для полной инициализации перед показом челленджей
    setTimeout(() => {
        if (window.challengeSystem) {
            window.challengeSystem.updateCardsChallenges();
        }
    }, 1500);
});

// Обработчики событий - только после полной загрузки
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        // Пропускаем клики по плашке челленджа
        if (e.target.closest('.challenge-display')) {
            return;
        }
        
        if (e.target.closest('.option')) {
            handleCardClick(e);
            const card = e.target.closest('.option');
            if (window.challengeSystem) {
                window.challengeSystem.updateCardChallenge(card);
            }
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
            if (window.challengeSystem) {
                window.challengeSystem.updateCardChallenge(card);
            }
        }
    });
});

// Глобальные функции
window.randomizeHeroes = randomizeHeroes;
window.challengeSystem = challengeSystem;