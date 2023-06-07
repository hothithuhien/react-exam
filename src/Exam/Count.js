import React, { useState } from 'react';
export default function Counter() {
    // Khai báo trạng thái count với giá trị khởi tạo ban đầu là 0
    const [count, setCount] = useState(0);
  
    // Hàm tăng giá trị count
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }