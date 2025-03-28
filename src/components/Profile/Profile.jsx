import styles from "./Profile.module.css";

const Profile = ({ name, image, tag, location, stats }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <img className={styles.img} src={image} alt={`${name} avatar`} />
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>@{tag}</p>
      <p className={styles.description}>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.statsTitle}>Followers</span>
        <span className={styles.stats}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.statsTitle}>Views</span>
        <span className={styles.stats}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.statsTitle}>Likes</span>
        <span className={styles.stats}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
