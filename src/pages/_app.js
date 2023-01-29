import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Loader from "@/components/loader/Loader";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = router.pathname;

  const loaderFadeAnimation = {
    key: "loader fade",
    initial: { opacity: 1 },
    animate: { opacity: [1, 0, 0] },
    transition: { delay: 3.8, duration: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    const loadDuration = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(loadDuration);
    };
  }, []);

  return (
    <div>
      {loading && path === "/" && (
        <div>
          <AnimatePresence>
            <motion.div {...loaderFadeAnimation}>
              <Loader />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {!loading && (
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      )}
    </div>
  );
}
