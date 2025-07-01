/**
 * Dota 2 Hero Randomizer - Constants & Configuration
 * FOR Yarowoi Challenge
 * 
 * Contains all constants, configuration values, and static data
 * Developed by CHESIRE & GRIHLADIN
 */

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

// Maximum number of heroes to remember in history to avoid repetition
export const MAX_HISTORY = 8;

// Animation delay for card shuffle effect (in milliseconds)
export const ANIMATION_DELAY = 400;

// Tap delay for mobile double-tap detection (in milliseconds)
export const TAP_DELAY = 300;

// Attribute icon URLs from Dota 2 CDN
export const ATTRIBUTE_ICONS = {
    strength: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png',
    agility: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
    intellect: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
    universal: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png'
};
