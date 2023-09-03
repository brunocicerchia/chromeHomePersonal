"use client";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchComponent() {
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="primary"
          title="Google"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">YouTube</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
    </div>
  );
}
