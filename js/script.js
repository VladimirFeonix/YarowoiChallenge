// Dota 2 heroes data with image URLs - complete list
const heroes = {
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

const attributeIcons = {
    strength: "fa-dumbbell",
    agility: "fa-bolt",
    intellect: "fa-brain",
    universal: "fa-star"
};

// Храним историю последних выбранных героев
const pickedHeroHistory = {
    strength: [],
    agility: [],
    intellect: [],
    universal: []
};
const MAX_HISTORY = 10; // Сколько последних героев запоминать для каждого атрибута

function getRandomHero(attribute) {
    const heroList = heroes[attribute];
    
    // Фильтруем героев, исключая тех, что были недавно выбраны
    const recentPicks = pickedHeroHistory[attribute];
    const availableHeroes = heroList.filter(hero => 
        !recentPicks.includes(hero.name)
    );
    
    // Если все герои были недавно выбраны, используем полный список
    const sourceList = availableHeroes.length > 0 ? availableHeroes : heroList;
    
    // Выбираем случайного героя
    const randomHero = sourceList[Math.floor(Math.random() * sourceList.length)];
    
    // Добавляем выбранного героя в историю
    pickedHeroHistory[attribute].push(randomHero.name);
    if (pickedHeroHistory[attribute].length > MAX_HISTORY) {
        pickedHeroHistory[attribute].shift(); // Удаляем самый старый выбор
    }
    
    return randomHero;
}

// Остальной код остается без изменений
function createHeroCard(attribute) {
    const hero = getRandomHero(attribute);
    return `
        <div class="option ${attribute}" style="background-image: url('${hero.image}')" 
             data-attribute="${attribute}">
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas ${attributeIcons[attribute]}"></i>
                </div>
                <div class="info">
                    <div class="main">${hero.name}</div>
                    <div class="sub">${attribute.charAt(0).toUpperCase() + attribute.slice(1)}</div>
                </div>
            </div>
        </div>
    `;
}

function randomizeTeam() {
    const container = document.getElementById('heroContainer');
    container.innerHTML = '';
    
    // Create one hero card for each attribute
    const attributes = ['strength', 'agility', 'intellect', 'universal'];
    attributes.forEach(attr => {
        container.innerHTML += createHeroCard(attr);
    });
    
    // Activate the first card
    setTimeout(() => {
        const firstCard = container.querySelector('.option');
        if (firstCard) {
            firstCard.classList.add('active');
        }
    }, 100);
}

// Initialize on load
$(document).ready(function() {
    randomizeTeam();
    
    // Click handler for cards - only for activation, not reroll
    $(document).on('click', '.option', function() {
        $('.option').removeClass('active');
        $(this).addClass('active');
    });
});
