const Engine = require('./Engine');
const EntityManager = require('./EntityManager');
const Entity = require('./Entity');
const PhysicsManager = require('./PhysicsManager');

const physicsManager = new PhysicsManager({name: 'PHYSICS_MANAGER'});
const playerEntity = new Entity({name: 'PLAYER'});
const nonPlayerEntity = new Entity({name: 'NON_PLAYER'});

const entityManager = new EntityManager({
    name: 'ENTITY_MANAGER',
    children: [playerEntity, nonPlayerEntity]
});

const engine = new Engine({
    name: 'ENGINE',
    children: [physicsManager, entityManager]
});

engine.update();
