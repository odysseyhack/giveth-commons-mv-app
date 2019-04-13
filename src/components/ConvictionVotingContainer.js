import React from "react";
import ConvictionVoting from "./ConvictionVoting.js";
import {
  ConvictionVotingCurveContext,
  cvActions
} from "@giveth/commons-components";

const ConvictionVotingContainer = () => {
  // const {state, dispatch} = React.useContext(VotingContext);

  const { state, dispatch } = React.useContext(ConvictionVotingCurveContext);
  const changeSupply = () =>
    dispatch({ type: cvActions.setTotalSupply, totalSupply: 5000 });
  const addMilestone = () =>
    dispatch({
      type: cvActions.addMilestone,
      milestone: {
        timecreated: 0,
        id: 1,
        value: 1000,
        name: "Spend 1000 xDAI on X",
        convictions: [
          {
            name: "Griff",
            stakes: [
              { time: 0, tokensstaked: 1000 },
              { time: 50, tokensstaked: 0 }
            ]
          },
          {
            name: "Jeff",
            stakes: [
              { time: 30, tokensstaked: 1000 },
              { time: 80, tokensstaked: 7000 }
            ]
          }
        ]
      }
    });

  //   const [proposal] = React.useState({
  //     timecreated: 0,
  //     id: 1,
  //     value: 1000,
  //     name: "Spend 1000 xDAI on X",
  //     convictions: [
  //       {
  //         name: "Griff",
  //         stakes: [{ time: 0, tokensstaked: 1000 }, { time: 50, tokensstaked: 0 }]
  //       },
  //       {
  //         name: "Jeff",
  //         stakes: [
  //           { time: 30, tokensstaked: 1000 },
  //           { time: 80, tokensstaked: 7000 }
  //         ]
  //       }
  //     ]
  //   });

  //   const [globalparams] = React.useState({
  //     alpha: 90,
  //     totaltime: 100
  //   });

  const milestones = state.milestones.map((milestone, i) => {
    return (
      <ConvictionVoting
        key={i}
        globalparams={{
          totalSupply: state.totalSupply,
          alpha: 90,
          totaltime: 100
        }}
        proposal={milestone}
      />
    );
  });

  return (
    <div>
      {milestones}
      <button onClick={addMilestone}>add milestone</button>
      <button onClick={changeSupply}>change supply</button>
    </div>
  );
};

export default ConvictionVotingContainer;
