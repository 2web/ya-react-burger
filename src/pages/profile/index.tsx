import React, { useEffect, useState, useRef } from "react";
import {
  Input,
  Button,
  EditIcon,
  ShowIcon,
  HideIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../custom-hooks/hooks";
import { TApplicationActions } from "../../utils/types";
import { getUser } from "../../utils/functions";
import { ROUTE_PROFILE,ROUTE_PROFILE_ORDERS } from "../../utils/const";
import {
  fetchLogout,
  fetchGetUser,
  fetchToken,
  fetchPatchUser,
} from "../../store/reducers/user-auth";
import { useForm } from "../../custom-hooks/use-form";
import styles from "./index.module.scss";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profileForm = useAppSelector(getUser);
  const { values, handleChange, setValues } = useForm({});
  const [disabledInput, setDisabledInput] = useState({
    name: true,
    email: true,
    password: true,
    showPassIcon: false,
    showPass: false,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValues({
      ...profileForm,
      password: "",
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileForm]);

  useEffect(() => {
    getFetchToken(fetchGetUser(profileForm.accessToken));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileForm.accessToken]);

  const onIconClick = (ref:React.RefObject<HTMLInputElement>) => {
    if (!ref.current) return;
    const currentRefName = ref.current.name;
    if (currentRefName === "password") {
      setDisabledInput({
        ...disabledInput,
        [currentRefName]: false,
        showPassIcon: true,
      });
    } else {
      setDisabledInput({ ...disabledInput, [currentRefName]: false });
    }
    setTimeout(() => {
      ref.current?.focus();
    }, 10);
  };

  const passIconHandler = () => {
    setDisabledInput({ ...disabledInput, showPass: !disabledInput.showPass });
  };

  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(fetchLogout());
  };

  const patch = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    getFetchToken(fetchPatchUser(values));
    setDisabledInput({
      name: true,
      email: true,
      password: true,
      showPassIcon: false,
      showPass: false,
    });
  };

  const getFetchToken = (callback: TApplicationActions) => {
    if (profileForm.accessToken) {
      dispatch(callback);
    } else {
      dispatch(fetchToken());
    }
  };

  const resetForm = () => {
    setValues({
      ...profileForm,
      password: "",
    });
    setDisabledInput({
      name: true,
      email: true,
      password: true,
      showPassIcon: false,
      showPass: false,
    });
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.profileNav} mr-15`}>
        <NavLink
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          to={ROUTE_PROFILE}
          activeClassName={styles.activeNavLink}
          exact={true}
        >
          Профиль
        </NavLink>
        <NavLink
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          to={ROUTE_PROFILE_ORDERS}
          activeClassName={styles.activeNavLink}
          exact={true}
        >
          История заказов
        </NavLink>
        <Link
          className={`text text_type_main-medium ${styles.profileNavLink}`}
          onClick={logout}
          to="#"
        >
          Выход
        </Link>
        <p className={`text text_type_main-default mt-20 ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={`${styles.profileInputs}`}>
        <div className={`mb-6 ${styles.inputBlock}`}>
          <Input
            disabled={disabledInput.name}
            type={"text"}
            placeholder={"Имя"}
            onChange={handleChange}
            value={values.name || ""}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            ref={nameRef}
          />
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => onIconClick(nameRef)}
            className={`${styles.inputIcon}`}
          >
            <EditIcon type="primary" />
          </div>
        </div>
        <div className={`mb-6 ${styles.inputBlock}`}>
          <Input
            disabled={disabledInput.email}
            type={"text"}
            placeholder={"E-mail"}
            onChange={handleChange}
            value={values.email || ""}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            ref={emailRef}
          />
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => onIconClick(emailRef)}
            className={`${styles.inputIcon}`}
          >
            <EditIcon type="primary" />
          </div>
        </div>
        <div className={`mb-6 ${styles.inputBlock}`}>
          <Input
            disabled={disabledInput.password}
            type={disabledInput.showPass ? "text" : "password"}
            placeholder={"Пароль"}
            onChange={handleChange}
            value={values.password || ""}
            name={"password"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            ref={passRef}
          />
          <div className={`${styles.inputIcon}`}>
            {!disabledInput.showPassIcon ? (
              <div onClick={() => onIconClick(passRef)}>
                <EditIcon type="primary" />
              </div>
            ) : (
              <div
                onClick={() => {
                  passIconHandler();
                }}
              >
                {disabledInput.showPass ? (
                  <HideIcon type="primary" />
                ) : (
                  <ShowIcon type="primary" />
                )}
              </div>
            )}
          </div>
        </div>
        {(profileForm.name !== values.name ||
          profileForm.email !== values.email ||
          values.password) && (
          <div>
            <Button
              type="primary"
              size="large"
              onClick={patch}
              htmlType={"submit"}
            >
              Сохранить
            </Button>
            <span className="ml-4">
              <Button
                type="primary"
                size="large"
                htmlType="button"
                onClick={resetForm}
              >
                Отмена
              </Button>
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
