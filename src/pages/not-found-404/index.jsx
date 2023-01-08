import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.scss";

function NotFound404() {
  const history = useHistory();

  const clickGoBack = () => {
    history.goBack();
  };
  return (
    <main className={styles.main}>
      <h2 className={`${styles.title} text_type_digits-large `}>404</h2>
      <p className={`${styles.text} text text_type_main-default  mb-8`}>
        такой страницы нет...
      </p>
      <Button htmlType={"submit"} type="primary" onClick={clickGoBack}>
        Вернуться назад
      </Button>
    </main>
  );
}

export default NotFound404;
