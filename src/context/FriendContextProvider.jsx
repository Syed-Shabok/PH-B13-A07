import React, { createContext, useEffect, useState } from "react";

export const FriendContext = createContext();

const FriendContextProvider = ({ children }) => {
  const [friendsList, setFriendsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriendsList(data);
      setLoading(false);

      //   console.log(data);
    };

    fetchFriends();
  }, []);

  const data = { friendsList, loading };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendContextProvider;
