import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Loader from "@/components/loader/Loader";
import React,{ useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  
  const loadDuration = setTimeout(() => {
  console.log("the loader is here");
  setIsLoading(!isLoading);
}, 3000);


  useEffect(() => {
  loadDuration
  clearTimeout(loadDuration)
});

return (
    <div>
      
    {/* {
    isLoading ? <div><Loader /> </div>: */}
    {/* <div> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
    {/* </div>} */}
    
    </div>
  );
}
