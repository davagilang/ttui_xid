const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('793ZsSaSAw', uuidlib.v4());
	}

module.exports = generateId
