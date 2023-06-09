import axios from "axios";

const URL_LOGIN =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
const URL_SIGNUP =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
const URL_MEMBERSHIPS =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

function createToken(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function userLogin(obj, callbackSuccess, callbackFailure) {
  axios
    .post(URL_LOGIN, obj)
    .then(({ data }) => callbackSuccess(data)) //desestruturação + arrowfunction + função passada como parâmetro?
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callbackFailure();
    });
}

function userRegister(obj, callbackSuccess, callbackFailure) {
  axios
    .post(URL_SIGNUP, obj)
    .then(({ data }) => callbackSuccess(data))
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callbackFailure();
    });
}

// porque "export default const api" não funciona?
const api = {
  userLogin,
  userRegister,
};

export default api;
