import moment from "moment";
import { Divider } from "antd";

const ResumePage = ({ userData, userRepos, userLangs }) => {
  return (
    <>
      <h1 className="text-3xl xl:text-[64px] font-bold uppercase">
        {userData?.name}
      </h1>

      <p className="mb-5 xl:text-2xl uppercase">GitHub user</p>

      <Divider />

      <div className="flex gap-6 md:gap-10">
        <p className="w-20 xl:w-40">GitHub Profile</p>

        <p className="w-[250px] md:w-[500px] xl:w-[600px]">
          On GitHub since {moment(userData?.created_at).format("YYYY")},{" "}
          {userData?.name} is a developer based in {userData?.location} with{" "}
          <a
            href={`https://github.com/${userData?.login}?tab=repositories`}
            target="_blank"
          >
            {userData?.public_repos} public repositories
          </a>{" "}
          and{" "}
          <a
            href={`https://github.com/${userData?.login}/followers`}
            target="_blank"
          >
            {userData?.followers} followers
          </a>
          .
        </p>
      </div>

      <Divider />

      {userData?.blog && (
        <>
          <div className="flex gap-6 md:gap-10">
            <p className="w-20 xl:w-40">Website</p>

            <p className="w-[250px] md:w-[500px] xl:w-[600px] text-sm">
              <a
                href={
                  userData?.blog.includes("https://")
                    ? userData?.blog
                    : `https://${userData?.blog}`
                }
                target="_blank"
              >
                {userData?.blog.includes("https://")
                  ? userData?.blog
                  : `https://${userData?.blog}`}
              </a>
            </p>
          </div>

          <Divider />
        </>
      )}

      <div className="flex gap-6 md:gap-10">
        <p className="w-20 xl:w-40">Languages</p>

        <ul className="w-[250px] md:w-[500px] xl:w-[600px] flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-5 text-sm">
          {userLangs?.map((item) => {
            return (
              <li className="flex gap-1" key={item.language}>
                <div>{item.language}</div>
                <div>
                  ({+item.percentage.startsWith("0.") ? ">" : ""}
                  {parseInt(item.percentage)}%)
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Divider />

      <div className="flex gap-6 md:gap-10">
        <p className="w-20 xl:w-40">Last updated repos</p>

        <ul className="w-[250px] md:w-[500px] xl:w-[600px] flex flex-col text-sm">
          {userRepos?.slice(0, 5)?.map((item, idx) => {
            return (
              <li className="flex flex-col gap-1" key={item.id}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">
                    <a href={item.html_url} target="_blank">
                      {item.name}
                    </a>
                  </h3>

                  <span>
                    {`${
                      moment(item.created_at).format("YYYY") ===
                      moment(item.updated_at).format("YYYY")
                        ? moment(item.created_at).format("YYYY")
                        : `${moment(item.created_at).format("YYYY")} -
                      ${moment(item.updated_at).format("YYYY")}`
                    }`}
                  </span>
                </div>

                <p className="mb-5">
                  {item.language ? `${item.language} - ` : ""}Owner:{" "}
                  {item.owner.login === userData.login ? "YES" : "NO"}
                </p>

                {item.homepage && (
                  <a className="mb-5" href={item.homepage} target="_blank">
                    {item.homepage}
                  </a>
                )}

                <p>{item.description}</p>

                <p>
                  This repository has {item.watchers_count} watchers and{" "}
                  {item.forks_count} forks. If you would like more information
                  about this repository and my contributed code, please visit{" "}
                  <a href={item.html_url} target="_blank">
                    the repo
                  </a>{" "}
                  on GitHub.
                </p>

                {idx < 4 && <Divider />}
              </li>
            );
          })}
        </ul>
      </div>

      <Divider />

      <p className="text-xs xl:text-base text-center">
        {userData?.name}
        {" — "}
        <a href={userData?.html_url} target="_blank">
          {userData?.html_url}
        </a>{" "}
        {" — "}
        <a href={userData?.blog} target="_blank">
          {userData?.blog}
        </a>
      </p>
    </>
  );
};

export default ResumePage;
