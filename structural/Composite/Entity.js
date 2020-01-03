const Component = require('./Component');

class Entity extends Component {
    update() {
        console.log(this.props.name + ' entity updated');
    }
}

module.exports = Entity;
