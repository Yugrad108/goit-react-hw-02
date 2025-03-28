import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            image={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
