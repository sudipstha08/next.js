/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Sentry from "@sentry/browser";
import { API } from "../../utils/api";
import { Button } from "../../components";

const MainContainer = styled.div`
  margin-bottom: 50px;

  h1 {
    color: #333;
    font-size: 34px;
    text-decoration: underline;
    text-decoration-color: #444;
    text-align: center;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 0;
  margin: 10px auto;
  justify-content: center;

  & Button {
    margin: 0 5px !important;
  }
`;
const Content = styled.div`
  padding: 1em 2em;
  margin: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;

  & > div {
    border-bottom: 2px dashed gray;
    padding: 10px 0;
  }
`;

const AxiosCC: React.FC = () => {
  const [data, setData] = useState<any>({});

  // AXIOS GLOBALS
  // axios.defaults.headers.common['X-Auth-Token'] =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  // GET
  const handleGet = () => {
    // Axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit: 5,
    //   }
    // }).then((res) => setData(res));

    // SHORT HAND
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 5,
        },
      })
      .then((res) => setData(res));
  };

  // POST
  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: "Axios cc",
        completed: false,
      })
      .then((res) => setData(res));
  };

  // PUT updates the entire resource
  const handleUpdate = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Updated Todo",
        completed: true,
      })
      .then((res) => setData(res));
  };

  // PATCH applies a partial update to the resource
  const handlePatch = () => {
    axios
      .patch("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Updated Todo",
        completed: true,
      })
      .then((res) => setData(res));
  };

  // const handleDelete = () => {
  //   axios
  //     .delete('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((res) => setData(res));
  // };

  const handleDelete = async () => {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    setData(res);
  };

  // SIMULTANEOUS REQUEST
  const handleSimultaneousRequest = () => {
    try {
      axios
        .all([
          axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
          axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
        ])
        .then(axios.spread((todos, posts) => setData(todos)));
    } catch (e) {
      Sentry.captureMessage("Something went wrong");
      console.error("Error", e);
    }
  };

  // CUSTOM HEADERS
  const handleCustomHeaders = () => {
    const TOKEN = "kfdskjflmmdslfm353mkmk5rwrwwr";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    axios
      .post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: "Axios cc",
          completed: false,
        },
        config,
      )
      .then((res) => setData(res));
  };

  // TRANSFORMING REQUEST AND RESPONSES
  const transformResponse = () => {
    const options = {
      method: "post",
      url: "https://jsonplaceholder.typicode.com/todos",
      data: {
        title: "Hello World",
      },
      transformResponse: axios?.defaults?.transformResponse?.concat(
        (data: any) => {
          data.title = data.title.toUpperCase();
          return data;
        },
      ),
    };

    axios(options as any).then((res) => setData(res));
  };

  // ERROR HANDLING
  const handleErrors = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todoss",
        {
          params: {
            _limit: 5,
          },
        },
      );
      if (res) {
        setData(res);
      }
    } catch (e) {
      if (e.response) {
        // Server responded with a status other than 200 range
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
        Sentry.captureException("Something went wrong", e);
        if (e.response.status === 404) {
          alert("404: Page Not Found");
        }
      } else if (e.request) {
        // Request was made but no response
        console.error(e.request);
      } else {
        console.error(e.message);
        Sentry.captureException("Something went wrong", e);
      }
    }
  };

  // VALIDATE STATUS
  const validateStatus = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todoss",
        {
          params: {
            _limit: 5,
          },
          validateStatus: function (status) {
            return status < 500; // Reject only if status if greater or equal to 500
          },
        },
      );
      if (res) {
        setData(res);
      }
    } catch (e) {
      if (e.response) {
        // Server responded with a status other than 200 range
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
        Sentry.captureException("Something went wrong", e);

        if (e.response.status === 404) {
          alert("404: Page Not Found");
        }
      } else if (e.request) {
        // Request was made but no response

        console.error(e.request);
      } else {
        console.error(e.message);
        Sentry.captureException("Something went wrong", e);
      }
    }
  };

  // CANCEL TOKEN
  const cancelToken = () => {
    const source = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        cancelToken: source.token,
      })
      .then((res) => setData(res))
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log("Request cancelled", thrown.message);
        }
      });

    if (true) {
      source.cancel("Request cancelled");
    }
  };
  // AXIOS INSTANCES
  // const axiosInstance = axios.create({
  //   baseURL: 'https://jsonplaceholder.typicode.com',
  // });

  // COMMENTS
  const getComments = async () => {
    try {
      const res = await API.get("/comments", {
        params: {
          _limit: 10,
        },
      });
      if (res) {
        setData(res);
      }
    } catch (e) {
      console.error("e", e);
    }
  };

  // TIMEOUT
  const handleTimeout = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10,
        },
        timeout: 5, // MilliSeconds
      })
      .then((res) => setData(res));
  };

  // INTERCEPTORS REQUESTS AND RESPONSES
  // axios.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     console.log(
  //       `${config.method.toUpperCase()} request sent to ${
  //         config.url
  //       } at ${new Date().getTime()}`,
  //     );
  //     return config;
  //   },
  //   (error) => {
  //     Promise.reject(error);
  //   },
  // );

  return (
    <MainContainer>
      <h1>Axios</h1>
      <ButtonsWrapper>
        <Button type="ghost" size="large" onClick={handleGet}>
          GET
        </Button>
        <Button type="primary" size="large" onClick={handlePost}>
          POST
        </Button>
        <Button type="dashed" size="large" onClick={handleUpdate}>
          PUT
        </Button>
        <Button type="primary" size="large" onClick={handlePatch}>
          PATCH
        </Button>
        <Button type="text" size="large" onClick={handleDelete}>
          DELETE
        </Button>
        <Button type="dashed" size="large" onClick={handleSimultaneousRequest}>
          SIMULTANEOUS
        </Button>
        <Button type="primary" size="large" onClick={handleCustomHeaders}>
          CUSTOM HEADER
        </Button>
        <Button type="dashed" size="large" onClick={transformResponse}>
          TRANSFORM RESPONSE
        </Button>
        <Button type="primary" size="large" onClick={handleErrors}>
          ERROR HANDLING
        </Button>
        <Button type="primary" size="large" onClick={validateStatus}>
          VALIDATE STATUS
        </Button>
        <Button type="ghost" size="large" onClick={cancelToken}>
          CANCEL TOKEN
        </Button>
        <Button type="primary" size="large" onClick={getComments}>
          GET COMMENTS
        </Button>
        <Button type="dashed" size="large" onClick={handleTimeout}>
          TIMEOUT
        </Button>
      </ButtonsWrapper>
      {Object.keys(data).length === 0 ? (
        ""
      ) : (
        <Content>
          <div>
            <strong>STATUS CODE</strong> : {data.status}
          </div>
          <div>
            <h3>
              <strong>Headers</strong>
            </h3>
            <pre>{JSON.stringify(data.headers, null, 2)}</pre>
          </div>
          <div>
            <h3>
              <strong>Data</strong>
            </h3>
            <pre>{JSON.stringify(data.data, null, 2)}</pre>
          </div>
          <div>
            <h3>
              <strong>Config</strong>
            </h3>
            <pre>{JSON.stringify(data.config, null, 2)}</pre>
          </div>
        </Content>
      )}
    </MainContainer>
  );
};

export default AxiosCC;
