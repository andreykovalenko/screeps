
module.exports = function () {
    
  Object.keys(Memory.creeps).forEach(function (creepId) { 
    var creep = Memory.creeps[creepId];
    console.log('reset roles')
    if (!!~creepId.indexOf('Worker')) {
        creep.role = 'harvester';
    } else if (!!~creepId.indexOf('Builder')) {
        creep.role = 'builder';
    } else {
        creep.role = 'guard';
    }
  })
}