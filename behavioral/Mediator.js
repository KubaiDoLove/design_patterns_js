//Зачем: Общение независимых объектов между собой, Mediator является посредником

const Participant = function(name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to)
    },
    receive: function(message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

const ChatRoomMediator = function() {
    let participants = {};

    return {
        register: function(participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                to.receive(message, from);
            }
            else {
                for (let key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

const downLite = new Participant("downLite");
const sheLkhan = new Participant("sheLkhan");
const baurTist = new Participant("baurTist");

const chatRoom = new ChatRoomMediator();

chatRoom.register(downLite);
chatRoom.register(sheLkhan);
chatRoom.register(baurTist);

downLite.send("Hi, I'm Lite");
downLite.send("Shanhai", sheLkhan);
sheLkhan.send("Darwin");
baurTist.send("Autism is a new black");
