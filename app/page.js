"use client";

import { Divider, Input } from "antd";
const { Search } = Input;

const Home = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <main className="p-5 bg-lightBackground">
        <h1 className="mb-10 text-center text-3xl font-bold">GitHub Resume</h1>

        <Divider />

        <p className="mb-5">
          Type your GitHub username and click the button to generate your resume
        </p>

        <Search
          placeholder="Input github username"
          allowClear
          enterButton="Generate"
          size="large"
          onSearch={onSearch}
        />

        <Divider />

        <p className="text-xs">Developed by Andrii Oskolok</p>
      </main>
    </>
  );
};

export default Home;
