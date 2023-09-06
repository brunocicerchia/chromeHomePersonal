"use client";
import styles from "./styles.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
let state = true;

export default function SearchComponent() {
  const [buttonText, setButtonText] = useState("Google");
  const [buttonAlt, setButtonAlt] = useState("Youtube");
  const [urlSearch, setUrlSearch] = useState(
    "https://www.google.com/search?q="
  );
  const [searchInput, setSearchInput] = useState("");

  function handleClick() {
    //console.log("State start value: " + state);
    if (state) {
      state = false;
      setUrlSearch("https://www.youtube.com/results?search_query=");
      setButtonText("YouTube");
      setButtonAlt("Google");
      //console.log(state);
    } else {
      state = true;
      setUrlSearch("https://www.google.com/search?q=");
      setButtonText("Google");
      setButtonAlt("Youtube");
      //console.log(state);
    }
    //console.log("State final value: " + state);
  }

  function redirectSearch() {
    window.location.assign(urlSearch + searchInput);
  }

  return (
    <div>
      <InputGroup>
        <DropdownButton title={buttonText} id="input-group-dropdown-1">
          <Dropdown.Item href="#" onClick={handleClick}>
            {buttonAlt}
          </Dropdown.Item>
        </DropdownButton>
        <Form.Control
          type="text"
          aria-label="Text input with dropdown button"
          onChange={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
          // onKeyDown when press enter redirect to search
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              redirectSearch();
            }
          }}
        />
      </InputGroup>
    </div>
  );
}
