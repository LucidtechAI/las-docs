import React, { Fragment, useEffect, useState } from 'react';
import { getApplicationKeyMap } from 'react-hotkeys';

import styles from './HotkeyHint.module.css';

const keyMap = {
  right: '→',
  left: '←',
};

type HotkeyHintProps = {
  toggleHint: () => void;
  show: boolean;
}

const HotkeyHint = ({show, toggleHint}: HotkeyHintProps): JSX.Element => {
  const keybinds = getApplicationKeyMap();

  return (
    <>
      <div className={styles['hint-toggle']} onClick={toggleHint}>
        <span className="fe fe-help-circle" />
        {show ? 'Hide ' : 'Show '} keybinds (ctrl + F1)
      </div>
      {show && (
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
                            <Fragment key={key}>
                              {i === 0 ? '' : ' + '}
                              <kbd className={styles.key}>{keyMap[key] || key}</kbd>
                            </Fragment>
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
