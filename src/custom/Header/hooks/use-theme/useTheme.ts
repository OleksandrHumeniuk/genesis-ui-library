import type { ChangeEvent } from 'react';
import { useState } from 'react';

const useTheme = () => {
  const [checked, setChecked] = useState(
    JSON.parse(
      localStorage.getItem("THEME") ?? JSON.stringify(false),
    ) === true,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(
      "THEME",
      JSON.stringify(event.target.checked),
    );
    setChecked(event.target.checked);
  };

  return { checked, handleChange };
};

export default useTheme;
