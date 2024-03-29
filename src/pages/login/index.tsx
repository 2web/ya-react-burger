import React, { useEffect } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../custom-hooks/hooks";
import { fetchLogin, fetchToken } from "../../store/asyncActions/user-auth";
import { useForm } from "../../custom-hooks/use-form";
import { getToken } from "../../utils/functions";
import { ROUTE_HOME } from "../../utils/const";
import styles from "./index.module.scss";

const LoginPage = () => {
  const location = useLocation<any>();
  const dispatch: Function = useAppDispatch();
  const token = useAppSelector(getToken);

  const { values, handleChange } = useForm({});

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLogin(values));
  };

  useEffect(() => {
    if (!token) {
      dispatch(fetchToken());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token) {
    return <Redirect to={location?.state?.from || ROUTE_HOME} />;
  }

  return (
    <form className={`${styles.loginForm}`} onSubmit={login} data-testid="loginForm">
      <p className="text text_type_main-medium mb-6">Вход</p>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={handleChange}
          value={values.email || ""}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          data-testid="loginEmail"
        />
      </div>
      <div className="mb-6">
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={handleChange}
          value={values.password || ""}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          icon={"ShowIcon"}
          data-testid="loginPass"
        />
      </div>
      <div className="mb-20">
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </div>
      <p className="text text_type_main-default text_color_inactive">
        Вы — новый пользователь?{" "}
        <Link className={`${styles.link}`} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link className={`${styles.link}`} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </form>
  );
};

export default LoginPage;
