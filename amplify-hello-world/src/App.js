import React from 'react';

function App() {
  const handleClick = () => {
    alert('월드!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        헬로
      </button>
    </div>
  );
}

export default App;
