import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Loader from "@/components/loader/Loader";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const loadDuration = setTimeout(() => {
    console.log("the loader is GONEEE :(");
    setIsLoading(!isLoading);
  }, 2500);

  useEffect(() => {
    loadDuration;
    clearTimeout(loadDuration);
  });

  const loaderFadeAnimation = {
    key: "loader fade",
    initial: { opacity: 1 },
    animate: { opacity: [1, 0, 0] },
    transition: {delay: 3.8, duration: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <AnimatePresence>
            <motion.div {...loaderFadeAnimation}>
              <Loader />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      )}
    </div>
  );
}
