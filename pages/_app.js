import Layout from "@/components/layout";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "@/store";
import { Poppins, Exo_2 } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/i18n";
import { appWithTranslation } from "next-i18next";

export const Poppins_400 = Poppins({ subsets: ["latin"], weight: "400" });
export const Poppins_300 = Poppins({ subsets: ["latin"], weight: "300" });
export const Exo2_700 = Exo_2({ subsets: ["latin"], weight: "700" });

config.autoAddCss = false;
const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout Poppins_400={Poppins_400}>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
