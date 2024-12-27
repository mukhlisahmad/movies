"use client";

import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // Push the ad request to the adsbygoogle array
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8829449002369751"
      data-ad-slot="7841151981"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;