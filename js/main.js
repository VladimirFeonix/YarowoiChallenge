/**
 * Dota 2 Hero Randomizer - Main Application
 * FOR Yarowoi Challenge
 * 
 * Main entry point that coordinates all modules
 * Developed by CHESIRE & GRIHLADIN
 */

import { initializeApp, randomizeHeroes } from './core.js';
import { handleCardClick, handleMobileDoubleTap } from './events.js';

// =============================================================================
// MAIN APPLICATION
// =============================================================================

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initializeApp();
    
    // Set up event listeners using event delegation
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

// Make randomizeHeroes available globally for the HTML button onclick
window.randomizeHeroes = randomizeHeroes;
