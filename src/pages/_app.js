import '@/styles/globals.css'
import { store } from '../../app/Store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import FirstConnection from 'utils/FirstConnection'

export default function App({ Component, pageProps }) {

  const twoHoursInMs = 1000 * 60 * 60 * 2;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: twoHoursInMs,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <FirstConnection />
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>)
}
