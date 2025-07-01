/**
 * Dota 2 Hero Randomizer - Event Handlers
 * FOR Yarowoi Challenge
 * 
 * Handles user interactions and events
 * Developed by CHESIRE & GRIHLADIN
 */

import { TAP_DELAY } from './constants.js';
import { lastTap, setLastTap } from './state.js';
import { startSingleSlotAnimation } from './animations.js';

// =============================================================================
// EVENT HANDLERS
// =============================================================================

/**
 * Handle individual card click events
 * @param {Event} event - The click event
 */
export function handleCardClick(event) {
    const card = event.target.closest('.option');
    if (card) {
        rerollSingleHero(card);
    }
}

/**
 * Handle mobile double-tap events
 * @param {Event} event - The touch event
 */
export function handleMobileDoubleTap(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < TAP_DELAY && tapLength > 0) {
        event.preventDefault();
        const card = event.target.closest('.option');
        if (card) {
            rerollSingleHero(card);
        }
    }
    
    setLastTap(currentTime);
}

/**
 * Reroll a single hero card with slot machine animation
 * @param {HTMLElement} card - The card element to reroll
 */
function rerollSingleHero(card) {
    const attribute = card.getAttribute('data-attribute');
    
    // Prevent multiple clicks during animation
    if (card.classList.contains('slot-spinning')) {
        return;
    }
    
    startSingleSlotAnimation(card, attribute);
}
