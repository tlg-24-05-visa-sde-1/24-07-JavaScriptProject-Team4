import { useEffect, useState } from "react";
import FriendCard from "../Components/FriendCard/FriendCard";
import PageHeader from "../Components/PageHeader";

function CommonPage() {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  function handleAddNewFriend() {
    let randIdx = Math.floor(Math.random() * friends.length);
    while (
      selectedFriends.includes(randIdx) &&
      selectedFriends.length !== friends.length
    ) {
      randIdx = Math.floor(Math.random() * friends.length);
    }
    if (selectedFriends.length !== friends.length) {
      setSelectedFriends([...selectedFriends, randIdx]);
      setFriendsList([...friendsList, friends[randIdx]]);
    }
  }

  useEffect(() => {
    //fetch api results make api call
    /* const apiResults = [
      { name: "harry potter", house: "Gryffendoor", image: "..." },
      { name: "Malfoy", house: "Slythern", image: "..." },
      { name: "tomiwa", house: "hufflepuff", image: "..." },
      { name: "Douglas", house: "Slythern", image: "..." },
    ];*/
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((response) => response.json())
      .then((data) => {
        const dataWithImages = data.filter((friend) => friend.image !== "");
        setFriends(dataWithImages);
      });
  }, []);

  useEffect(() => {
    const randIdx = Math.floor(Math.random() * friends.length);

    setSelectedFriends([randIdx]);
    friends.length && setFriendsList([friends[randIdx]]);
  }, [friends]);

  return (
    <div>
<<<<<<< HEAD
      <HeaderCommonRoom name="Gryffindor" />
      <FriendCard />
=======
      <PageHeader />
      {friendsList.length ? (
        friendsList.map((friendItem, index) => {
          return (
            <FriendCard
              key={index}
              name={friendItem.name}
              house={friendItem.house}
              image={friendItem.image}
              handleAddNewFriend={handleAddNewFriend}
            />
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
      {/* {friendsList.length &&
        friendsList.map((friendItem, index) => {
          return (
            <FriendCard
              key={index}
              name={friendItem.name}
              house={friendItem.house}
              image={friendItem.image}
              handleAddNewFriend={handleAddNewFriend}
            />
          );
        })} */}
>>>>>>> main
    </div>
  );
}

export default CommonPage;
