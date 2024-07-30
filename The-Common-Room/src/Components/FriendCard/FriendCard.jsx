import "./FriendCard.css";

export default function FriendCard({ name, house, image, handleAddNewFriend }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{house}</h5>

        <button onClick={handleAddNewFriend} className="btn btn-primary">
          Add New Friend
        </button>
        <button className="btn btn-primary">Restart</button>
      </div>
    </div>
  );
}
