// import React from "react";
import { motion } from "framer-motion";
import styles from "./Bg.module.scss";

const Bg = () => {
  return (
    <div className={styles.bg}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path
          id="blob1"
          d="M451,295Q422,340,397,383.5Q372,427,324,445.5Q276,464,223.5,460.5Q171,457,121.5,432Q72,407,71.5,350.5Q71,294,51,245Q31,196,73.5,163.5Q116,131,145.5,92Q175,53,224,55.5Q273,58,325,62Q377,66,423,100.5Q469,135,474.5,192.5Q480,250,451,295Z"
          fill="#FF6F61"
        ></path>
      </svg>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path
          id="blob2"
          d="M451,295Q422,340,397,383.5Q372,427,324,445.5Q276,464,223.5,460.5Q171,457,121.5,432Q72,407,71.5,350.5Q71,294,51,245Q31,196,73.5,163.5Q116,131,145.5,92Q175,53,224,55.5Q273,58,325,62Q377,66,423,100.5Q469,135,474.5,192.5Q480,250,451,295Z"
          fill="#FF6F61"
        ></path>
      </svg>
    </div>
  );
};

export default Bg;
