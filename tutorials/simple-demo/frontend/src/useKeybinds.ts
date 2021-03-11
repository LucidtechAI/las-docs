import { useEffect, useState } from 'react';

export function useKeybinds(): { showKeybinds: boolean; onToggle: () => void } {
  const [showKeybinds, setShowKeybinds] = useState(true);
  const localStorageIdentifier = 'defaultForm:showKeybindHints';

  // check user preference for showing/displaying keybinds
  useEffect(() => {
    const preference = localStorage.getItem(localStorageIdentifier);
    setShowKeybinds(preference === 'true');
  }, []);

  const storePreference = (show: boolean) => {
    localStorage.setItem(localStorageIdentifier, show.toString());
  };

  const onToggle = () => {
    setShowKeybinds((prev) => {
      storePreference(!prev);
      return !prev;
    });
  };

  return { showKeybinds, onToggle };
}
