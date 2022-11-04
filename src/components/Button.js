import './button.scss'
import { Component} from "../core";

export class Button extends Component {
    constructor() {
        super();
        this.state = {
           count: 1
        };
    }



    registerEvents() {
        // this.addEventListener('click', () => {
        //     this.setState((state) => {
        //         return {
        //             ...state,
        //             isActive: !this.isActive,
        //         }
        //     })
        // })

        this.addEventListener('click', (event) => {
            if(event.target.closest('.plus')) {
                this.setState((state) => {
                    return {
                        ...state,
                        count: state.count < 10 ?  state.count +=1 : state.count
                    }
                })
            }
            if(event.target.closest('.minus')) {
                this.setState((state) => {
                    return {
                        ...state,
                        count: state.count > 0 ?  state.count -=1 : state.count
                    }
                })
            }
            
           
        })




    }

    

    // render() {
    //     return `
    //         <button class ='${this.state.isActive ? "active" : ""}'>Click</button>
    //     `
    // }

    render() {
        return `
            <button class="plus">+</button>
            <span>${this.state.count}</span>
            <button class="minus">-</button>
        `;
    }

}

customElements.define('my-button', Button)