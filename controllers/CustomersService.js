'use strict';

var examples = [];
examples.push({
"jobTitle" : "API Specialist",
"name" : "Rafael Rocha",
"id" : 1
});

exports.customersGET = function(args, res, next) {
  /**
   * Get Customers by ID
   *
   * returns Customer
   **/

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples || {}, null, 2));
  } else {
    res.end();
  }
}

exports.customersPOST = function(req, res, next) {
 
	var body = '';
	req.on('data', function (data) {
        body += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) { 
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
        	req.connection.destroy();
        }
    });

	req.on('end', function (data) {
		examples.push(JSON.parse(body));
    });
	
	res.end();
}