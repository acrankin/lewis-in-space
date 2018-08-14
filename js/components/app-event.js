import html from '../html.js';
import api from '../services/api.js';
import Event from './event.js';
import ChoiceResult from './choice-result.js';

let template = function() {
    return html`   
        <section class="story-event"></section>
        <section class="choice-area"></section>
        <section class="choice-result"></section> 
    `;
};

export default class EventApp {
    constructor() {
        this.storyEvents = api.getEvents();
        this.userScore = api.userScore();
    
    }

    render() {
        let dom = template();
        let storyEvent = dom.querySelector('.story-event');
        // let choiceArea = dom.querySelector('.choice-area');
        let userScore = this.userScore;
        let resultArea = dom.querySelector('.choice-result');
        console.log('user score', userScore);
        console.log('story event', storyEvent);
        
        let event = new Event ({
            storyEvent: this.storyEvents[0],  
            
            onClick: (button) => {
               
                console.log('app button clicked', parseInt(button.value));
                let buttonValue = parseInt(button.value);
                let buttonName = button.name;
                console.log('button name', buttonName);
                if(buttonName === 'choice1a') {
                    console.log('if button', buttonName);
                    userScore += buttonValue;
                    resultArea.style.display = 'block';
                    
                }
                if(buttonName === 'choice1b') {
                    console.log('if other button', buttonName);
                }
                console.log('new score', userScore);
            }
        });

        let choiceResult = new ChoiceResult ({
            storyEvent:  this.storyEvents[0],

            onClick: (button) => {
                
            }
        });

        storyEvent.appendChild(event.render());
        resultArea.appendChild(choiceResult.render());

        return dom;
    }
}