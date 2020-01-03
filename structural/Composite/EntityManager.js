const Component = require('./Component');

class EntityManager extends Component {
    update() {
        for (const child of this.props.children) {
            child.update();
        }
    }
}

module.exports = EntityManager;
