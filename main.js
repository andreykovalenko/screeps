// Your code goes here...

var harvester = require('harvester');
var roadBuilder = require('road-builder');
var guard = require('guard');

var roles = require('roles')
 
var creeps = {
  harvester: harvester, 
  builder: roadBuilder,
  guard: guard
};
 
Object.keys(Game.creeps).forEach(function (creepId) {
    var creep = Game.creeps[creepId];
    
    // if (!creep.memory.role) {
    //     roles();
    // }
    // console.log(creep.memory.role)
    var worker = creeps[creep.memory.role];
    
    worker(creep);
    
});




//  Game.spawns.Spawn1.createCreep( , 'Builder1',  {role: builder} );
