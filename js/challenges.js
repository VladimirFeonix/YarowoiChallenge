// База челленджей для всех героев Dota 2
export const heroChallenges = {
    // Универсальные челленджи для любого героя
    'default': [
        '0 смертей за игру',
        'Не использовать ультимейт',
        'Только предметы поддержки',
        '15 ассистов до 15 мин',
        'Не умирать до 20 мин',
        'Предметы только до 2000 золота',
        'Положительный KDA',
        'Снять все Tier 1 до 20 мин',
        'Снять 5 обсерверов до 20 мин',
        'Не фармить первые 5 мин',
        'Рапира первым предметом',
        '5000 золота союзникам',
        'Убить Рошана соло',
        'Не использовать ТП до 10 мин',
        '80% участие в убийствах',
        '6 сапогов до конца игры',
        'Не апгрейдить скиллы после 6 ур',
        'Не покупать варды всю игру'
    ],

    // Специфические челленджи по героям
    'Pudge': ['10 крюков подряд', 'Убить Рошана крюком', 'Съесть 20 героев'],
    'Invoker': ['Применить 10 разных спеллов подряд', 'Убить 3 героев Cold Snap', 'Усилить 5 союзников Alacrity'],
    'Tinker': ['Совершить 50 телепортов', 'Убить 10 героев Laserом', 'Не использовать Rearm в 3 ключевых боях'],
    'Meepo': ['Ни один мипо не умрет', 'Одновременно удержать 5 героев в сетях', 'Добить курьера одним мипо'],
    'Chen': ['Убить героя нейтральным крипом', 'Телепортировать 5 союзников под атакой', 'Контролировать 5 разных нейтралов одновременно'],
    'Earth Spirit': ['Закатить в камни 10 героев', 'Совершить дабл-килл ультимейтом', 'Спасти союзника, вытолкнув врага'],
    'Oracle': ['Спасти 10 раз союзника ультимейтом', 'Снять 15 баффов с врагов Fortune\'s End', 'Исцелить 5000 HP ультимейтом'],
    'Io': ['Совершить 20 телепортов с союзником', 'Исцелить союзников на 10000 HP', 'Спасти союзника телепортом из боя'],
    'Techies': ['Установить 50 мин', 'Совершить 5 убийств на Proximity Mines', 'Убить 3+ героев одним залпом Remote Mines'],
    'Rubick': ['Украсть и использовать 10 разных спеллов', 'Совершить убийство украденным ультимейтом', 'Совершить дабл-килл украденным заклинанием'],
    'Anti-Mage': ['Сжечь 5000 маны', 'Совершить 3 убийства без использования Ult', 'Убить 1000 крипов'],
    'Storm Spirit': ['Пролететь 10000 единиц за одну активацию Ult', 'Убить героя сквозь BKB', 'Удержать 5 героев в Electric Vortex'],
    'Ember Spirit': ['Вернуться к remnant\'у 10 раз для сейва', 'Совершить 3 убийства одним Slight of Fist', 'Уйти в remnant от убийственного урона'],
    'Earthshaker': ['Поймать 5 героев в Fissure', 'Нанести урон 3+ героям ультимейтом', 'Убить курьера Fissure'],
    'Mirana': ['Попасть 10 раз Sacred Arrow', 'Оглушить героя на 5 секунд стрелой', 'Убить 2 героев одной Starstorm'],
    'Windranger': ['Не промахнуться ни разу Shackleshot', 'Убить героя одним Powershot', 'Продержать Focus Fire на герое 10 секунд подряд'],
    'Snier': ['Нанести 10000 урона из-за границы видимости', 'Получить 15 киллов с Assassinate', 'Ни разу не быть убитым в ближнем бою'],
    'Axe': ['Вызвать у 10 героев Culling Blade', 'Поймать в Call 3+ героев', 'Снять 80% хп ультой с одного врага'],
    'Juggernaut': ['Убить Рошана с Omnislash', 'Избежать 5 спеллов с Blade Fury', 'Нанести 5000 урона одним Blade Fury'],
    'Crystal Maiden': ['Зафризить 15 героев', 'Задать 10 рун', 'Убить курьера Frostbite'],
    'Lina': ['Накопить 10 стаков пассивки', 'Убить 3 героев Laguna Blade', 'Не промахнуться ни разу Light Strike Array'],
    'Shadow Fiend': ['Собрать 40 душ', 'Сделать 5 дабл-киллов Raze', 'Добить 5 героев Raze'],
    'Naga Siren': ['Усыпить 5 героев Song of the Siren 3 раза', 'Сделать 10 иллюзий для фарма', 'Снести 3 Tier 3 башни иллюзиями'],
    'Phoenix': ['Прожить в яйце 5 секунд под фокусом', 'Исцелить союзников на 4000 HP', 'Убить 2 героев одним Sun Ray'],
    'Dark Willow': ['Оглушить 3 героев одним использованием Crown', 'Убить 2 героев одним Bedlam', 'Совершить килл с Shadow Realm'],
    'Grimstroke': ['Связать 8 героев Stroke of Fate', 'Нанести 3000 урона ультимейтом', 'Сделать дабл-килл Soulbind'],
    'Mars': ['Поймать в арену 10 героев', 'Убить 3 героев Spear of Mars', 'Избежать 5 спеллов с Bulwark'],
    'Void Spirit': ['Уйти в Dissimilate от 5 убийственных спеллов', 'Вывести из боя 3 героев Resonant Pulse', 'Совершить 3 килла Astral Step'],
    'Snapfire': ['Выпустить 20 зарядов Cookie', 'Нанести 4000 урона Mortimer Kisses', 'Замедлить 15 героев Scatterblast']
};

