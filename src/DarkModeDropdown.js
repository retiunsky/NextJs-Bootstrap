import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';

const IS_SERVER = typeof window === 'undefined';

let storedTheme = IS_SERVER ? 'light' : localStorage.getItem('theme');

const arrayOfThemes = [
  { name: 'Light', icon: '☀️', mode: 'light' },
  { name: 'Dark', icon: '🌙' , mode: 'dark' },
  { name: 'Auto', icon: '⚙️' , mode: 'system' },
];

function modifyDOM(theme) {
  if (
    theme === 'auto' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}

export default function DarkModeDropdown() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  console.log("resolvedTheme", resolvedTheme);

  const [mode, setMode] = useState(getPreferredTheme());

  useEffect(() => {
    if (IS_SERVER) return;
    modifyDOM(mode); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (resolvedTheme=="light"){setPreferredTheme("light")}
    if (resolvedTheme=="dark"){setPreferredTheme("dark")}
  }, [resolvedTheme]);

  function getPreferredTheme() {
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function setPreferredTheme(theme) {
    modifyDOM(theme)

    localStorage.setItem('theme', theme);
    setMode(theme);
  }

  

  return (
    <NavDropdown suppressHydrationWarning
      title={
        <>
          {
            arrayOfThemes.find((theme) => theme.name.toLowerCase() === mode)
              ?.icon
          }{' '}
        </>
      }
    >
      {arrayOfThemes.map((theme) => {
        const active = mode === theme.name.toLowerCase();
        const themeChanger = () => {
          setPreferredTheme(theme.name.toLocaleLowerCase())
                    setTheme(theme.mode)
        }
        return (
          <NavDropdown.Item suppressHydrationWarning
            key={theme.name}
            className={active ? 'active' : ''}
            onClick={themeChanger}
          >
            {' '}
            {theme.icon} {theme.name} {theme.mode} {active ? '✔️' : ''}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

// <select value={theme} onChange={e => setTheme(e.target.value)} data-test-id='theme-selector'>
//         <option value="system">System</option>
//         {mounted && (
//           <>
//             <option value="dark">Dark</option>
//             <option value="light">Light</option>
//           </>
//         )}
//       </select>