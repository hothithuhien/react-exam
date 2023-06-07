
import React, { useEffect, useRef } from 'react';
export default function SelectUseRef() {
    const selectRef = useRef(null);
  
    useEffect(() => {
        selectRef.current.value = "value3";
    }, []);
  
    return (
      <div>
        <h1>Choose the option</h1>
        <select ref={selectRef}>
          <option value="value1">Option 1</option>
          <option value="value2">Option 2</option>
          <option value="value3">Option 3</option>
        </select>
      </div>
    );
  }