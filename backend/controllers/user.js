const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.SignupForm = async (req, res, next) => {
  if (req.errorSignupFormResult) {
    res.status(401).json({ error: "Email ou pseudo déjà utilisé" });
    return;
  }
  res.status(200).json({
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.passwordHash,
  });
};

exports.LoginForm = (req, res, next) => {
  if (req.LoginFormResult == undefined) {
    res.status(401).json({ error: "Nom d'utilisateur incorrect" });
    return;
  }
  let password = req.LoginFormResult.password;
  bcrypt
    .compare(req.body.password, password)
    .then((valid) => {
      if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect" });
      }
      let userId = req.LoginFormResult.id_user;
      let nickname = req.LoginFormResult.nickname;
      let privilege = req.LoginFormResult.privilege;
      res.status(200).json({
        userId: userId,
        nickname: nickname,
        token: jwt.sign(
          { userId: userId, privilege: privilege },
          "RANDOM_TOKEN_SECRET",
          {
            expiresIn: "24h",
          }
        ),
        privilege: privilege,
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.sendAnotherUserInfosToFront = async (req, res, next) => {
  if (req.userInfos == undefined) {
    res.status(401).json({ error: "Nom d'utilisateur incorrect" });
    return;
  }
  return res.status(200).json(req.userInfos);
};



exports.sendUserInfosToFront = async (req, res, next) => {
  if (req.userInfos == undefined) {
    res.status(401).json({ error: "Nom d'utilisateur incorrect" });
    return;
  }
  return res.status(200).json(req.userInfos);
};



exports.sendUpdatePictureResult = async (req, res, next) => {
  if (req.errorUpdatePicture) {
    res.status(400).json({ message: "Impossible de modifier l'image" });
    return;
  }
  res.status(200).json({ imageUrl: req.imageUrl });
};
