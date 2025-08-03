const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 50,
        maxLife: 50,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 9,
        defense: 7
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1EL: null,
    fighter2EL: null,

    start(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;

        this.fighter1EL.querySelector('.attack-button').addEventListener('click', () => this.doAttack(fighter1, fighter2));
        this.fighter2EL.querySelector('.attack-button').addEventListener('click', () => this.doAttack(fighter2, fighter1));


        this.update();
    },

    update() {
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${(this.fighter1.life).toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`;


        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${(this.fighter2.life).toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            Log.addMessage("Já há alguém morto");
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        if (attacking.attack * attackFactor > attacked.defense * defenseFactor) {
            attacked.life -= attacking.attack * attackFactor;
            Log.addMessage(`${attacking.name} deu ${(attacking.attack * attackFactor).toFixed(2)} de dano em ${attacked.name}`);
            if(attacked.life < 0){
                attacked.life = 0;
            }
        } else {
            Log.addMessage(`${attacked.name} resistiu ao ataque de ${attacking.name}`);
        }

        this.update();
    }
}

const Log = {
    list: [],

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    render() {
        const listEL = document.querySelector('.log');
        listEL.innerHTML = '';

        for (let i = this.list.length - 1; i > 0; i--) {
            listEL.innerHTML += `<li>${this.list[i]}</li>`
        }

        if (this.list.length >= 1) {
            listEL.innerHTML += `<li>${this.list[0]}</li>`
        }
    }
}
