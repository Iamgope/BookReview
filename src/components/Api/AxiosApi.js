import axios from "axios";
import authSlice, { authActions } from "../../store/slices/auth";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import store from "../../store";

const axiosInstance = axios.create({
  baseURL: "https://djangobookreview.herokuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const { token } = store.getState().auth;
  //console.log('token',token)

  if (token !== null) {
    config.headers.Authorization = "Bearer " + token;
    // console.log("hello", config.headers.Authorization);
    console.debug(
      "[Request]",
      config.baseURL + config.url,
      JSON.stringify(token)
    );
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    // @ts-ignore
    console.debug(
      "[Response]",
      res.config.baseURL + res.config.url,
      res.status,
      res.data
    );
    return Promise.resolve(res);
  },
  (err) => {
    console.debug(
      "[Response]",
      err.config.baseURL + err.config.url,
      //err.response.status,
      //err.response.data
    );
    return Promise.reject(err);
  }
);

const refreshAuthLogic = async (failedRequest) => {
  const { refreshToken } = store.getState().auth;
  if (refreshToken !== null) {
    return axios
      .post(
        "/auth/refresh/",
        {
          refresh: refreshToken,
        },
        {
          baseURL: "https://djangobookreview.herokuapp.com",
        }
      )
      .then((resp) => {
        //console.log("yeah", resp.data);
        const { access, refresh } = resp.data;
        failedRequest.response.config.headers.Authorization =
          "Bearer " + access;
        store.dispatch(
          authActions.setAuthTokens({
            token: access,
            refreshToken: refresh,
          })
        );
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          store.dispatch(authSlice.actions.setLogout());
        }
      });
  }
};
createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);
export function fetcher(url) {
  return axiosInstance.get(url).then((res) => res.data);
}
export default axiosInstance;
