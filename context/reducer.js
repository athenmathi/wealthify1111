import {
  GETDATA_SUCCESS,
  POST_OTP_LOGIN_SUCCESS,
  SUBSCRIPTION_SUCCESS,
} from "./action";

const reducer = (state, action) => {
  if (action.type === POST_OTP_LOGIN_SUCCESS) {
    const { ph_num, referal_id, p_id, number_exist, otp } = action.payload;
    return {
      ...state,
      phoneNumber: ph_num,
      referalId: referal_id,
      patientId: p_id,
      numberExist: number_exist,
      otpValue: otp,
      alertType: "success",
      alertText: "Enter your otp",
    };
  }
  if (action.type === SUBSCRIPTION_SUCCESS) {
    const { plan, planCount } = action.payload;
    return {
      ...state,
      subscriptionPlanCount: planCount,
      subscriptionPlan: plan,
    };
  }
  if (action.type === GETDATA_SUCCESS) {
    const {
      sex,
      first_name,
      last_name,
      phone_number,
      dob,
      blood_group,
      age,
      height,
      current_weight,
      normal_weight,
      weight_6_month_ago,
    } = action.payload.data;
    return {
      ...state,
      sex: sex,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      dob: dob,
      bloodGroup: blood_group,
      age: age,
      height: height,
      currentWeight: current_weight,
      normalWeight: normal_weight,
      weight_6_month_ago,
    };
  }
};
export default reducer;
