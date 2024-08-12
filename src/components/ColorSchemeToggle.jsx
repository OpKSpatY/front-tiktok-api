import React from 'react';
import { Group, Switch, useMantineColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" spacing="xs">
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="md"
        onLabel={<FaMoon style={{ color: '#808080' }} />}
        offLabel={<FaSun style={{ color: '#FFD700' }} />}
        aria-label="Toggle color scheme"
      />
    </Group>
  );
}

export default ColorSchemeToggle;
