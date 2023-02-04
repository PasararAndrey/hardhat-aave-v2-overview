import { HardhatRuntimeEnvironment } from "hardhat/types"
import { IWeth } from "../typechain-types"
import { getNamedAccounts, ethers, network } from "hardhat"
import { networkConfig } from "../helper-hardhat-config"

export const AMOUNT = ethers.utils.parseEther("0.01").toString()

export const getWeth = async function () {
    const { deployer } = await getNamedAccounts()
    // contract address
    // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const iWeth: IWeth = await ethers.getContractAt(
        "IWeth",
        networkConfig[network.config!.chainId!].wethTokenAddress!,
        deployer
    )
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} at address ${deployer}`)
}
