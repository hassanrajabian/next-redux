import { NextPage } from "next";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { setInfo } from "../redux/actions/main";
import { connect, RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface Props {
  name: string;
  setInfo: any;
}

const Home: NextPage<Props> = (props) => {
  const [newName, setNewName] = useState<string>("");

  const name = useSelector((state: RootStateOrAny) => state.main.name);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      ></input>
      <button onClick={() => dispatch(setInfo(newName))}>Submit</button>
    </div>
  );
};

export default Home;
