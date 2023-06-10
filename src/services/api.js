import axios from "axios";

const URL_LOGIN =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
const URL_SIGNUP =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
const URL_MEMBERSHIPS =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

function createHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function getSubscriptions(token) {
  return axios.get(URL_MEMBERSHIPS, createHeader(token))
}

function userLogin(obj) {
  return axios.post(URL_LOGIN, obj);
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

const api = {
  userLogin,
  userRegister,
  getSubscriptions
};

export default api;
