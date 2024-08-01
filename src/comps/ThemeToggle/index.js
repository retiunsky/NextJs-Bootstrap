import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';

export default function ThemeToggle() {
  const { theme: nextTheme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      style={{
        background: 'transparent',
        border: 'none',
      }}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {resolvedTheme === 'light' ? <BrightnessHigh /> : <Moon />}
    </button>
  );
}
