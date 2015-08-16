
 
 module.exports = (function () {
     
    function createCreep(creepType, number) {
        
        number = number || 1;
        // for (var i=0; i<number; i++) {
            Game.spawns.Spawn1.createCreep(creepType.props, creepType.name + number, creepType.memory);         
        // }
    }
    
    var harvester = {
        name: 'Worker',
        props:  [WORK, CARRY, MOVE],
        memory: {role: 'harvester'}
    };
    
    var builder = {
        name: 'Builder',
        props:  [WORK, WORK, CARRY, MOVE],
        memory: {role: 'builder'}
    };
    
    var guard = {
        name: 'Guard',
        props:  [TOUGH, ATTACK, MOVE, MOVE],
        memory: {role: 'guard'}
    };
    
    return {
        createHarvester: createCreep.bind(null, harvester),
        createBuilder: createCreep.bind(null, builder),
        createGuard: createCreep.bind(null, guard)
    };
 })();