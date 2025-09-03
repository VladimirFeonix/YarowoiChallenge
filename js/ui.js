/**
 * Dota 2 Hero Randomizer - DOM Manipulation & UI
 * FOR Yarowoi Challenge
 * 
 * Handles all DOM manipulation, card creation, and UI updates
 * Developed by CHESIRE & GRIHLADIN
 */

import { ATTRIBUTE_ICONS } from './constants.js';
import { getRandomHero, capitalizeFirst } from './utils.js';

// =============================================================================
// DOM MANIPULATION FUNCTIONS
// =============================================================================

/**
 * Create a hero card element with all necessary components
 * @param {string} attribute - The hero attribute type
 * @returns {HTMLElement} Complete hero card element
 */
export function createHeroCard(attribute) {
    const hero = getRandomHero(attribute, true); // Update history for initial cards
    const card = document.createElement('div');
    
    card.className = `option ${attribute}`;
    card.setAttribute('data-attribute', attribute);
    
    card.innerHTML = `
        <img src="${hero.image}" class="hero-image" alt="${hero.name}">
        <div class="shadow"></div>
        <div class="attribute-info">
            <img src="${ATTRIBUTE_ICONS[attribute]}" class="attribute-icon" 
                 alt="${attribute}" title="${capitalizeFirst(attribute)}">
            <div class="attribute-name">${capitalizeFirst(attribute)}</div>
        </div>
        <div class="challenge-display"></div>
        <div class="label">
            <div class="info">
                <div class="main">${hero.name}</div>
            </div>
        </div>
    `;

        // Обновляем челлендж при создании карточки
    if (window.challengeSystem) {
        window.challengeSystem.updateCardChallenge(card);
    }
    
    // Handle special effect for Marci
    handleMarciSpecialEffect(card, hero.name);
    
    return card;
}

/**
 * Add shuffle animation to existing cards
 * @param {NodeList} cards - List of card elements to animate
 */
export function addShuffleAnimationToCards(cards) {
    cards.forEach(card => {
        card.classList.add('cards-shuffle-animation');
    });
}

/**
 * Add shuffle animation to the randomize button
 * @param {HTMLElement} button - The button element to animate
 */
export function addShuffleAnimationToButton(button) {
    if (button) {
        button.classList.add('shuffle-animation');
    }
}

/**
 * Remove shuffle animation from the randomize button
 * @param {HTMLElement} button - The button element
 */
export function removeShuffleAnimationFromButton(button) {
    if (button) {
        button.classList.remove('shuffle-animation');
    }
}

/**
 * Update card content with new hero
 * @param {HTMLElement} card - The card element to update
 * @param {Object} hero - Hero object with name and image
 * @param {string} attribute - Hero attribute type
 */
export function updateCardContent(card, hero, attribute) {
    const heroImg = card.querySelector('.hero-image');
    const heroName = card.querySelector('.main');
    
    if (heroImg && heroName) {
        heroImg.src = hero.image;
        heroImg.alt = hero.name;
        heroName.textContent = hero.name;

        // Обновляем челлендж для карточки
        if (window.challengeSystem) {
            window.challengeSystem.updateCardChallenge(card);
        }
        
        // Special effect for Marci
        handleMarciSpecialEffect(card, hero.name);
    }
}

/**
 * Handle special visual effect for Marci
 * @param {HTMLElement} card - The card element
 * @param {string} heroName - Name of the hero
 */
export function handleMarciSpecialEffect(card, heroName) {
    // Remove any existing special effects
    card.classList.remove('marci-selected');
    const existingChooseMe = card.querySelector('.marci-choose-me');
    if (existingChooseMe) {
        existingChooseMe.remove();
    }

    // Add special effect if hero is Marci, Batrider, Riki, or Leshrac
    const specialHeroes = ['Marci', 'Batrider', 'Riki', 'Leshrac'];
    if (specialHeroes.includes(heroName)) {
        card.classList.add('marci-selected');
        // Create and add the pulsing "CHOOSE ME" element
        const chooseMeElement = document.createElement('div');
        chooseMeElement.className = 'marci-choose-me';
        chooseMeElement.textContent = 'CHOOSE ME';
        card.appendChild(chooseMeElement);
    }
}

