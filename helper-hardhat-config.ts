export interface networkConfigItem {
    name?: string
    wethTokenAddress: string
    lendingPoolAddressesProvider?: string
    daiEthPriceFeed?: string
    daiToken?: string
}

export interface networkConfigInfo {
    [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: "hardhat",
        wethTokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
        daiEthPriceFeed: "0x773616E4d11A78F511299002da57A0a94577F1f4",
        daiToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    },
}

export const developmentChains = ["hardhat"]
