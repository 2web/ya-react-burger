import {
  userRegister,
  USER_REGISTER,
  userLogin,
  USER_LOGIN,
  userToken,
  USER_TOKEN,
  userLogout,
  USER_LOGOUT,
  getUser,
  GET_USER,
  patchUser,
  PATCH_USER,
} from "./userActions";

describe("userRegister", () => {
  it("should return an object with type USER_REGISTER and payload", () => {
    const payload = { email: "test@test.com", password: "password" };
    const expectedAction = {
      type: USER_REGISTER,
      payload,
    };
    // @ts-ignore
    const action = userRegister(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe("userLogin", () => {
  it("should return an object with type USER_LOGIN and payload", () => {
    const payload = { email: "test@test.com", password: "password" };
    const expectedAction = {
      type: USER_LOGIN,
      payload,
    };
    // @ts-ignore
    const action = userLogin(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe("userToken", () => {
  it("should return an object with type USER_TOKEN and payload", () => {
    const payload = { token: "token123" };
    const expectedAction = {
      type: USER_TOKEN,
      payload,
    };
    // @ts-ignore
    const action = userToken(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe("userLogout", () => {
  it("should return an object with type USER_LOGOUT and payload", () => {
    const payload = {};
    const expectedAction = {
      type: USER_LOGOUT,
      payload,
    };
    // @ts-ignore
    const action = userLogout(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe("getUser", () => {
  it("should return an object with type GET_USER and payload", () => {
    const payload = { id: "user123" };
    const expectedAction = {
      type: GET_USER,
      payload,
    };
    // @ts-ignore
    const action = getUser(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe("patchUser", () => {
  it("should return an object with type PATCH_USER and payload", () => {
    const payload = { name: "Test User" };
    const expectedAction = {
      type: PATCH_USER,
      payload,
    };
    // @ts-ignore
    const action = patchUser(payload);
    expect(action).toEqual(expectedAction);
  });
});
