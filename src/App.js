import React, { Component } from "react";
import {
  CommonsStateWrapper,
  CampaignHeader
} from "@giveth/commons-components";
import ConvictionVotingContainer from "./components/ConvictionVotingContainer";

const App = () => {
  return (
    <CommonsStateWrapper>
      <CampaignHeader />
      <ConvictionVotingContainer/>      
    </CommonsStateWrapper>
  );
};

export default App;