// Система истории челленджей для предотвращения повторений
class ChallengeHistory {
    constructor() {
        this.history = new Map();
        this.historySize = 2; // Храним историю для последних 2 круток
    }

    // Добавить челлендж в историю для героя
    addChallenge(heroName, challenge) {
        if (!this.history.has(heroName)) {
            this.history.set(heroName, []);
        }
        
        const heroHistory = this.history.get(heroName);
        heroHistory.push(challenge);
        
        // Ограничиваем размер истории
        if (heroHistory.length > this.historySize) {
            heroHistory.shift();
        }
    }

    // Проверить, был ли челлендж недавно использован
    hasChallenge(heroName, challenge) {
        if (!this.history.has(heroName)) return false;
        return this.history.get(heroName).includes(challenge);
    }

    // Очистить историю для героя
    clearHeroHistory(heroName) {
        this.history.delete(heroName);
    }

    // Очистить всю историю
    clearAllHistory() {
        this.history.clear();
    }
}

// Функция для получения случайного челленджа для героя без повторений
export function getRandomChallenge(heroName, challengeHistory) {
    const heroKey = heroName.toLowerCase();
    let availableChallenges = [];
    
    // Ищем специфические челленджи для героя
    for (const [key, challenges] of Object.entries(heroChallenges)) {
        if (key.toLowerCase() === heroKey) {
            availableChallenges = [...challenges];
            break;
        }
    }
    
    // Если нет специфических, берем из универсальных
    if (availableChallenges.length === 0) {
        availableChallenges = [...heroChallenges.default];
    }
    
    // Фильтруем челленджи, которые не использовались в последних 2 крутках
    const filteredChallenges = availableChallenges.filter(challenge => 
        !challengeHistory.hasChallenge(heroName, challenge)
    );
    
    // Если все челленджи были использованы, очищаем историю и используем все доступные
    if (filteredChallenges.length === 0) {
        challengeHistory.clearHeroHistory(heroName);
        return availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
    }
    
    // Выбираем случайный челлендж из отфильтрованных
    const randomChallenge = filteredChallenges[Math.floor(Math.random() * filteredChallenges.length)];
    
    // Добавляем выбранный челлендж в историю
    challengeHistory.addChallenge(heroName, randomChallenge);
    
    return randomChallenge;
}

// Система управления челленджами
export class ChallengeSystem {
    constructor() {
        if (window.challengeSystemInstance) {
            return window.challengeSystemInstance;
        }
        
        this.enabled = true;
        this.challengeHistory = new ChallengeHistory();
        this.init();
        
        window.challengeSystemInstance = this;
    }

    init() {
        this.createButton();
        this.bindEvents();
        this.setupCardReroll();
    }

    createButton() {
        // Кнопка уже есть в HTML, просто биндим события
        const button = document.getElementById('updateChallengesBtn');
        if (button) {
            button.addEventListener('click', () => {
                this.updateAllChallenges();
                this.animateButton(button);
            });
        }
    }

    bindEvents() {
        // Автоматически показываем челленджи при загрузке
        setTimeout(() => {
            this.updateCardsChallenges();
        }, 100);
    }

    setupCardReroll() {
        // Делегирование событий для реролла челленджей
        document.addEventListener('click', (e) => {
            const challengeDisplay = e.target.closest('.challenge-display');
            if (challengeDisplay) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                const card = challengeDisplay.closest('.option');
                if (card) {
                    this.rerollCardChallenge(card);
                }
            }
        });

        // Для мобильных устройств
        document.addEventListener('touchstart', (e) => {
            const challengeDisplay = e.target.closest('.challenge-display');
            if (challengeDisplay) {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                const card = challengeDisplay.closest('.option');
                if (card) {
                    this.rerollCardChallenge(card);
                }
            }
        }, { passive: false });
    }

    getChallenge(heroName) {
        if (!this.enabled) return null;
        return getRandomChallenge(heroName, this.challengeHistory);
    }

