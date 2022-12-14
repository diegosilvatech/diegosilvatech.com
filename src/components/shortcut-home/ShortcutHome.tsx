import { useState, useEffect } from 'react';

import { Button } from 'components';
import { Text } from 'components';
import { useKBar } from 'kbar';

export type ShortcutHomeProps = { disableCommand?: boolean };

const ShortcutHome = ({ disableCommand }: ShortcutHomeProps) => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <Button handleClick={disableCommand ? () => null : query.toggle}>
          Toque para iniciar →
        </Button>
      );
    } else if (isMac) {
      return (
        <Button handleClick={disableCommand ? () => null : query.toggle}>
          Pressione <Text as="kbd">⌘</Text> <Text as="kbd">K</Text> para iniciar
          →
        </Button>
      );
    }
  }
  return (
    <Button handleClick={disableCommand ? () => null : query.toggle}>
      Pressione <Text as="kbd">ctrl</Text> <Text as="kbd">K</Text> para iniciar
      →
    </Button>
  );
};

export { ShortcutHome };
