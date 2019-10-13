import React, { FunctionComponent } from "react";
import Head from "../components/head";

const Home: FunctionComponent<{}> = () => (
  <div>
    <Head title="Home" />

    <div>
      <h1 className="title">Random Beer</h1>
    </div>
  </div>
);

export default Home;
