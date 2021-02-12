import React, { Fragment } from 'react';
import { getApplicationKeyMap } from 'react-hotkeys';

import styles from './HotkeyHint.module.css';

const HotkeyHint = (): JSX.Element => {
  const test = getApplicationKeyMap();
  console.log(test);
  return (
    <div className={styles.container}>
      {Object.keys(test).map((command) => {
        const { name, sequences } = test[command];

        return (
          <div key={command}>
            <div>{name}:</div>
            <div>
              {sequences.map((seq, i) => {
                return (
                  <Fragment key={seq.sequence.toString()}>
                    {seq.sequence
                      .toString()
                      .split('+')
                      .map((key, i) => (
                        <>
                          {i === 0 ? '' : ' + '}
                          <kbd>{key}</kbd>
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
  );
};

export default HotkeyHint;
