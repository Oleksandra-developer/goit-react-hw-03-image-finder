import axios from "axios";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 4330ebfabc654a6992c2aa792f3173a3";
const BASEURL = "https://pixabay.com/api/";
const API_KEY = "21316838-7fcc910513b76d8c5d66b5ad0";
//https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const imagesApi = ({ searchQuery = "", currentPage = 1, per_page = 12 }) => {
  return axios
    .get(
      `${BASEURL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then((response) => response.data.hits);
};
// response.data.hits
// eslint-disable-next-line import/no-anonymous-default-export

export default imagesApi;
