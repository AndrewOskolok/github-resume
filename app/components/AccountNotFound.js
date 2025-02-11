"use client";

const AccountNotFound = () => {
  return (
    <>
      <h1 className="mb-5 text-center text-3xl xl:text-[64px] font-bold text-green">
        User not found
      </h1>

      <p className="text-center text-base xl:text-xl">
        Try to set another username
      </p>
    </>
  );
};

export default AccountNotFound;
