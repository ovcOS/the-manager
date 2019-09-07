// @flow

const router = require("express").Router();
let Workspace = require("../schemas/workspace.model");


router.route("/").get((req, res) => {
	Workspace.find()
		.then(workspaces => res.json(workspaces))
		.catch(err => res.status(400).json(`Error: ${err}`));
});
  
router.route("/create").post((req, res) => {
	const workspace = req.body;
	if (workspace) {
		const newWorkspace = new Workspace(workspace);
		console.log(newWorkspace);
		newWorkspace.save()
			.then(() => res.json("Workspace created!"))
			.catch(err => res.status(400).json(`Error--workspace/create: ${err}`));
	}
});


module.exports = router;
