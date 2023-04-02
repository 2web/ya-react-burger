import { userReducer } from "./user-reducer";
import * as types from "../actions/userActions";

describe("td userReduser", () => {
  it("return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      accessToken: null,
      email: "",
      name: "",
    });
  });

  it("handle USER_REGISTER", () => {
    expect(
        userReducer(
        {},
        {
          type: types.USER_REGISTER,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
      email: "Email",
      name: "Name",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.USER_REGISTER,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
      email: "Email",
      name: "Name",
    });
  });

  it("handle USER_LOGIN", () => {
    expect(
        userReducer(
        {},
        {
          type: types.USER_LOGIN,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
      email: "Email",
      name: "Name",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.USER_LOGIN,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
      email: "Email",
      name: "Name",
    });
  });

  it("handle USER_TOKEN", () => {
    expect(
        userReducer(
        {},
        {
          type: types.USER_TOKEN,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.USER_TOKEN,
          payload: {
            refreshToken: "rToken",
            accessToken: "aToken",
          },
        }
      )
    ).toEqual({
      accessToken: "aToken",
      email: "Use Redux",
      name: "Use Redux",
    });
  });

  it("handle USER_LOGOUT", () => {
    expect(
        userReducer(
        {},
        {
          type: types.USER_LOGOUT,
        }
      )
    ).toEqual({
      accessToken: null,
      email: "",
      name: "",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.USER_LOGOUT,
        }
      )
    ).toEqual({
      accessToken: null,
      email: "",
      name: "",
    });
  });

  it("handle GET_USER", () => {
    expect(
        userReducer(
        {},
        {
          type: types.GET_USER,
          payload: {
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      email: "Email",
      name: "Name",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.GET_USER,
          payload: {
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "Use Redux",
      email: "Email",
      name: "Name",
    });
  });

  it("handle PATCH_USER", () => {
    expect(
        userReducer(
        {},
        {
          type: types.PATCH_USER,
          payload: {
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      email: "Email",
      name: "Name",
    });

    expect(
        userReducer(
        {
          accessToken: "Use Redux",
          email: "Use Redux",
          name: "Use Redux",
        },
        {
          type: types.PATCH_USER,
          payload: {
            user: {
              email: "Email",
              name: "Name",
            },
          },
        }
      )
    ).toEqual({
      accessToken: "Use Redux",
      email: "Email",
      name: "Name",
    });
  });
});
