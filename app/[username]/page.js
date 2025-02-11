"use client";

import axios from "axios";
import { useEffect, use, useState } from "react";
import ResumePage from "../components/ResumePage";
import AccountNotFound from "../components/AccountNotFound";
import ApiLimitation from "../components/ApiLimitation";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const page = ({ params }) => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userLangs, setUserLangs] = useState(null);
  const [error, setError] = useState(false);

  const resolvedParams = use(params);

  useEffect(() => {
    if (!resolvedParams?.username) return;

    axios
      .get(`https://api.github.com/users/${resolvedParams.username}`)
      .then((res) => setUserData(res.data))
      .catch((err) => {
        setError(true);
        setIsSpinning(false);
      });
    axios
      .get(
        `https://api.github.com/users/${resolvedParams.username}/repos?sort=updated`
      )
      .then((res) => setUserRepos(res.data))
      .catch((err) => {
        setError(true);
        setIsSpinning(false);
      });
  }, [resolvedParams.username]);

  const fetchLanguages = async () => {
    let languageStats = {};

    await Promise.all(
      userRepos?.map((repo) => {
        return axios.get(repo.languages_url).then((res) => {
          for (const [lang, bytes] of Object.entries(res.data)) {
            languageStats[lang] = (languageStats[lang] || 0) + bytes;
          }
        });
      })
    );

    const totalBytes = Object.values(languageStats).reduce(
      (sum, bytes) => sum + bytes,
      0
    );

    const languagePercentages = Object.entries(languageStats)
      .map(([lang, bytes]) => ({
        language: lang,
        percentage: ((bytes / totalBytes) * 100).toFixed(2),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    setUserLangs(languagePercentages);
    setIsSpinning(false);
  };

  useEffect(() => {
    if (userRepos) {
      fetchLanguages();
    }
  }, [userRepos]);

  return (
    <>
      <main className="p-3 md:p-10 xl:p-20 m-auto max-w-[425px] md:max-w-[768px] xl:max-w-[1024px] bg-lightBackground">
        {isSpinning && (
          <Spin
            className="block"
            spinning={isSpinning}
            indicator={<LoadingOutlined spin />}
            size="large"
          />
        )}

        {!error && !isSpinning && (
          <>
            {userData ? (
              <ResumePage
                userData={userData}
                userRepos={userRepos}
                userLangs={userLangs}
              />
            ) : (
              <AccountNotFound />
            )}
          </>
        )}

        {error && <ApiLimitation />}
      </main>
    </>
  );
};

export default page;
