/**
 * Dota 2 Hero Randomizer
 * FOR Yarowoi Challenge
 * 
 * A web application for randomizing Dota 2 heroes by attribute
 * Developed by CHESIRE & GRIHLADIN
 */

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

// Maximum number of heroes to remember in history to avoid repetition
const MAX_HISTORY = 8;

// Animation delay for card shuffle effect (in milliseconds)
const ANIMATION_DELAY = 400;

// Tap delay for mobile double-tap detection (in milliseconds)
const TAP_DELAY = 300;

// Attribute icon URLs from Dota 2 CDN
const ATTRIBUTE_ICONS = {
    strength: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png',
    agility: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
    intellect: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
    universal: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png'
};

// =============================================================================
// HERO DATA
// =============================================================================

// Complete Dota 2 heroes database with image URLs
const HEROES = {
    strength: [
        { name: "Alchemist", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png" },
        { name: "Axe", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png" },
        { name: "Bristleback", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png" },
        { name: "Centaur Warrunner", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png" },
        { name: "Chaos Knight", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png" },
        { name: "Clockwerk", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png" },
        { name: "Dawnbreaker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png" },
        { name: "Doom", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png" },
        { name: "Dragon Knight", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png" },
        { name: "Earth Spirit", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png" },
        { name: "Earthshaker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png" },
        { name: "Elder Titan", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png" },
        { name: "Huskar", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png" },
        { name: "Kunkka", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png" },
        { name: "Legion Commander", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png" },
        { name: "Lifestealer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png" },
        { name: "Lycan", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png" },
        { name: "Mars", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png" },
        { name: "Night Stalker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png" },
        { name: "Ogre Magi", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png" },
        { name: "Omniknight", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png" },
        { name: "Phoenix", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png" },
        { name: "Primal Beast", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png" },
        { name: "Pudge", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png" },
        { name: "Slardar", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png" },
        { name: "Spirit Breaker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png" },
        { name: "Sven", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png" },
        { name: "Tidehunter", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png" },
        { name: "Timbersaw", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png" },
        { name: "Tiny", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png" },
        { name: "Treant Protector", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png" },
        { name: "Tusk", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png" },
        { name: "Underlord", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png" },
        { name: "Undying", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png" },
        { name: "Wraith King", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png" }
    ],
    agility: [
        { name: "Anti-Mage", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png" },
        { name: "Bloodseeker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png" },
        { name: "Bounty Hunter", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png" },
        { name: "Broodmother", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png" },
        { name: "Clinkz", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png" },
        { name: "Drow Ranger", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png" },
        { name: "Ember Spirit", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png" },
        { name: "Faceless Void", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png" },
        { name: "Gyrocopter", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png" },
        { name: "Hoodwink", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png" },
        { name: "Juggernaut", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png" },
        { name: "Kez", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png" },
        { name: "Lone Druid", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png" },
        { name: "Luna", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png" },
        { name: "Medusa", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png" },
        { name: "Meepo", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png" },
        { name: "Mirana", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png" },
        { name: "Monkey King", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png" },
        { name: "Morphling", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png" },
        { name: "Naga Siren", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png" },
        { name: "Phantom Assassin", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png" },
        { name: "Phantom Lancer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png" },
        { name: "Razor", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png" },
        { name: "Riki", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png" },
        { name: "Shadow Fiend", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png" },
        { name: "Slark", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png" },
        { name: "Sniper", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png" },
        { name: "Templar Assassin", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png" },
        { name: "Terrorblade", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png" },
        { name: "Troll Warlord", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png" },
        { name: "Ursa", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png" },
        { name: "Vengeful Spirit", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png" },
        { name: "Viper", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png" },
        { name: "Weaver", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png" },
    ],
    intellect: [
        { name: "Ancient Apparition", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png" },
        { name: "Chen", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png" },
        { name: "Crystal Maiden", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png" },
        { name: "Dark Seer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png" },
        { name: "Dark Willow", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png" },
        { name: "Disruptor", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png" },
        { name: "Enchantress", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png" },
        { name: "Grimstroke", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png" },
        { name: "Invoker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png" },
        { name: "Jakiro", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png" },
        { name: "Keeper of the Light", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png" },
        { name: "Leshrac", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png" },
        { name: "Lich", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png" },
        { name: "Lina", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png" },
        { name: "Lion", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png" },
        { name: "Muerta", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png" },
        { name: "Necrophos", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png" },
        { name: "Oracle", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png" },
        { name: "Outworld Destroyer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png" },
        { name: "Puck", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png" },
        { name: "Pugna", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png" },
        { name: "Queen of Pain", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png" },
        { name: "Ringmaster", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png" },
        { name: "Rubick", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png" },
        { name: "Shadow Demon", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png" },
        { name: "Shadow Shaman", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png" },
        { name: "Silencer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png" },
        { name: "Skywrath Mage", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png" },
        { name: "Storm Spirit", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png" },
        { name: "Tinker", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png" },
        { name: "Warlock", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png" },
        { name: "Winter Wyvern", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png" },
        { name: "Witch Doctor", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png" },
        { name: "Zeus", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png" }
    ],
    universal: [
        { name: "Abaddon", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png" },
        { name: "Brewmaster", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png" },
        { name: "Io", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png" },
        { name: "Magnus", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png" },
        { name: "Arc Warden", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png" },
        { name: "Bane", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png" },
        { name: "Batrider", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png" },
        { name: "Dazzle", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png" },
        { name: "Death Prophet", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png" },
        { name: "Enigma", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png" },
        { name: "Magnus", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png" },
        { name: "Marci", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png" },
        { name: "Nature's Prophet", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png" },
        { name: "Nyx Assassin", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png" },
        { name: "Pangolier", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png" },
        { name: "Sand King", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png" },
        { name: "Snapfire", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png" },
        { name: "Spectre", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png" },
        { name: "Techies", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png" },
        { name: "Venomancer", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png" },
        { name: "Visage", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png" },
        { name: "Void Spirit", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png" },
        { name: "Windranger", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png" },
        { name: "Beastmaster", image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png" },
    ]
};

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

// Track recently picked heroes to avoid repetition
const pickedHeroHistory = {
    strength: [],
    agility: [],
    intellect: [],
    universal: []
};

// Flag to track animation completion status
let isAnimationComplete = true;

// Mobile touch tracking for double-tap detection
let lastTap = 0;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get a random hero from the specified attribute category
 * Avoids recently picked heroes
 * @param {string} attribute - The hero attribute (strength, agility, intellect, universal)
 * @returns {Object} Random hero object with name and image
 */
function getRandomHero(attribute) {
    const heroList = HEROES[attribute];
    
    // Filter out recently picked heroes
    const recentPicks = pickedHeroHistory[attribute];
    const availableHeroes = heroList.filter(hero => 
        !recentPicks.includes(hero.name)
    );
    
    // Use full list if all heroes were recently picked
    const sourceList = availableHeroes.length > 0 ? availableHeroes : heroList;
    const randomHero = sourceList[Math.floor(Math.random() * sourceList.length)];
    
    // Update history
    updateHeroHistory(attribute, randomHero.name);
    
    return randomHero;
}

/**
 * Update the hero selection history for an attribute
 * @param {string} attribute - The hero attribute
 * @param {string} heroName - The name of the selected hero
 */
function updateHeroHistory(attribute, heroName) {
    pickedHeroHistory[attribute].push(heroName);
    
    // Maintain history size limit
    if (pickedHeroHistory[attribute].length > MAX_HISTORY) {
        pickedHeroHistory[attribute].shift();
    }
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// =============================================================================
// DOM MANIPULATION FUNCTIONS
// =============================================================================

/**
 * Create a hero card element with all necessary components
 * @param {string} attribute - The hero attribute type
 * @returns {HTMLElement} Complete hero card element
 */
function createHeroCard(attribute) {
    const hero = getRandomHero(attribute);
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
        <div class="label">
            <div class="info">
                <div class="main">${hero.name}</div>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Add shuffle animation to existing cards
 * @param {NodeList} cards - List of card elements to animate
 */
function addShuffleAnimationToCards(cards) {
    cards.forEach(card => {
        card.classList.add('cards-shuffle-animation');
    });
}

/**
 * Add shuffle animation to the randomize button
 * @param {HTMLElement} button - The button element to animate
 */
function addShuffleAnimationToButton(button) {
    if (button) {
        button.classList.add('shuffle-animation');
    }
}

/**
 * Remove shuffle animation from the randomize button
 * @param {HTMLElement} button - The button element
 */
function removeShuffleAnimationFromButton(button) {
    if (button) {
        button.classList.remove('shuffle-animation');
    }
}

/**
 * Start the slot machine animation for all cards
 */
function startSlotMachineAnimation() {
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
            // Get a random hero for this attribute
            const randomHero = getRandomHero(attribute);
            updateCardContent(card, randomHero, attribute);
            
            spinCount++;
            
            // Stop spinning for this card when its time is up
            if (spinCount >= maxSpins) {
                clearInterval(spinInterval_id);
                
                // Final hero selection (ensure it's different from previous)
                const finalHero = getRandomHero(attribute);
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
 * Update card content with new hero
 * @param {HTMLElement} card - The card element to update
 * @param {Object} hero - Hero object with name and image
 * @param {string} attribute - Hero attribute type
 */
function updateCardContent(card, hero, attribute) {
    const heroImg = card.querySelector('.hero-image');
    const heroName = card.querySelector('.main');
    
    if (heroImg && heroName) {
        heroImg.src = hero.image;
        heroImg.alt = hero.name;
        heroName.textContent = hero.name;
    }
}

/**
 * Start slot machine animation for a single card
 * @param {HTMLElement} card - The card element to animate
 * @param {string} attribute - Hero attribute type
 */
function startSingleSlotAnimation(card, attribute) {
    const spinDuration = 1000; // 1 second for single card (shorter than full randomize)
    const spinInterval = 80; // Slightly faster spinning for single card
    const maxSpins = spinDuration / spinInterval;
    
    let spinCount = 0;
    
    // Add spinning class for visual effects
    card.classList.add('slot-spinning');
    
    const spinInterval_id = setInterval(() => {
        // Get a random hero for this attribute
        const randomHero = getRandomHero(attribute);
        updateCardContent(card, randomHero, attribute);
        
        spinCount++;
        
        // Stop spinning when time is up
        if (spinCount >= maxSpins) {
            clearInterval(spinInterval_id);
            
            // Final hero selection
            const finalHero = getRandomHero(attribute);
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

// =============================================================================
// CORE FUNCTIONALITY
// =============================================================================

/**
 * Main function to randomize all hero cards with slot machine animation
 * Includes casino-style spinning effects and proper timing
 */
function randomizeHeroes() {
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
function initializeApp() {
    const container = document.getElementById('heroContainer');
    const button = document.querySelector('.randomize-btn');
    
    // Add shuffle animation for initial load
    addShuffleAnimationToButton(button);
    
    container.innerHTML = '';
    isAnimationComplete = true;
    
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

// =============================================================================
// EVENT HANDLERS
// =============================================================================

/**
 * Handle individual card click events
 * @param {Event} event - The click event
 */
function handleCardClick(event) {
    const card = event.currentTarget;
    rerollSingleHero(card);
}

/**
 * Handle mobile double-tap events
 * @param {Event} event - The touch event
 */
function handleMobileDoubleTap(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < TAP_DELAY && tapLength > 0) {
        event.preventDefault();
        rerollSingleHero(event.currentTarget);
    }
    
    lastTap = currentTime;
}

// =============================================================================
// APPLICATION INITIALIZATION
// =============================================================================

/**
 * Initialize the application when DOM is ready
 */
$(document).ready(function() {
    // Initialize the app
    initializeApp();
    
    // Set up event listeners
    $(document).on('click', '.option', handleCardClick);
    $(document).on('touchstart', '.option', handleMobileDoubleTap);
});
