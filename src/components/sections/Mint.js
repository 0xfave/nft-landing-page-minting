import React from "react";
import styled from "styled-components";
import { ethers} from "ethers";
import faveNFT from './FaveNFT.json';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Mint = () => {
  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x3E5D20a7446491E173f2f12F6004BA64AFDb9F39";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          faveNFT.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.mint();

        console.log("Mining...please wait.");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Section>
      <div>
        <h1>Faves NFT</h1>
        <p>Fave test NFT to level up in NFT knowledge, MInt Fave Test NFT</p>
      </div>
      <div>
        <div>
          <button onClick={askContractToMintNft}>MInt Now</button>
        </div>
      </div>
    </Section>
  );
};

export default Mint;
