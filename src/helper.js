import zombieList from "./zombies.json";

export async function mapNftToZombies() {
  const nfts = await (await fetch("https://mainnet.koii.live/attention/latest")).json();
  zombieList.sort((a, b) => (nfts[b] || 0) - (nfts[a] || 0));
  const zombies = zombieList.slice(0, 10);

  for (let i = 0; i < zombies.length; ++i)
    zombies[i] = {
      id: zombies[i],
      name: zombies[i],
      views: nfts[zombies[i]] || 0
    }

  return zombies;
}
