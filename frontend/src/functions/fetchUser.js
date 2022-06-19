export const sendLoginForm = async (email, password) => {
  try {
    let LoginFormJson = await fetch("http://localhost:3000/api/auth/Login", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    });
    let reponse = await LoginFormJson.json();
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const sendSignupForm = async (
  nickname,
  lastName,
  firstName,
  email,
  password
) => {
  try {
    let SignupFormJson = await fetch("http://localhost:3000/api/auth/Signup", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: `${nickname}`,
        lastName: `${lastName}`,
        firstName: `${firstName}`,
        email: `${email}`,
        password: `${password}`,
      }),
    });
    let reponse = await SignupFormJson.json();
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestAllUsersInfos = async () => {
  try {
    let userInfosJson = await fetch(`http://localhost:3000/api/auth/users/`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    let reponse = await userInfosJson.json();
    if (reponse.error) {
      return reponse.error;
    }
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestUserInfos = async (id) => {
  try {
    let userInfosJson = await fetch(
      `http://localhost:3000/api/auth/users/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    let reponse = await userInfosJson.json();
    if (reponse.error) {
      return reponse.error;
    }
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestAnotherUserInfosFromAPI = async (nickname) => {
  try {
    let userInfosJson = await fetch(
      `http://localhost:3000/api/auth/users/nickname/${nickname}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    let reponse = await userInfosJson.json();
    if (reponse.error) {
      return reponse.error;
    }
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestUpdateUserFromAPI = async (id, last_name, first_name) => {
  try {
    let postJson = await fetch(`http://localhost:3000/api/auth/users/${id}`, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        last_name: last_name,
        first_name: first_name,
      }),
    });
    let reponse = await postJson.json();
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestUpdatePasswordFromAPI = async (
  id_user,
  actualPassword,
  newPassword
) => {
  try {
    let postJson = await fetch(
      `http://localhost:3000/api/auth/users/${id_user}/password`,
      {
        mode: "cors",
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          id_user: id_user,
          actualPassword: actualPassword,
          newPassword: newPassword,
        }),
      }
    );
    let reponse = await postJson.json();
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};

export const requestDeleteUserFromAPI = async (id) => {
  try {
    let userInfosJson = await fetch(
      `http://localhost:3000/api/auth/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    let reponse = await userInfosJson.json();
    if (reponse.error) {
      return reponse.error;
    }
    return reponse;
  } catch (err) {
    let message = `Impossible de trouver l'API`;
    throw new Error(message);
  }
};



export const userLogged = () => {
  return localStorage.length != 0;
};
