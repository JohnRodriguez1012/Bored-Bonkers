const router = require("express").Router();

router.post("/SignUp", (req, res) => {
    console.log("Hellow");
    return true;
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
});

module.exports = router;
