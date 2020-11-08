import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAboutInfo } from './../../../store/actions/aboutActions.js';

import styles from './About.module.css';

export const About = () => {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about);

  useEffect(() => dispatch(setAboutInfo()), [dispatch]);

  return (
    <section className={styles.about}>
      <h1 className={styles.heading}>About</h1>
      <div class={styles.list}>
        {about.map(({ title }, index) => (
          <div className={styles.card} key={index}>
            <h4 className={styles.title}>{title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
