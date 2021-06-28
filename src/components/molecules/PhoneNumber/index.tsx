import React, { useState, createRef, FC } from "react";
import { Wrapper, Container } from "./style";

interface IProps {
  className?: string;
  value?: string;
  error?: string | boolean;
  onChange?: (params: any) => void;
}

const KEY_CODE = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  ALT: 18,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE_BAR: 32,
  END: 35,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  DIGIT_ZERO: 48,
  DIGIT_NINE: 57,
  CHAR_A: 65,
  NUM_PAD_DOT: 110,
};

const PhoneNumber: FC<IProps> = ({ onChange, value, className, error }) => {
  const p = value || "";
  const [state, setState] = useState<any>({
    part1: p ? p.substr(0, 3) : "",
    part2: p ? p.substr(3, 3) : "",
    part3: p ? p.substr(6, 4) : "",
  });

  const parts = [
    { part: "part1", num: 3, placeholder: "000", ref: createRef() },
    { part: "part2", num: 4, placeholder: "0000", ref: createRef() },
    { part: "part3", num: 3, placeholder: "000", ref: createRef() },
  ];

  const getPart = (name: string) => {
    const currentPart = parts.filter((p) => p.part === name)?.[0] as any;
    const currentElement = currentPart?.ref?.current as HTMLInputElement;
    return currentElement?.value as any;
  };

  const getValue = () => {
    // Merge the 3 distinct parts into a single phone number
    const phoneNumber = (getPart("part1") +
      getPart("part2") +
      getPart("part3")) as string;
    return phoneNumber;
  };

  const handleChange = (e) => {
    // Update the data in the state
    const data = {};
    data[e.target.name] = e.target.value;
    setState(data);
    // Call the parent objects 'onChange' method only if defined
    if (onChange) {
      onChange(getValue());
    }
  };

  const handleKeyPress = (e: any) => {
    if (
      // Allow: backspace, delete, tab, escape, enter
      e.charCode === KEY_CODE.DELETE ||
      e.charCode === KEY_CODE.BACKSPACE ||
      e.charCode === KEY_CODE.TAB ||
      e.charCode === KEY_CODE.ESC ||
      e.charCode === KEY_CODE.ENTER ||
      e.charCode === KEY_CODE.NUM_PAD_DOT ||
      // Allow: Ctrl+A, Command+A
      (e.charCode === KEY_CODE.CHAR_A &&
        (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.charCode >= KEY_CODE.END && e.charCode <= KEY_CODE.DOWN)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (e.charCode < KEY_CODE.DIGIT_ZERO || e.charCode > KEY_CODE.DIGIT_NINE) {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: any) => {
    // 'delete' and input is empty, then go to previous input
    const currentPart = parts.filter(
      (p) => p.part === e.target.name,
    )?.[0] as any;
    const currentElement = currentPart?.ref?.current as HTMLInputElement;

    if (e.keyCode === KEY_CODE.BACKSPACE && !currentElement?.value) {
      const previous = currentElement?.previousElementSibling as HTMLInputElement;
      if (previous && previous.tagName.toLowerCase() == "input") {
        previous.focus();
      }
    }

    // if tab, left, or right just exit
    if (
      e.keyCode === KEY_CODE.TAB ||
      e.keyCode === KEY_CODE.SHIFT ||
      (e.keyCode >= KEY_CODE.END && e.keyCode <= KEY_CODE.DOWN)
    ) {
      return;
    }

    const maxLength = parseInt(
      currentElement.attributes["maxlength"].value,
      10,
    );

    const myLength = currentElement.value.length;
    if (myLength >= maxLength) {
      let next = currentElement as any;
      while ((next = next?.nextElementSibling)) {
        if (next == null) {
          break;
        }
        if (next.tagName.toLowerCase() == "input") {
          next.focus();
          break;
        }
      }
    }
  };

  const renderPart = (name, length, placeholder, ref) => {
    return (
      <input
        key={name}
        type="text"
        name={name}
        ref={ref}
        maxLength={length}
        defaultValue={state[name]}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        className="pnum-input"
      />
    );
  };

  return (
    <Container>
      <Wrapper className={className}>
        {parts.map((p) => {
          return renderPart(p.part, p.num, p.placeholder, p.ref);
        })}
      </Wrapper>
      <div className="seperator">
        <span>―</span>
        <span>―</span>
      </div>
      {error && <div className="error">{error}</div>}
    </Container>
  );
};

export { PhoneNumber };
