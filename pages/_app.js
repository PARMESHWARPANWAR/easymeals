import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { FilterContextProvider } from "../context/FilterContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <FilterContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </FilterContextProvider>
    </SessionProvider>
  );
}
