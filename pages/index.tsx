import { NextPage } from "next";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { setInfo } from "../redux/actions/main";
import { connect } from "react-redux";

interface Props {
  name: string;
  setInfo: any;
}

const Home: NextPage<Props> = (props) => {
  const { name, setInfo } = props;
  const [newName, setNewName] = useState<string>("");

  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      ></input>
      <button onClick={() => setInfo(newName)}>Submit</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
