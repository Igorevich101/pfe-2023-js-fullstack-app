import React from 'react';
import styles from './UserProfile.module.scss';
import CONSTANTS from '../../constants';

const UserProfile = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <article className={styles.container}>
      <p className={styles.containerHeading}>{fullName}</p>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={user.imgSrc ? user.imgSrc : CONSTANTS.PLACEHOLDER_USER_PIC}
          alt="fullName"
        />
      </div>
      <section className={styles.details}>
        <h3 className={styles.detailsHeading}>User Details:</h3>
        <ul className={styles.detailsList}>
          <li className={styles.listItems}>
            <div className={styles.detailsText}>
              <span className={styles.detailsTextBold}>Email:</span>
              {user.email}
            </div>
          </li>
          <li className={styles.listItems}>
            <div className={styles.detailsText}>
              <span className={styles.detailsTextBold}>Gender:</span>
              {user.isMale ? 'Male' : 'Female'}
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default UserProfile;
