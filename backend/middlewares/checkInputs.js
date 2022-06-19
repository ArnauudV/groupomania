
isEmailValid = (email) => {
  const emailRegex = /^[\w\-\.]+@[\w\-\.]+\.[a-z]{2,3}$/;
  return emailRegex.test(email);
};


isNameValid = (name) => {
  const regex = /^[a-z ,.'-]+$/i;
  return regex.test(name);
};


isPasswordValid = (password) => {
  const regex = /^(?=.{8,}$)*/;
  return regex.test(password);
};

exports.checkChangePasswordInputs = (req, res, next) => {
  if (
    !isPasswordValid(req.body.actualPassword) ||
    !isPasswordValid(req.body.newPassword)
  ) {
    res
      .status(400)
      .json({ error: "Veuillez entrer un mot de passe plus sécurisé" });
    return;
  }
  next();
};



exports.checkLoginFormInputs = (req, res, next) => {
  if (!isEmailValid(req.body.email)) {
    res.status(400).json({ error: "email non valide" });
  }
  if (!isPasswordValid(req.body.password)) {
    res
      .status(400)
      .json({ error: "mauvais mdp" });
    return;
  }
  next();
};


exports.checkSignupFormInputs = (req, res, next) => {
  if (!isEmailValid(req.body.email)) {
    res.status(400).json({ error: "email non valide" });
  }
  if (!isNameValid(req.last_name)) {
    res.status(400).json({ error: "Prénom non valide" });
    return;
  }
  if (!isNameValid(req.last_name)) {
    res.status(400).json({ error: "Nom non valide" });
    return;
  }


  if (!isPasswordValid(req.body.password)) {
    res
      .status(400)
      .json({ error: "Mauvais mdp" });
    return;
  }
  next();
};


exports.checkUpdateUserInfosInputs = (req, res, next) => {
  if (!isNameValid(req.last_name)) {
    res.status(400).json({ error: "Nom non valide" });
    return;
  }
  if (!isNameValid(req.last_name)) {
    res.status(400).json({ error: "Prénom non valide" });
    return;
  }
  next();
};

