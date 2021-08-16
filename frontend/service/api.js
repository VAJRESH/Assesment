import config from "../config";

export function getList(limit = 50, skip = 0) {
  return fetch(
    `${config.DEV_BACKEND_URL}/data/getAll?limit=${limit}&skip=${skip}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return { data: res, limit, skip };
    })
    .catch((err) => {
      console.log(err);
    });
}

export function searchByName(query, limit = 50, skip = 0) {
  return fetch(
    `${config.DEV_BACKEND_URL}/data/${query}?limit=${limit}&skip=${skip}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return { data: res, limit, skip };
    })
    .catch((err) => {
      console.log(err);
    });
}
