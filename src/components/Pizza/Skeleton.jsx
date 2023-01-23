import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3eded"
    foregroundColor="#c7c6c6"
    {...props}
  >
    <rect x="0" y="280" rx="10" ry="10" width="270" height="28" />
    <rect x="0" y="325" rx="10" ry="10" width="280" height="88" />
    <rect x="65" y="350" rx="0" ry="0" width="2" height="0" />
    <rect x="0" y="435" rx="10" ry="10" width="124" height="27" />
    <rect x="82" y="454" rx="0" ry="0" width="5" height="0" />
    <circle cx="130" cy="120" r="120" />
    <rect x="142" y="422" rx="10" ry="10" width="135" height="45" />
  </ContentLoader>
);

export default Skeleton;
