import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <p>Hello dark influence!</p>
        </section>
    `;
};

export default class GetSnacksApp {

    render() {
        let dom = template();
        return dom;
    }
}