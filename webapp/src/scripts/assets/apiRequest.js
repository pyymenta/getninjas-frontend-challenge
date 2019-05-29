const getFormObjectFromAPI = url => fetch(url).then(res => res.json());

export default {
  get: getFormObjectFromAPI,
};
