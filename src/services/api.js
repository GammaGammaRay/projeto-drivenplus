import axios from "axios";

const URL_LOGIN =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";

const URL_SIGNUP =
  "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";

const URL_MEMBERSHIPS =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";

const URL_MEMBERSHIPSIGNUP =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

const URL_GETMEMBERSHIPDATA =
  "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/";

function createHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function getSubscriptions(token) {
  return axios.get(URL_MEMBERSHIPS, createHeader(token));
}

function setUserSubscription(token, obj) {
  return axios.post(URL_MEMBERSHIPSIGNUP, createHeader(token), obj);
}

function getMembershipData(token, id) {
  console.log({id})
  return axios.get(`${URL_GETMEMBERSHIPDATA}${id}`, createHeader(token));
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
  getSubscriptions,
  getMembershipData,
};

export default api;
