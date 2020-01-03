const Component = require('./Component');

class PhysicsManager extends Component {
    update() {
        console.log(this.props.name + ' updated');
    }
}

module.exports = PhysicsManager;
