import ZombieList from "./Complete_zombies_metadata.json";
import { isEmpty, keys } from "lodash";

export function getZombiesList() {
  return ZombieList;
}
let nfts = [];

export function fetchNFTs() {
  return new Promise((resolve) => {
    if (isEmpty(nfts))
      fetch("https://mainnet.koii.live/attention/latest")
        .then((response) => response.json())
        .then((Zombies) => {
          nfts = Zombies;
          resolve(nfts);
        })
        .catch((_) => {
          nfts = {};
          resolve(nfts);
          console.log(nfts)
        });
    else return nfts;
  });
}
export function getZombiesListIds() {
  return keys(ZombieList);
}

export async function mapNftToZombies() {
  await fetchNFTs();
  let zKeys = keys(ZombieList);
  let nKeys = keys(nfts);
  let zombies = []
  let counter = 0;
  for (const i of nKeys) {
    if (!zKeys.includes(i)) { ////////// CAUTION ///////////
      zombies.push({
        id:i,
        name:ZombieList[i]?.name||"namee",
        description:ZombieList[i]?.description ||"description",
        views:nfts[i]
      })
    }
    if (counter++ === 99) break;
  }
  return zombies;
}
