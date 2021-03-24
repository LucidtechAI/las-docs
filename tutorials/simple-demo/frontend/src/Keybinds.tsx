import React, { Fragment } from 'react';
import { getApplicationKeyMap } from 'react-hotkeys';

import styles from './Keybinds.module.css';

type KeybindsProps = {
  toggleHint: () => void;
  show: boolean;
};

const Keybinds = ({ show, toggleHint }: KeybindsProps): JSX.Element => {
  const keybinds = getApplicationKeyMap();

  return (
    <>
      <div className={styles['hint-toggle']} onClick={toggleHint}>
        <span className="fe fe-help-circle" />
        {show ? 'Hide ' : 'Show '} keybinds (shift + alt + ?)
      </div>
      {show && (
        <div className={styles.container}>
          {Object.keys(keybinds).map((command) => {
            const { name, sequences } = keybinds[command];

            return (
              <div key={command} className={styles.command}>
                <div className={styles.description}>{name}:</div>
                <div className={styles.keybinds}>
                  {sequences.map((seq, i) => {
                    return (
                      <Fragment key={seq.sequence.toString()}>
                        {seq.sequence
                          .toString()
                          .split('+')
                          .map((key, i) => (
                            <Fragment key={key + i}>
                              {i === 0 ? '' : ' + '}
                              <kbd className={styles.key}>{key}</kbd>
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

export default Keybinds;
