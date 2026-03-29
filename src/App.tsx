import { useState } from 'react';

function App() {
  const [count, _setCount] = useState<number>(9);
  function handleClick(index: number) {
    console.log(`Clicked on item ${index + 1}`);
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-3  w-30 border-2 border-amber-800">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="w-10 h-10 border-2 border-amber-800 flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
