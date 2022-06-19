const bcrypt = require("bcrypt");
const connexion = require("../mysql");


exports.requestSignupForm = async (req, res, next) => {
  try {
    let passwordHash = await bcrypt.hash(req.body.password, 10);
    connexion.query(
      `INSERT INTO user (nickname, last_name, first_name, email, password, picture)
        values (?, ?, ?, ?, ?, 'No-Image.png')`,
      [
        req.body.nickname,
        req.body.lastName,
        req.body.firstName,
        req.body.email,
        passwordHash,
      ],
      function (err, result) {
        req.passwordHash = passwordHash;
        req.errorSignupFormResult = err;
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};

// Requête pour connecter un utilisateur
exports.requestLoginForm = async (req, res, next) => {
  try {
    connexion.query(
      `SELECT user.id_user, user.nickname, user.password, user.picture, user.privilege FROM user WHERE email = ?`,
      [req.body.email],
      function (err, result) {
        req.LoginFormResult = result[0];
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};


exports.requestAllUsersInfos = async (req, res, next) => {
  try {
    connexion.query(
      `SELECT user.id_user, user.nickname, user.last_name, user.first_name, user.picture FROM user`,
      function (err, result) {
        req.resultAllUsers = result;
        req.errorAllUsers = err;
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};


exports.requestAnotherUserInfos = async (req, res, next) => {
  try {
    connexion.query(
      `SELECT user.id_user, user.nickname, user.last_name, user.first_name, user.privilege, user.picture FROM user WHERE nickname = ?`,
      [req.params.nickname],
      function (err, result) {
        req.userInfos = result[0];
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};

exports.requestUserInfos = async (req, res, next) => {
  try {
    connexion.query(
      `SELECT user.id_user, user.nickname, user.last_name, user.first_name, user.email, user.privilege, user.picture FROM user WHERE id_user = ?`,
      [req.params.id],
      function (err, result) {
        req.userInfos = result[0];
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};







exports.requestUserPostPictures = (req, res, next) => {
  try {
    connexion.query(
      `SELECT image FROM post WHERE id_user = ?`,
      [req.auth.userId],
      function (err, result) {
        req.file = result;
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};


exports.getPassword = (req, res, next) => {
  try {
    connexion.query(
      `SELECT password FROM user WHERE id_user = ?`,
      [req.auth.userId],
      function (err, result) {
        req.password = result[0].password;
        next();
      }
    );
  } catch (err) {
    let message = "Erreur avec les données";
    throw new Error(message);
  }
};



