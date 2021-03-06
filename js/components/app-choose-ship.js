import html from '../html.js';
import api from '../services/api.js';
import Ship from './ship.js';

let template = function() {
    return html`   
        <section> 
            <div class="ship-grid">
                <img src="img/lewis-logo.png"class="lewis-logo">
                <p class="choose-ship">Choose your ship:</p>
                <div class="ship-choices"></div>
            </div>
        </section>
    `;
};

export default class ChooseShipApp {
    constructor() {
        this.ships = api.getShips();
        this.user = api.getUser();
    }

    render() {
        let user = this.user[0];
        
        window.addEventListener('load', () => {
            user.score = 0;
            user.choices = [];
            user.path = [];
            user.userShip = '';
            user.mirror = [];
        });

        let dom = template();
        let shipChoice = dom.querySelector('.ship-choices');

        for(var i = 0; i < this.ships.length; i++) {
            let ship = new Ship ({
                ship: this.ships[i],
                user: this.user,
                
                onSelect: (ship) => {
                    user.userShip = '';
                    user.userShip = ship.img;
                }
            });
    
            shipChoice.appendChild(ship.render());
        }
        
        return dom;
    }
}