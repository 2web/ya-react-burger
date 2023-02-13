import { SetStateAction, useEffect, useState } from "react";

export function useInputs(data: SetStateAction<{}>) {
  const [values, setValues] = useState({});
  const [inputs, setInputs] = useState({});
  const [isValid, setIsValid] = useState({});

  useEffect(() => {
    if (data) {
      setValues(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: { target: any; }) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setInputs({ ...inputs, [name]: input });

    setIsValid(() => {
      const form = input.closest("form");
      return form.checkValidity();
    });
  };

  function resetForm() {
    setValues({});
    setIsValid({});
    setValues(data);
  }

  return { values, handleChange, isValid, resetForm };
}
