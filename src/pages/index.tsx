// import Link from 'next/link'
import { useState } from 'react';
import Layout from '../components/Layout';
// import styles from '../styles/index.module.scss'
import jwt from 'jsonwebtoken';

const IndexPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('You are not logged in');
  const [secret, setSecret] = useState<string>('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((data) => data.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? 'an admin' : 'not an admin'
        }`,
      );

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }).then((datas) => datas.json());

      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret('Nothing Available');
      }
    } else {
      setMessage('Something went wrong');
    }
  };
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p>{message}</p>
      <p>Secret: {secret}</p>
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <br />
          <input type="button" value="Login" onClick={handleFormSubmit} />
        </form>
      </div>
    </Layout>
  );
};

export default IndexPage;
