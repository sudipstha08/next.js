import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/main.scss';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;

// Next.js uses the App component to initialize pages
