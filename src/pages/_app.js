import AppProvider from "../contexts/appContext";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "../styles/index.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="absolute top-0 left-0 right-0 bottom-auto w-full bg-cover bg-pattern h-1/3">
        <Image src="/bg-pattern.svg" alt="pattern" layout="fill" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen gap-12 text-center">
        {/* Bg pattern */}
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default MyApp;
