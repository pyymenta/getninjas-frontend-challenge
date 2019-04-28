const getFormObjectFromAPI = (url) => fetch(url).then(res => {
  return res.json();
});

export default {
  get: getFormObjectFromAPI
}