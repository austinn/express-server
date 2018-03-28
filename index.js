//echos back query param id
exports.doGet = function(req, res) {	
	//do something

	//ex localhost:3001:/foo?id={your param here}
	//where req.query.id = {your param here}
	return res.status(200).json(req.query.id);
};