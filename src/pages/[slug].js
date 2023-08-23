import React, { useEffect } from "react";

const slug = () => {
  useEffect(() => {
    window.location.replace("http://chromeland.vercel.app/signup");
  }, []);
  return <div>{""}</div>;
};

export default slug;
