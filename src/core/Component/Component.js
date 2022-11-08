export class Component extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    setState(callback) {
        this.state = callback(this.state);
        this.innerHTML = this.render()
        .trim()
        .replaceAll(/true|falce/gi, "")
        .replaceAll(",", "")
    }

    connectedCallback() {
        this.innerHTML = this.render()
        .trim()
        .replaceAll(/true|falce/gi, "")
        .replaceAll(",", "")
        this.componentDidMount();
        this.registerEvents();
    }

    disconnectedCallback() {
        this.componentWillUnMount()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.componentWillUpdate(name, oldValue, newValue);
        this.getAttributeNames().forEach(() => {
            this.probs[name] = this.getAttribute(name);
        })
    }

    dispatch() {
        this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: this.probs}));
    }

    registerEvents() {}

    componentDidMount() {}

    componentWillUpdate() {}

    componentWillUnMount() {}

    render() {} 
}