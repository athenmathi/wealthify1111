import { POST_OTP_LOGIN_SUCCESS, SUBSCRIPTION_SUCCESS } from "./action";

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
};
export default reducer;
