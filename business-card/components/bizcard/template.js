export default {
    render(props) {
        return `${this.html(props)}
                ${this.css(props)}`;
    },
    html(p) {return ``; },
    css(p) {return ``; }
}