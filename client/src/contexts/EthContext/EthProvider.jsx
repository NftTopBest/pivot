import React, { useReducer, useCallback, useEffect } from "react";
// import Web3 from "web3";
import { ethers } from 'ethers';
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";
import jsonData from '../../contracts/Pivot'

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const init = useCallback(
    async abi => {
      if (abi) {
        const provider = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io');
        let address, contract;
        try {
          address = '0x9b0FA5AE8a87EEEa5b5c4Efd3308F096EFbe852a';
          // 利用私钥和provider创建wallet对象
          const privateKey = '0xfc528bdceb36437fb3afcd3e1ee5b8d24314799b8a37f83befd9b780ba74c7c2'
          const wallet = new ethers.Wallet(privateKey, provider)
          contract = new ethers.Contract(address, abi, wallet);
          // contract = new ethers.Contract(address, abi, provider);
        } catch (err) {
          console.error(err);
        }
        dispatch({
          type: actions.init,
          data: { provider, contract, address }
        });
      }
    }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        const abi = jsonData;
        init(abi);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
