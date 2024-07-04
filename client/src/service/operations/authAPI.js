import { apiConnector } from '../apiconnector';
import { endpoints } from '../api';

export const register = async (fullName, username, password, confirmPassword, gender) => {
  console.log("signup api run successfully  "  ,endpoints.SIGNUP_API);
    return apiConnector('POST', endpoints.SIGNUP_API, { fullName, username, password, confirmPassword, gender });
};
export const login = async (username, password) => {
  console.log("Login api run successfully  "  , endpoints.LOGIN_API);
    return apiConnector('POST', endpoints.LOGIN_API, { username, password });
};
export const logout = async () => {
  console.log("Logout api run successfully  "  , endpoints.LOGOUT_API);
    return apiConnector('GET', endpoints.LOGOUT_API);
};

  