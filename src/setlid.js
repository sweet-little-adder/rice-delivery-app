import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [lid, setLid] = useState("");

  useEffect(() => {
    setlid();
  }, []);

  const setlid = () => {
    axios
      .post("http://localhost:3001/set-lid")
      .then((res) => console.log("Posting open", res))
      .catch((err) => console.log(err));
  };

  return <div className="App"></div>;
}
