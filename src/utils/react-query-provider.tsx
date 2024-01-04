// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { deDE } from '@mui/x-date-pickers';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';
import CommonCodeProviders from './common-code-provider';

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 refetch
          refetchOnMount: false, // 데이터가 stale 상태이면 컴포넌트가 마운트될 때 refetch
          retry: 1, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {/* <ReactQueryStreamedHydration> */}
      <CommonCodeProviders>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CommonCodeProviders>
      {/* </ReactQueryStreamedHydration> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#20B194' },
  },
});
