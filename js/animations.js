/**
 * Dota 2 Hero Randomizer - Animation System
 * FOR Yarowoi Challenge
 * 
 * Handles all animations including slot machine effects
 * Developed by CHESIRE & GRIHLADIN
 */

import { getRandomHero } from './utils.js';
import { updateCardContent, addShuffleAnimationToButton, removeShuffleAnimationFromButton } from './ui.js';

// =============================================================================
// ANIMATION FUNCTIONS
// =============================================================================

/**
 * Start the slot machine animation for all cards
 */
export function startSlotMachineAnimation() {
    const cards = document.querySelectorAll('.option');
    const spinDuration = 2000; // 2 seconds of spinning
    const spinInterval = 100; // Change hero every 100ms
    const staggerDelay = 300; // Delay between cards stopping
    
    cards.forEach((card, index) => {
        const attribute = card.getAttribute('data-attribute');
        let spinCount = 0;
        const maxSpins = (spinDuration + (index * staggerDelay)) / spinInterval;
        
        // Add spinning class for visual effects
        card.classList.add('slot-spinning');
        
        const spinInterval_id = setInterval(() => {
            // Get a random hero for this attribute (don't update history during animation)
            const randomHero = getRandomHero(attribute, false);
            updateCardContent(card, randomHero, attribute);
            
            spinCount++;
            
            // Stop spinning for this card when its time is up
            if (spinCount >= maxSpins) {
                clearInterval(spinInterval_id);
                
                // Final hero selection (update history this time)
                const finalHero = getRandomHero(attribute, true);
                updateCardContent(card, finalHero, attribute);
                
                // Remove spinning class and add landing animation
                card.classList.remove('slot-spinning');
                card.classList.add('slot-landing');
                
                // Remove landing animation after it completes
                setTimeout(() => {
                    card.classList.remove('slot-landing');
                }, 500);
                
                // If this is the last card, enable the button again
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
    });
}

/**
 * Start slot machine animation for a single card
 * @param {HTMLElement} card - The card element to animate
 * @param {string} attribute - Hero attribute type
 */
export function startSingleSlotAnimation(card, attribute) {
    const spinDuration = 1000; // 1 second for single card (shorter than full randomize)
    const spinInterval = 80; // Slightly faster spinning for single card
    const maxSpins = spinDuration / spinInterval;
    
    let spinCount = 0;
    
    // Add spinning class for visual effects
    card.classList.add('slot-spinning');
    
    const spinInterval_id = setInterval(() => {
        // Get a random hero for this attribute (don't update history during animation)
        const randomHero = getRandomHero(attribute, false);
        updateCardContent(card, randomHero, attribute);
        
        spinCount++;
        
        // Stop spinning when time is up
        if (spinCount >= maxSpins) {
            clearInterval(spinInterval_id);
            
            // Final hero selection (update history this time)
            const finalHero = getRandomHero(attribute, true);
            updateCardContent(card, finalHero, attribute);
            
            // Remove spinning class and add landing animation
            card.classList.remove('slot-spinning');
            card.classList.add('slot-landing');
            
            // Remove landing animation after it completes
            setTimeout(() => {
                card.classList.remove('slot-landing');
            }, 500);
        }
    }, spinInterval);
}
