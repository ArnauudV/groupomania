const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const likeReq = require("../requests/likeReq");
const likesCtrl = require("../controllers/likes");

// Route pour ajouter un like
router.post(
  "/:id_post/likes/",
  auth,
  likeReq.requestSameUserLike,
  likeReq.requestUserLike,
  likeReq.requestInsertLike,
  likesCtrl.sendUpdateLikeResult
);

// Route pour supprimer un like
router.delete(
  "/:id_post/likes/",
  auth,
  likeReq.requestSameUserLike,
  likeReq.requestUserLike,
  likeReq.requestDeleteLike,
  likesCtrl.sendUpdateLikeResult
);

module.exports = router;
