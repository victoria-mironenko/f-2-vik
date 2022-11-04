import './button.scss'
import { Component} from "../core";

export class Button extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
            label: "Click",
        };
    }

    registerEvents() {
        this.addEventListener('click', () => {
            this.setState((state) => {
                return {
                    ...state,
                    isActive: !this.isActive,
                }
            })
        })
    }

    render() {
        return `
            <button class ='${this.state.isActive ? "active" : ""}'>Click</button>
        `
    }

}

customElements.define('my-button', Button)