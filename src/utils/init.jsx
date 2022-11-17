import { useEffect, useState } from 'react';
import { fetchGet } from '../utils/fetch';
import { _URL, _ING } from "../utils/const";

function useGetBase() {
  const [dBase, setdBase] = useState([]);

  useEffect(() => {
    fetchGet(_URL + _ING, setdBase)
    .then(res => {
        setdBase(res.data)
    })
    .catch(error => {
      console.log(error.message)
    });
  }, [])

  return {
    dBase,
    setdBase
  }
}

export default useGetBase;
