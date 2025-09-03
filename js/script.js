class ChallengeSystem {
    constructor() {
        this.enabled = false;
        this.init();
    }

    init() {
        this.createToggle();
        this.bindEvents();
    }

    createToggle() {
        const toggleHtml = `
            <div class="challenge-toggle">
                <label class="switch">
                    <input type="checkbox" id="challengeMode">
                    <span class="slider"></span>
                    <span class="label">Включить игровые челленджи</span>
                </label>
            </div>
        `;
        document.querySelector('.container').insertAdjacentHTML('afterbegin', toggleHtml);
    }

    bindEvents() {
        document.getElementById('challengeMode').addEventListener('change', (e) => {
            this.enabled = e.target.checked;
            localStorage.setItem('challengeMode', this.enabled);
        });

        // Восстановление состояния из localStorage
        const savedState = localStorage.getItem('challengeMode');
        if (savedState !== null) {
            this.enabled = savedState === 'true';
            document.getElementById('challengeMode').checked = this.enabled;
        }
    }

    getChallenge(heroName) {
        if (!this.enabled) return null;
        return getRandomChallenge(heroName);
    }
}

// Инициализация системы челленджей
const challengeSystem = new ChallengeSystem();

document.addEventListener('DOMContentLoaded', function() {
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resultDiv = document.getElementById('result');

    randomizeBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * heroes.length);
        const randomHero = heroes[randomIndex];
        
        const challenge = challengeSystem.getChallenge(randomHero.name);
        
        resultDiv.innerHTML = `
            <div class="hero-card">
                <h2>${randomHero.name}</h2>
                <img src="${randomHero.image}" alt="${randomHero.name}" 
                     onerror="this.src='https://via.placeholder.com/200x150?text=Hero+Image'">
                <p>${randomHero.description}</p>
                ${challenge ? `<div class="challenge">🎯 Челлендж: ${challenge}</div>` : ''}
            </div>
        `;
    });
});