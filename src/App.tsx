import React from "react";
import TemplateCharacters from "./components/wordsBoard/TemplateCharacters";
import { COBRA } from "./assets/images/index.js";
import DOWN from "./chevron-down-solid.svg";
import UP from "./chevron-up-solid.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <nav className="game_entitled">
        <p className="gen_title">Words & Letters</p>
      </nav>
      <div className="category_selection">
        <h3 className="title_category">Select Category</h3>
        <select name="category" id="word_category" className="input_category">
          <option value="8" data-selected="false">
            08 characters
          </option>
          <option value="9" data-selected="true">
            09 characters
          </option>
          <option value="10" data-selected="false">
            10 characters
          </option>
        </select>
      </div>
      <div className="showcase_game">
        <TemplateCharacters />
        <div className="template_score">
          <p className="current_step">
            move :{" "}
            <span className="count_move" data-switch-img="1">
              1
            </span>
            / 8
          </p>

          <div className="wrap_main_img" data-selection="0">
            <img src={COBRA} alt="picture missing" className="main_img" />
          </div>
          <div className="score_in">
            <p className="score_content">
              {" "}
              score:
              <span id="score" className="score">
                20
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="joystick_play_wrapper">
        <div className="entry_words" data-selection="0">
          <span className="wrapper_open">
            <div className="open_content">
              <span>word</span>
              <img src={DOWN} alt=" icon missing" width="20" height="20" />
            </div>
          </span>
          <div className="mini_template">
            <div className="row" data-selection="0">
              <span id="0" className="char_box"></span>
              <span id="1" className="char_box"></span>
              <span id="2" className="char_box"></span>
              <span id="3" className="char_box"></span>
              <span id="4" className="char_box"></span>
              <span id="5" className="char_box"></span>
              <span id="6" className="char_box"></span>
              <span id="7" className="char_box"></span>
            </div>
            <div className="row" data-selection="1">
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
            <div className="row" data-selection="2">
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
            <div className="structure_confirm">
              <input
                type="text"
                id="word_entry"
                className="entry_style"
                value=""
                placeholder="your_play"
              />

              <div className="confirm_input">
                <button type="button" id="btn_confirm" className="btn_confirm">
                  validate
                </button>
              </div>
            </div>

            <div className="close_content">
              <img src={UP} alt=" icon missing" width="20" height="20" />
            </div>
          </div>
        </div>
        <div className="restart_game">
          <div className="add_game">
            <button type="button" id="btn_play" className="btn_play_again">
              {" "}
              PLAY AGAIN
            </button>
          </div>

          <div className="reset_input">
            <button type="button" id="btn_reset" className="btn_reset_game">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
