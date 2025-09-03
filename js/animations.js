import { getRandomHero } from './utils.js';
import { updateCardContent, addShuffleAnimationToButton, removeShuffleAnimationFromButton } from './ui.js';
import { audioManager } from './audio.js';

export function startSlotMachineAnimation() {
    const cards = document.querySelectorAll('.option');
    const spinDuration = 2000;
    const spinInterval = 60;
    const staggerDelay = 300;
    
    // Запускаем звук прокрутки и сохраняем ссылку на источник
    let spinSoundSource = audioManager.playSpin();
    
    cards.forEach((card, index) => {
        const attribute = card.getAttribute('data-attribute');
        let spinCount = 0;
        const maxSpins = (spinDuration + (index * staggerDelay)) / spinInterval;
        
        // Задержка для каждой карточки
        setTimeout(() => {
            card.classList.add('slot-spinning');
            
            const spinInterval_id = setInterval(() => {
                const randomHero = getRandomHero(attribute, false);
                updateCardContent(card, randomHero, attribute);
                
                spinCount++;
                
                if (spinCount >= maxSpins) {
                    clearInterval(spinInterval_id);
                    const finalHero = getRandomHero(attribute, true);
                    updateCardContent(card, finalHero, attribute);
                    
                    card.classList.remove('slot-spinning');
                    card.classList.add('slot-landing');
                    
                    // Проигрываем звук остановки с идеальной синхронизацией
                    setTimeout(() => {
                        audioManager.playStop();
                        
                        // Останавливаем звук прокрутки, если это последняя карточка
                        if (index === cards.length - 1 && spinSoundSource) {
                            spinSoundSource.stop();
                        }
                        
                        card.classList.remove('slot-landing');
                    }, 400); // Оптимальная задержка для визуально-звуковой синхронизации
                    
                    // Активируем кнопку после завершения всех анимаций
                    if (index === cards.length - 1) {
                        setTimeout(() => {
                            const button = document.querySelector('.randomize-btn');
                            button.disabled = false;
                            button.style.opacity = '1';
                            removeShuffleAnimationFromButton(button);
                        }, 300);
                    }
                }
            }, spinInterval);
        }, index * staggerDelay);
    });
    setTimeout(() => {
    if (window.challengeSystem) {
        window.challengeSystem.updateCardChallenge(card);
    }
}, 400);
}

export function startSingleSlotAnimation(card, attribute) {
    const spinDuration = 1000;
    const spinInterval = 80;
    const maxSpins = spinDuration / spinInterval;
    
    let spinCount = 0;
    
    // Запускаем звук прокрутки для одиночной карточки
    let spinSoundSource = audioManager.playSpin();
    
    card.classList.add('slot-spinning');
    
    const spinInterval_id = setInterval(() => {
        const randomHero = getRandomHero(attribute, false);
        updateCardContent(card, randomHero, attribute);
        
        spinCount++;
        
        if (spinCount >= maxSpins) {
            clearInterval(spinInterval_id);
            const finalHero = getRandomHero(attribute, true);
            updateCardContent(card, finalHero, attribute);
            
            card.classList.remove('slot-spinning');
            card.classList.add('slot-landing');
            
            setTimeout(() => {
                // Проигрываем звук остановки и останавливаем spin
                audioManager.playStop();
                if (spinSoundSource) {
                    spinSoundSource.stop();
                }
                
                card.classList.remove('slot-landing');
            }, 400);
        }
    }, spinInterval);
    setTimeout(() => {
    if (window.challengeSystem) {
        window.challengeSystem.updateCardChallenge(card);
    }
}, 400);
}