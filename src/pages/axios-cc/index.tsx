import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button } from '../../components';

const MainContainer = styled.div``;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & Button {
    margin-right: 5px;
  }
`;
const Content = styled.div``;

const AxiosCC: React.FC = () => {
  const [data, setData] = useState<any>({});
  const handleGet = () => {
    // Axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit: 5,
    //   }
    // }).then((res) => setData(res));
    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _limit: 5,
        },
      })
      .then((res) => setData(res));
  };

  const handlePost = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'Axios cc',
        completed: false,
      })
      .then((res) => setData(res));
  };
  return (
    <MainContainer>
      <ButtonsWrapper>
        <Button type="ghost" size="large" onClick={handleGet}>
          GET
        </Button>
        <Button type="primary" size="large" onClick={handlePost}>
          POST
        </Button>
        <Button type="primary" size="large" onClick={handlePost}>
          PUT
        </Button>
      </ButtonsWrapper>
      {Object.keys(data).length === 0 ? (
        ''
      ) : (
        <Content>
          <div>{data.status}</div>
          <div>
            <h3>Headers</h3>
            <pre>{JSON.stringify(data.headers, null, 2)}</pre>
          </div>
          <div>
            <h3>Data</h3>
            <pre>{JSON.stringify(data.data, null, 2)}</pre>
          </div>
          <div>
            <h3>Config</h3>
            <pre>{JSON.stringify(data.config, null, 2)}</pre>
          </div>
        </Content>
      )}
    </MainContainer>
  );
};

export default AxiosCC;
