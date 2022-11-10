import {
  BUYSUBSCRIPTION_BEGIN,
  GETDATA_BEGIN,
  GETDATA_SUCCESS,
  GET_ADMIN_HOME_BEGIN,
  GET_ADMIN_HOME_ERROR,
  GET_ADMIN_HOME_SUCCESS,
  GET_ARRAY_OF_OBJECT_BEGIN,
  GET_ARRAY_OF_OBJECT_ERROR,
  GET_ARRAY_OF_OBJECT_SUCCESS,
  GET_EACHDOCTOR_PATIENT_BEGIN,
  GET_EACHDOCTOR_PATIENT_SUCCESS,
  GET_SUBCRIPTION_BEGIN,
  GET_TEST_REPORTS_BEGIN,
  GET_TEST_REPORTS_SUCCESS,
  POST_OTP_LOGIN_BEGIN,
  POST_OTP_LOGIN_SUCCESS,
  SET_AGREE,
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
  doctorId: "",
  userType: "",
  numberExist: "",
  subscriptionPlan: [],
  subscriptionPlanCount: "",
  commonData: "",
  sex: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dob: "",
  bloodGroup: "",
  age: "",
  height: "",
  currentWeight: "",
  normalWeight: "",
  weight_6_month_ago: "",
  agree: "",
  imageData: [],
  details: [],
  adminDetails: [],
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
      const { p_id, doc_id, user_type, number_exist } = data.data;
      dispatch({
        type: POST_OTP_LOGIN_SUCCESS,
        payload: {
          ph_num,
          referal_id,
          p_id,
          doc_id,
          user_type,
          number_exist,
          otp,
        },
      });
      console.log(p_id, number_exist);
      localStorage.setItem("phoneNumber", ph_num);
      localStorage.setItem("user_type", user_type);
      localStorage.setItem("phoneNumber", ph_num);
      localStorage.setItem("doctorId", doc_id);
      localStorage.setItem("referalId", referal_id);
      localStorage.setItem("p_id", p_id);
    } catch (error) {}
  };

  const getData = async (url, obj) => {
    dispatch({ type: GETDATA_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);

      dispatch({
        type: GETDATA_SUCCESS,
        payload: {
          data: data.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async (url, obj) => {
    dispatch({ type: BUYSUBSCRIPTION_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
    } catch (error) {
      console.log(error);
    }
  };
  const getTestReport = async (url, obj) => {
    dispatch({ type: GET_TEST_REPORTS_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
      dispatch({ type: GET_TEST_REPORTS_SUCCESS, payload: data });
    } catch (error) {}
  };
  const getDoctorList = async (url, obj) => {};
  const getEachDoctorPatient = async (url, obj) => {
    dispatch({ type: GET_EACHDOCTOR_PATIENT_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);
      dispatch({ type: GET_EACHDOCTOR_PATIENT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const setAgree = (value) => {
    dispatch({ type: SET_AGREE, payload: value });
  };
  const getArrOfObj = async (url, obj) => {
    dispatch({ type: GET_ARRAY_OF_OBJECT_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);

      dispatch({ type: GET_ARRAY_OF_OBJECT_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: GET_ARRAY_OF_OBJECT_ERROR });
      console.log(error);
    }
  };

  const getAdminHome = async (url, obj) => {
    dispatch({ type: GET_ADMIN_HOME_BEGIN });
    try {
      const { data } = await authFetch.post(`${url}.php`, obj);

      dispatch({ type: GET_ADMIN_HOME_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: GET_ADMIN_HOME_ERROR });
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
        postData,
        setAgree,
        getEachDoctorPatient,
        getTestReport,
        getArrOfObj,
        getAdminHome,
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
