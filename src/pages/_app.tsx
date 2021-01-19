import 'antd/dist/antd.css';
import '../styles/main.scss';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

// Next.js uses the App component to initialize pages
