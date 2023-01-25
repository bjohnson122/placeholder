import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { Raleway } from '@next/font/google'


const inter = Raleway({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
