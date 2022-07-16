import { loginFailure, loginStart, loginSuccess } from "./UserRedux";
import { publicRequest } from "../Pages/API";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auths/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};