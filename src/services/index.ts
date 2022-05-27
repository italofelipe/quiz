import axios from "axios";

const axiosGet = <T>(requestData: AxiosHandler["config"]) => {
  return axios.get<T>(
    `https://test-quiz-app-backend.herokuapp.com/${requestData.path}/${
      requestData.params ? requestData.params : ""
    }`
  );
};
const axiosPost = <T>(requestData: AxiosHandler) => {
  return axios.post<T>(
    `https://test-quiz-app-backend.herokuapp.com${requestData.config.path}/${
      requestData.config.params ? requestData.config.params : ""
    }`,
    {
      ...requestData.body,
    }
  );
};

export { axiosGet, axiosPost };

