import { FC, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import LeftNavbar from "v2/components/LeftNavbar";
import TopNavbar from "v2/components/TopNavbar";

import ErrorBoundary from "v2/components/ErrorBoundary";

import "react-toastify/dist/ReactToastify.css";

// Custom polyfills
import "core-js/proposals/string-match-all";
import "core-js/stable/array/find-index";

type Page<P = {}> = NextPage<P> & {
  PageTitle?: FC;
};

type Props = AppProps & {
  Component: Page;
};

const WarpSpeed: FC<Props> = ({ Component, pageProps }) => {
  const PageTitle = Component.PageTitle ?? (() => <></>);
  const { asPath } = useRouter();

  useEffect(() => {
    document.querySelector("body")!.classList.remove("classic");
  }, []);

  return (
    <>  
      
        <LeftNavbar />
        <main className="sm:pl-64">
          <div className="px-4 py-2 sm:px-10 sm:py-10 text-foreground">
            <TopNavbar PageTitle={PageTitle} />
            <ErrorBoundary key={asPath}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </div>
        </main>
        </>
  );
};

export default WarpSpeed;
