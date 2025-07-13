/**
 * Dota 2 Hero Randomizer - State Management
 * FOR Yarowoi Challenge
 * 
 * Manages application state and hero selection history
 * Developed by CHESIRE & GRIHLADIN
 */

import { MAX_HISTORY } from './constants.js';

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

// Track recently picked heroes to avoid repetition
export const pickedHeroHistory = {
    strength: [],
    agility: [],
    intellect: [],
    universal: []
};

// Flag to track animation completion status
export let isAnimationComplete = true;

// Mobile touch tracking for double-tap detection
export let lastTap = 0;

/**
 * Update the hero selection history for an attribute
 * @param {string} attribute - The hero attribute
 * @param {string} heroName - The name of the selected hero
 */
export function updateHeroHistory(attribute, heroName) {
        
    // Add hero to history
    pickedHeroHistory[attribute].push(heroName);
    // Maintain history size limit
    if (pickedHeroHistory[attribute].length > MAX_HISTORY) {
        pickedHeroHistory[attribute].shift();
    }
    }

/**
 * Set the animation completion status
 * @param {boolean} status - Animation completion status
 */
export function setAnimationComplete(status) {
    isAnimationComplete = status;
}

/**
 * Set the last tap time for mobile double-tap detection
 * @param {number} time - Timestamp of the last tap
 */
export function setLastTap(time) {
    lastTap = time;
}
