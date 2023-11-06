import "@/styles/globals.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps } : AppProps) {

  return (
    <div className="flex h-fit">
      <div className="flex flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}