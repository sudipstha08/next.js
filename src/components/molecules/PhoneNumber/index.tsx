import React, { useState, createRef, FC } from "react";
import { Wrapper } from "./style";

interface IProps {
  className?: string;
  value?: string;
  onChange?: (params: any) => void;
}

const PhoneNumber: FC<IProps> = ({ onChange, value, className }) => {
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

  const getPart = (name) => {
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
      e.charCode === 46 ||
      e.charCode === 8 ||
      e.charCode === 9 ||
      e.charCode === 27 ||
      e.charCode === 13 ||
      e.charCode === 110 ||
      // Allow: Ctrl+A, Command+A
      (e.charCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.charCode >= 35 && e.charCode <= 40)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (e.charCode < 48 || e.charCode > 57) {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e) => {
    // 'delete' and input is empty, then go to previous input
    const currentPart = parts.filter(
      (p) => p.part === e.target.name,
    )?.[0] as any;
    const currentElement = currentPart?.ref?.current as HTMLInputElement;
    if (e.keyCode === 8 && !currentElement?.value) {
      const previous = currentElement?.previousElementSibling as HTMLInputElement;
      if (previous && previous.tagName.toLowerCase() == "input") {
        previous.focus();
      }
    }

    // if tab, left, or right just exit
    if (
      e.keyCode === 9 ||
      e.keyCode === 16 ||
      (e.keyCode >= 35 && e.keyCode <= 40)
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
        value={state[name]}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        className="pnum-input"
      />
    );
  };
  return (
    <>
      <Wrapper className={className}>
        {parts.map((p) => {
          return renderPart(p.part, p.num, p.placeholder, p.ref);
        })}
      </Wrapper>
    </>
  );
};

export { PhoneNumber };
