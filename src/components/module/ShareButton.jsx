"use client";
import styles from "./shareButton.module.css";
import { LuShare2 } from "react-icons/lu";
import { CopyToClipBoard } from "react-copt-to-clipboard";
import { useEffect, useState } from "react";

const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipBoard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipBoard>
  );
};

export default ShareButton;
