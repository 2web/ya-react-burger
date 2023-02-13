const checkResponse = (res: { ok: any; json: () => Promise<any>; }) => {
  return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
};

export function request<T>(url: string, options?: object): Promise<T> {
  return fetch(url, options).then(checkResponse);
};
