import React, { useState } from 'react';
import './App.css';

function App() {
  // Khai báo state để lưu số lần nhấn nút
  const [count, setCount] = useState(0);

  // Hàm xử lý khi người dùng nhấn nút
  const handleClick = () => {
    setCount(count + 1); // Tăng giá trị của count lên 1
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ứng dụng đếm số lần nhấn nút</h1>
        <button onClick={handleClick}>Nhấn tôi!</button>
        <p>Số lần nhấn nút: {count}</p>
      </header>
    </div>
  );
}

export default App;
