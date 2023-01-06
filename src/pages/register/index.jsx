import React, { useEffect } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, fetchToken } from "../../utils/user-auth";
import { useForm } from "../../custom-hooks/use-form";
import styles from "./index.module.scss";

const RegisterPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.userReducer.accessToken);

  const { values, handleChange } = useForm({});

  const reg = (e) => {
    e.preventDefault();
    dispatch(fetchRegister(values));
  };

  useEffect(() => {
    if (!token) {
      dispatch(fetchToken());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token) {
    return <Redirect to={location?.state?.from || "/"} />;
  }

  return (
    <form className={`${styles.registerForm}`} onSubmit={reg}>
      <p className="text text_type_main-medium mb-6">Регистрация</p>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={values.name || ""}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
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
        />
      </div>
      <div className="mb-20">
        <Button htmlType={"submit"} type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </div>
      <p className="text text_type_main-default text_color_inactive">
        Вы уже зарегистрированы?{" "}
        <Link className={`${styles.link}`} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};

export default RegisterPage;
