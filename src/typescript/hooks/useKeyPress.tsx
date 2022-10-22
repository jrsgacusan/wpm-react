import { useState, useEffect } from 'react';

const useKeyPress = (callBack: (key: string) => void) => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key.length === 1 || key === 'Backspace') {
        setKeyPressed(key);
        callBack && callBack(key);
      }

      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    };
    //5
    const upHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
};

export default useKeyPress;
