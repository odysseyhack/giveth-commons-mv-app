import React from 'react'
import ConvictionVoting from './ConvictionVoting.js'

const ConvictionVotingContainer = () => {
    // const {state, dispatch} = React.useContext(VotingContext);

    const [proposal] = React.useState( {
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
      });

      const [globalparams] = React.useState( {
        alpha: 90,
        totaltime: 100
      });


      return(<ConvictionVoting
        globalparams={globalparams}
        proposal={proposal}
      />)

}

export default ConvictionVotingContainer;