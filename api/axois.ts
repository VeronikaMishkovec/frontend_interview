import axios, { Method } from 'axios';

export const METHOD_GET = 'get';
export const METHOD_POST = 'post';
export const METHOD_PUT = 'put';
export const METHOD_DELETE = 'delete';

// export const baseURL = 'http://localhost:5001';
// export const baseURL = 'http://192.168.0.9:5001';
// export const baseURL = 'https://learnandrepeate.herokuapp.com/'
export const baseURL = 'https://interview-alpha.vercel.app';

const request = (
  path: string,
  method: Method,
  data: object,
  token: string | number | boolean,
) =>
  axios
    .request({
      baseURL,
      method,
      [method === METHOD_GET ? 'params' : 'data']: data,
      responseType: 'json',
      url: path,
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        authorization: token,
      },
      withCredentials: true,
    })
    .catch(function (error) {
      if (error.response) {
        throw error.response;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
      // return error;
    });

const api = async (
  path: string,
  method: Method,
  data: object,
  name?: string,
) => {
  try {
    // console.log(name, 'args', data);
    // @ts-ignore
    const res: any = await request(path, method, data);
    console.log(name || '', res.data);
    return res.data;
  } catch (error: any) {
    throw error.data;
  }
};

export default api;
