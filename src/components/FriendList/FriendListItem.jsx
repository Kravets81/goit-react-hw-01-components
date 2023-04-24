import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendWrap}>
      <span className={`${css.friends__status} ${css[isOnline]}`}></span>
      <img
        className={css.friendImg}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </div>
  );
}
