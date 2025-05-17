import Player from "./player";

export default function Players() {
  return (
    <div>
      <Player
        name={"Дмитрий Пислевич"}
        role={"CEO"}
        url={
          "https://avatars.mds.yandex.net/i?id=571fa7f8256b58a4f0987f557083cc01_l-9181167-images-thumbs&n=13"
        }
      ></Player>
      <Player
        name={"Магжан"}
        role={"CEO"}
        url={
          "https://avatars.mds.yandex.net/i?id=571fa7f8256b58a4f0987f557083cc01_l-9181167-images-thumbs&n=13"
        }
      ></Player>
    </div>
  );
}
