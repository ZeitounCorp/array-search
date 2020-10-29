const EventEmitter = require('events');

const RegisterChangesIO = new EventEmitter();

RegisterChangesIO.on('action_occured_array', (it, act) => {
  it.actions_history.push({ act, timestamp: Date.now()});
});

module.exports = RegisterChangesIO;
