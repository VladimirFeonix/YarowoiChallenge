/**
 * Dota 2 Hero Randomizer - Core Functions
 * FOR Yarowoi Challenge
 * 
 * Main application logic and core functionality
 * Developed by CHESIRE & GRIHLADIN
 */

import { setAnimationComplete } from './state.js';
import { createHeroCard, addShuffleAnimationToButton, removeShuffleAnimationFromButton } from './ui.js';
import { startSlotMachineAnimation } from './animations.js';

// =============================================================================
// CORE FUNCTIONALITY
// =============================================================================

/**
 * Main function to randomize all hero cards with slot machine animation
 * Includes casino-style spinning effects and proper timing
 */
export function randomizeHeroes() {
    const container = document.getElementById('heroContainer');
    const button = document.querySelector('.randomize-btn');
    
    // Disable button during animation
    button.disabled = true;
    button.style.opacity = '0.6';
    
    // Start button animation
    addShuffleAnimationToButton(button);
    
    const existingCards = container.querySelectorAll('.option');
    
    // If no cards exist, create initial cards
    if (existingCards.length === 0) {
        container.innerHTML = '';
        const attributes = ['strength', 'agility', 'intellect', 'universal'];
        attributes.forEach(attr => {
            container.appendChild(createHeroCard(attr));
        });
    }
    
    // Start slot machine animation on existing cards
    startSlotMachineAnimation();
}

/**
 * Initialize the application with initial hero cards
 */
export function initializeApp() {
    const container = document.getElementById('heroContainer');
    const button = document.querySelector('.randomize-btn');
    
    // Add shuffle animation for initial load
    addShuffleAnimationToButton(button);
    
    container.innerHTML = '';
    setAnimationComplete(true);
    
    // Create initial cards
    const attributes = ['strength', 'agility', 'intellect', 'universal'];
    attributes.forEach(attr => {
        container.appendChild(createHeroCard(attr));
    });
    
    // Clean up animation after delay
    setTimeout(() => {
        removeShuffleAnimationFromButton(button);
    }, 600);
}
