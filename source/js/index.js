// 1. Import erste,
import {Component} from 'erste';

// 2. Create your application,
class App extends Component {
    constructor() {
        super();
        this.counter = 0;
    }
    // 3. Arrange your view,
    template() {
        return `
        <div>
            <h1>${this.counter}</h1>
            <button class="increment">Increment</button>
            <button class="decrement">Decrement</button>
        </div>
        `;
    }
    // 4. Create your methods,
    increment() { this.$('h1').innerText = ++this.counter; }
    decrement() { this.$('h1').innerText = --this.counter; }

    // 5. Bind your events.
    get events() {
        return {
            'click': {
                '.increment': this.increment,
                '.decrement': this.decrement
            }
        }
    }
}

// 6. Make your application run.
new App().render(document.body);