// Реролл челленджа для конкретной карточки
rerollCardChallenge(card) {
    // Проверяем, не идет ли уже анимация смены героя
    if (card.classList.contains('slot-spinning') || card.classList.contains('slot-landing')) {
        return;
    }
    
    const heroName = card.querySelector('.main')?.textContent?.trim();
    if (!heroName) return;

    const challengeDisplay = card.querySelector('.challenge-display');
    if (!challengeDisplay) return;

    // Удаляем текущий челлендж из истории ДО получения нового
    const currentChallenge = challengeDisplay.querySelector('span')?.textContent?.replace('🎯 ', '').trim();
    if (currentChallenge) {
        this.removeChallengeFromHistory(heroName, currentChallenge);
    }

    // Получаем новый челлендж
    const newChallenge = this.getChallenge(heroName);
    if (!newChallenge) return;
    
    // Анимация реролла
    challengeDisplay.classList.add('challenge-rerolling');
    challengeDisplay.style.opacity = '0';
    
    setTimeout(() => {
        // Создаем или находим span для текста
        let challengeText = challengeDisplay.querySelector('span');
        if (!challengeText) {
            challengeText = document.createElement('span');
            challengeDisplay.innerHTML = '';
            challengeDisplay.appendChild(challengeText);
        }
        challengeText.textContent = `🎯 ${newChallenge}`;
        
        challengeDisplay.style.opacity = '1';
        
        setTimeout(() => {
            challengeDisplay.classList.remove('challenge-rerolling');
        }, 400);
    }, 200);

    // Проигрываем звук
    if (window.audioManager) {
        window.audioManager.playClick();
    }
}

// Удалить конкретный челлендж из истории героя
removeChallengeFromHistory(heroName, challenge) {
    if (this.challengeHistory.history.has(heroName)) {
        const heroHistory = this.challengeHistory.history.get(heroName);
        const index = heroHistory.indexOf(challenge);
        if (index > -1) {
            heroHistory.splice(index, 1);
        }
    }
}ы

    updateAllChallenges() {
        const cards = document.querySelectorAll('.option');
        cards.forEach(card => {
            this.updateCardChallenge(card);
        });
        
        // Проигрываем звук обновления
        if (window.audioManager) {
            window.audioManager.playClick();
        }
    }

    updateCardsChallenges() {
        const cards = document.querySelectorAll('.option');
        cards.forEach(card => {
            this.updateCardChallenge(card);
        });
    }

// Обновляем метод updateCardChallenge для работы с span
updateCardChallenge(card) {
    const challengeDisplay = card.querySelector('.challenge-display') || this.createChallengeDisplay(card);
    const heroName = card.querySelector('.main')?.textContent;
    
    if (this.enabled && heroName) {
        const challenge = this.getChallenge(heroName);
        
        // Создаем или находим span для текста
        let challengeText = challengeDisplay.querySelector('span');
        if (!challengeText) {
            challengeText = document.createElement('span');
            challengeDisplay.innerHTML = '';
            challengeDisplay.appendChild(challengeText);
        }
        challengeText.textContent = `🎯 ${challenge}`;
        
        challengeDisplay.style.display = 'flex';
        card.classList.add('has-challenge');
        
        // Добавляем подсказку при наведении
        challengeDisplay.title = 'Кликните для смены челленджа';
    } else {
        challengeDisplay.style.display = 'none';
        card.classList.remove('has-challenge');
    }
}

    createChallengeDisplay(card) {
        const display = document.createElement('div');
        display.className = 'challenge-display';
        display.style.cursor = 'pointer';
        card.appendChild(display);
        return display;
    }

    animateButton(button) {
        // Добавляем анимацию вращения
        button.classList.add('rotating');
        
        // Убираем анимацию после завершения
        setTimeout(() => {
            button.classList.remove('rotating');
        }, 600);
    }

    // Метод для очистки истории (может пригодиться)
    clearHistory() {
        this.challengeHistory.clearAllHistory();
    }
}

// Глобальная инициализация с проверкой
let challengeSystem;
if (!window.challengeSystem) {
    challengeSystem = new ChallengeSystem();
    window.challengeSystem = challengeSystem;
} else {
    challengeSystem = window.challengeSystem;
}

// Делаем систему доступной глобально
window.updateChallenges = () => {
    if (window.challengeSystem) {
        window.challengeSystem.updateAllChallenges();
    }
};

window.rerollCardChallenge = (card) => {
    if (window.challengeSystem) {
        window.challengeSystem.rerollCardChallenge(card);
    }
};

export { challengeSystem };