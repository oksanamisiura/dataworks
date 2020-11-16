import React, { useState } from "react";
import Head from "next/head";
import toggleStyles from "../styles/toggle.module.css";
import Link from "next/link";

const Toggle = () => {
  const [showText, hideText] = useState(false);
  const [add, minus] = useState(true);

  return (
    <div>
      {showText && (
        <div id="myDiv">
          <div className={toggleStyles.myDiv_container}>
            <div className={toggleStyles.aside_left}>
              <div className={toggleStyles.aside_left_item}>
                <div>Section:&nbsp;&nbsp;Basic</div>
                <div>
                  Page:&nbsp;&nbsp;&nbsp;Extract the titles and image path
                </div>
              </div>
              <div className={toggleStyles.aside_left_item}>
                <div className={toggleStyles.instruction_title}>
                  Instructions
                </div>
              </div>
              <p className={toggleStyles.aside_left_item}>
                The objective of this page is to extract the titles, image path
                and simbols.
              </p>
              <p className={toggleStyles.aside_left_item}>
                Task - output as separate fields:
              </p>
              <div className={toggleStyles.aside_left_item}>
                <div>
                  2x titles = extract the titles, make one lower-case, make one
                  upper-case
                </div>
                <div>1x image = extract the path to the image</div>
                <div>
                  Price = extract the price, and remove the dollar sign at the
                  start
                </div>
              </div>
              <div className={toggleStyles.aside_left_item}>
                <div>(1) Extract the text</div>
                <div>(2) Extract the first ten letters of the text</div>
                <div>(3) Extract the first ten words of the text</div>
              </div>
            </div>
            <div className={toggleStyles.aside_right}>
              <div className={toggleStyles.aside_right_item}>
                Level: Beginner
              </div>
              <div className={toggleStyles.aside_right_item}>
                Skills learned:
              </div>
              <div className={toggleStyles.aside_right_item}>
                <div>Actions - css selectors</div>
                <div>Actions - JSON array</div>
              </div>
              <div className={toggleStyles.aside_right_item}>
                Actions - Field concatination
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className={toggleStyles.show_btn}
        onClick={() => {
          hideText(!showText);
          minus(!add);
        }}
      >
        {add ? "Click to Show Instructions" : "Click to Hide Instructions"}
      </button>
    </div>
  );
};
export default Toggle;
