import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ image, name, status }) => {
  return (
    <div className={styles.content}>
      <img src={image} alt="Avatar" width="48" className={styles.img} />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx({
          [styles.online]: status,
          [styles.offline]: !status,
        })}
      >
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
