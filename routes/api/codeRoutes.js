const router = require("express").Router();
const codeController = require("../../controllers/codeController");


router.route("/")
  .get(codeController.findAll)
  .post(codeController.create);

router
  .route("/:id")
  .get(codeController.findById)
  .put(codeController.update)
  .delete(codeController.remove);

router
  .route("/:keywords")
  .get(codeController.findByKey)
  .put(codeController.update)
  .delete(codeController.remove);

module.exports = router;
