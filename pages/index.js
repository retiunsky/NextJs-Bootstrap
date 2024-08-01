import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';

import { useBootstrapTheme } from '../src/BootstrapThemeProvider';
import FormsExample from '../src/comps/FormsComps';
import HTMLExample from '../src/comps/HTMLComps';
import DarkModeDropdown from '../src/DarkModeDropdown';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const {
    theme: nextTheme,
    resolvedTheme,
    setTheme: setNextTheme,
  } = useTheme();

  useEffect(() => setMounted(true), []);

  const { setTheme } = useBootstrapTheme();

  return (
    <>
      <div
        style={{ width: '100vw', height: '100vh', paddingTop: '70px' }}
        className='list-group-item list-group-item-light'
      >
        <h1 style={{ marginLeft: '50px' }}>
          NextJs & Bootstrap | Bootswatch-themes with dark mode
        </h1>
        <div style={{ display: 'none' }}>
          <DarkModeDropdown />
        </div>
        <Stack
          style={{ marginTop: '20px', marginLeft: '50px' }}
          direction='horizontal'
          gap={2}
        >
          <Button
            onClick={() => {
              setTheme('morph');
              setNextTheme('dark');
            }}
          >
            Switch Morph
          </Button>
          <Button
            onClick={() => {
              setTheme('minty');
              setNextTheme('dark');
            }}
          >
            Switch Minty
          </Button>
          <Button
            onClick={() => {
              setTheme('sketchy');
              setNextTheme('dark');
            }}
          >
            Switch Sketchy
          </Button>
          <Button
            onClick={() => {
              setTheme('solar');
              setNextTheme('dark');
            }}
          >
            Switch Solar
          </Button>
        </Stack>
        <Stack
          style={{ marginTop: '10px', marginLeft: '50px' }}
          direction='horizontal'
          gap={2}
        >
          <Button
            variant='outline-primary'
            onClick={() => {
              setTheme('morph');
              setNextTheme('light');
            }}
          >
            Switch Morph
          </Button>
          <Button
            variant='outline-primary'
            onClick={() => {
              setTheme('minty');
              setNextTheme('light');
            }}
          >
            Switch Minty
          </Button>
          <Button
            variant='outline-primary'
            onClick={() => {
              setTheme('sketchy');
              setNextTheme('light');
            }}
          >
            Switch Sketchy
          </Button>
          <Button
            variant='outline-primary'
            onClick={() => {
              setTheme('solar');
              setNextTheme('light');
            }}
          >
            Switch Solar
          </Button>
        </Stack>
        <HTMLExample />
        <FormsExample />
      </div>
    </>
  );
};

export default Index;
