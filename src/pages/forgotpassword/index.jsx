import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useForm } from "../../custom-hooks/use-form";
import { PASSWORD_URL } from "../../utils/const";
import { request } from "../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../utils/user-auth";
import styles from "./index.module.scss";

const ForgotPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.userReducer.accessToken);
  const [redirect, setRedirect] = useState(false);
  const { values, handleChange } = useForm({});

  const forgotPass = async (e) => {
    e.preventDefault();
    await request(PASSWORD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    }).then((responce) => {
      if (responce.success) {
        setRedirect(true);
      }
    });
  };

  useEffect(() => {
    if (!token) {
      dispatch(fetchToken());
    }
  }, []);

  if (token) {
    return <Redirect to={{ pathname: location?.state?.from || "/" }} />;
  }

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <form className={`${styles.forgotForm}`}>
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={handleChange}
          value={values.email || ""}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <div className="mb-20">
        <Button
          htmlType={"submit"}
          type="primary"
          onClick={forgotPass}
          size="medium"
        >
          Восстановить
        </Button>
      </div>
      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={`${styles.link}`} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};

export default ForgotPassword;
