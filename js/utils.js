/**
 * Dota 2 Hero Randomizer - Utility Functions
 * FOR Yarowoi Challenge
 * 
 * Contains helper functions and utility methods
 * Developed by CHESIRE & GRIHLADIN
 */

import { HEROES } from './heroes.js';
import { pickedHeroHistory, updateHeroHistory } from './state.js';

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get a random hero from the specified attribute category
 * Avoids recently picked heroes (except Marci, who can appear anytime)
 * @param {string} attribute - The hero attribute (strength, agility, intellect, universal)
 * @param {boolean} updateHistory - Whether to update the pick history (default: false)
 * @returns {Object} Random hero object with name and image
 */
export function getRandomHero(attribute, updateHistory = false) {
    const heroList = HEROES[attribute];
    
    // Filter out recently picked heroes, but always allow Marci
    const recentPicks = pickedHeroHistory[attribute];
    let availableHeroes = heroList.filter(hero => 
        !recentPicks.includes(hero.name)
    );
    
    // Use full list if all heroes were recently picked, but clear history
    if (availableHeroes.length === 0) {
        // Reset history when all heroes have been picked
        pickedHeroHistory[attribute] = [];
        availableHeroes = heroList;
    }

    let finalHero;
    const otherHeroes = availableHeroes.filter(h => h.name !== 'Marci');
    if (otherHeroes.length > 0) {
        finalHero = otherHeroes[Math.floor(Math.random() * otherHeroes.length)];
    } else {
        finalHero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];
    }
    
    // Only update history when explicitly requested (for final selections)
    if (updateHistory) {
        updateHeroHistory(attribute, finalHero.name);
    }
    
    return finalHero;
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
