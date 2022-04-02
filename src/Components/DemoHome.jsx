import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Home({ user, setUser }) {
  
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}`)
      .then((res) => {
        const userDetails = res.data.user;
        setUser(userDetails);
      })
      .catch((error) => {
        console.log(error.response);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Hello {user.name}</h1>
    </div>
  );
}

export default Home;
