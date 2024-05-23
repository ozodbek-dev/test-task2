import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Spinner from "components/spinner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<Spinner />}>
          <App />
        </React.Suspense>
      </QueryClientProvider>
    </Provider>
);
