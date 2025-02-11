import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const resolvedParams = await params;

  if (!resolvedParams?.username) return notFound();

  return (
    <div>
      <h1>Динамічний роут: {resolvedParams.username}</h1>
    </div>
  );
};

export default page;
