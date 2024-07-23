"use client";
import styles from "./shareButton.module.css";
import { LuShare2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
