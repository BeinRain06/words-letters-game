import React from "react";
import "./TemplateCharacters.css";

export interface templateProps {
  category: number;
}

const TemplateCharacters: React.FC<templateProps> = (props) => {
  return (
    <div className="wrapper_template">
      <div
        className={props.category === 8 ? "template_1 current" : "template_1"}
      >
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
        </div>
      </div>

      <div
        className={props.category === 9 ? "template_2 current" : "template_2"}
      >
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
        </div>
      </div>

      <div
        className={props.category === 10 ? "template_3 current" : "template_3"}
      >
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
        <div className="row">
          <span id="0" className="char_box"></span>
          <span id="1" className="char_box"></span>
          <span id="2" className="char_box"></span>
          <span id="3" className="char_box"></span>
          <span id="4" className="char_box"></span>
          <span id="5" className="char_box"></span>
          <span id="6" className="char_box"></span>
          <span id="7" className="char_box"></span>
          <span id="8" className="char_box"></span>
          <span id="9" className="char_box"></span>
        </div>
      </div>
    </div>
  );
};

export default TemplateCharacters;
