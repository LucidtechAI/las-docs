import React, { Fragment, useEffect, useState } from 'react';
import { getApplicationKeyMap } from 'react-hotkeys';

import styles from './HotkeyHint.module.css';

const keyMap = {
  right: '→',
  left: '←',
};

const HotkeyHint = (): JSX.Element => {
  const [showKeybinds, setShowKeybinds] = useState(true);
  const keybinds = getApplicationKeyMap();

  // check user preference for showing/displaying keybinds
  useEffect(() => {
    const preference = localStorage.getItem('showKeybindHints');
    setShowKeybinds(preference === 'true');
  }, []);

  const storePreference = (show: boolean) => {
    localStorage.setItem('showKeybindHints', show.toString());
  };

  const onToggle = () => {
    storePreference(!showKeybinds);
    setShowKeybinds((prev) => !prev);
  };

  return (
    <>
      <div className={styles['hint-toggle']} onClick={onToggle}>
        <span className="fe fe-help-circle" />
        {showKeybinds ? 'Hide ' : 'Show '} keybinds (ctrl + F1)
      </div>
      {showKeybinds && (
        <div className={styles.container}>
          {Object.keys(keybinds).map((command) => {
            const { name, sequences } = keybinds[command];

            return (
              <div key={command}>
                <div className={styles.description}>{name}:</div>
                <div className={styles.keybinds}>
                  {sequences.map((seq, i) => {
                    return (
                      <Fragment key={seq.sequence.toString()}>
                        {seq.sequence
                          .toString()
                          .split('+')
                          .map((key, i) => (
                            <>
                              {i === 0 ? '' : ' + '}
                              <kbd className={styles.key}>{keyMap[key] || key}</kbd>
                            </>
                          ))}
                        {sequences.length > i + 1 && ', '}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HotkeyHint;
