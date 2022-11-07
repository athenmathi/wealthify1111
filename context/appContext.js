import {
  BUYSUBSCRIPTION_BEGIN,
  GET_SUBCRIPTION_BEGIN,
  POST_OTP_LOGIN_BEGIN,
  POST_OTP_LOGIN_SUCCESS,
  SUBSCRIPTION_SUCCESS,
} from "./action";
import React from "react";
import reducer from "./reducer";
import axios from "axios";
import { useContext } from "react";
import { useReducer } from "react";
const initialState = {
  subscription: "",
  phoneNumber: "",
  referalId: "",
  patientId: "",
  numberExist: "",
  subscriptionPlan: [],
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //    axios
  const authFetch = axios.create({
    baseURL: "http://doctor.brandimagetech.com/",
  });
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Access-Control-Allow-Origin"] = "*";

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  authFetch.interceptors.response.use(
    (response) => {
      response.headers["Content-Type"] = "application/json;charset=UTF-8";
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // get the current subscription

  const getSubscription = async (url, obj) => {
    dispatch({ type: GET_SUBCRIPTION_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
      const planCount = data.current_plan.plan.length;
      const plan = data.current_plan.plan;
      dispatch({ type: SUBSCRIPTION_SUCCESS, payload: { planCount, plan } });
    } catch (error) {
      console.log(error);
    }
  };
  const buySubscription = async (url, obj) => {
    dispatch({ type: BUYSUBSCRIPTION_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
    } catch (error) {
      console.log(error);
    }
  };

  const otpLogin = async (url, obj) => {
    dispatch({ type: POST_OTP_LOGIN_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
      const { ph_num, referal_id } = obj;
      const { otp } = data;
      const { p_id, number_exist } = data.data;
      dispatch({
        type: POST_OTP_LOGIN_SUCCESS,
        payload: { ph_num, referal_id, p_id, number_exist, otp },
      });
      console.log(p_id, number_exist);
      localStorage.setItem("phoneNumber", ph_num);
      localStorage.setItem("referalId", referal_id);
    } catch (error) {}
  };

  const getData = async (url, obj) => {
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSubscription,
        otpLogin,
        getData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppcontext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppcontext };
