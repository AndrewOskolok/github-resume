"use client";

import { useRouter } from "next/navigation";
import { Divider, Input } from "antd";
const { Search } = Input;

const Home = () => {
  const router = useRouter();

  const onSearch = (value) => router.push(`/${value}`);

  return (
    <>
      <main className="p-3 md:p-10 xl:p-20 m-auto max-w-[425px] md:max-w-[768px] xl:max-w-[1024px] bg-lightBackground">
        <h1 className="mb-10 text-center text-3xl xl:text-[64px] font-bold">
          GitHub Resume
        </h1>

        <Divider />

        <p className="mb-5 xl:mb-8 text-center xl:text-2xl">
          Type your GitHub username and click the button to generate your resume
        </p>

        <Search
          className="block max-w-[500px] m-auto"
          placeholder="Input github username"
          allowClear
          enterButton="Generate"
          size="large"
          onSearch={onSearch}
        />

        <Divider />

        <p className="text-xs xl:text-base text-center">
          Developed by Andrii Oskolok
        </p>
      </main>
    </>
  );
};

export default Home;
