const Component = require('./Component');

class Engine extends Component {
    update() {
        for (const child of this.props.children) {
            child.update();
        }
    }
}

module.exports = Engine;
