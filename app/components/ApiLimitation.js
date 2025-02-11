const ApiLimitation = () => {
  return (
    <>
      <h1 className="mb-5 text-center text-3xl xl:text-[64px] font-bold text-green">
        Your limit is exceeded
      </h1>

      <p className="text-center text-base xl:text-xl">
        Try to request later or use another IP
      </p>
    </>
  );
};

export default ApiLimitation;
