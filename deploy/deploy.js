// const fs = require('fs')
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;

  const { governor } = await getNamedAccounts();
  // const arbitratorExtraData = "0x85";
  // const arbitrationCost = 1000;
  // const appealTimeOut = 180;
  console.log(governor);
  const GTCRFactory = await deploy("GTCRFactory", {
    from: governor,
    args: [],
  });

  console.log(GTCRFactory.address, "GTCRFactory address");
  const LGTCR = await deploy("LightGeneralizedTCR", {
    from: governor,
    args: [],
  });

  console.log(LGTCR.address, "address of LGTCR");
  const LGTCRFactory = await deploy("LightGTCRFactory", {
    from: governor,
    args: [LGTCR.address],
  });
  const RelayMock = await deploy("RelayMock", {
    from: governor,
    args: [],
  });
  console.log(RelayMock.address, "address of RelayMock");
  console.log(LGTCRFactory.address, "address of LGTCR factory");
  const LightGeneralizedTCRView = await deploy("LightGeneralizedTCRView", {
    from: governor,
    args: [],
  });
  console.log(LightGeneralizedTCRView.address, "address of LightGeneralizedTCRView");

  const GeneralizedTCRView = await deploy("GeneralizedTCRView", {
    from: governor,
    args: [],
  });
  console.log(GeneralizedTCRView.address, "address of GeneralizedTCRView");

  const BatchWithdraw = await deploy("BatchWithdraw", {
    from: governor,
    args: [],
  });
  console.log(BatchWithdraw.address, "address of BatchWithdraw");
  const LBatchWithdraw = await deploy("LightBatchWithdraw", {
    from: governor,
    args: [],
  });
  console.log(LBatchWithdraw.address, "address of LightBatchWithdraw");

  // await execute("GTCRFactory", { from: governor, log: true },"deploy","0x7FA961226AB50Fd9998c02C037A708fdb5eeC1eE",
  // arbitratorExtraData,
  // "0x21Fd163932FAd502349fD56a648d18E27A2e83E1",
  // registrationMetaEvidence,
  // clearingMetaEvidence,
  // governor,
  // submissionBaseDeposit,
  // removalBaseDeposit,
  // submissionChallengeBaseDeposit,
  // removalChallengeBaseDeposit,
  // challengePeriodDuration,
  // [sharedStakeMultiplier, winnerStakeMultiplier, loserStakeMultiplier])
  // const gtcrAddress = await ethers.getContractAt("GTCRFactory", GTCRFactory.address).then((dk) => dk.instances(0));

  //   let addresses = {
  //     GTCRFactory_ADDRESS: GTCRFactory.address,
  //     LGTCR_ADDRESS: LGTCR.address,
  //     LGTCRFactory_ADDRESS: LGTCRFactory.address,
  //     RelayMock_ADDRESS: RelayMock.address,
  //     LightGeneralizedTCRView_ADDRESS: LightGeneralizedTCRView.address,
  //     GeneralizedTCRView_ADDRESS: GeneralizedTCRView.address,
  //     BatchWithdraw_ADDRESS:BatchWithdraw.address,
  //     LBatchWithdraw_ADDRESS:LBatchWithdraw.address,
  //     GTCR_ADDRESS:gtcrAddress
  // }
  //     save(addresses)
};

// function save(addresses) {
//   fs.writeFileSync('./deployments/arbitrumGoerli/Address.json', JSON.stringify(addresses, null, '\t'))
// }
module.exports.tags = ["gtcrContracts"];
