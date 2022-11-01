import { FC, useEffect } from "react";

import type { GGQuestPage } from "v2/types";
import ProfileConnected from "v2/components/ProfileConnected";
import QuestCard from "v2/components/QuestsCard";
import ProfileCreate from "v2/components/ProfileCreate";
import { Web3Provider } from "@ethersproject/providers";


const Dashboard: GGQuestPage = () => {
  // TODO : if connected render ProfileConnected else ProfileCreate
  // TODO : add a comonent to connect wallet if he is not connected
  const isUser = false;

  
  return (
    <>
      <div className="block xl:flex mb-8 sm:mb-10">
        {isUser ? <ProfileConnected /> : <ProfileCreate/> }
      </div>
      <div className="mt-4">
        <QuestCard/>
      </div>
    </>
  );
};


export default Dashboard;
