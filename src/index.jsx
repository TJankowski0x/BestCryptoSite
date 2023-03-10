import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './CSS/index.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
