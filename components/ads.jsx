"use client";

import { useEffect } from "react";

const Ads = () => {
  useEffect(() => {
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    // Push the ad to the adsbygoogle array
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("Working Good");
    } catch (e) {
      console.error("Adsbygoogle push error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6921856465558245"
      data-ad-slot="2560710651"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ads;
