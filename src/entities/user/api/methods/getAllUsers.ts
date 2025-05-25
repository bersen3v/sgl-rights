import { User } from "../../model/user";

export default async function getAllUsers(): Promise<User[]> {
  const data = {
    result: [
      {
        id: "324234",
        previewPhoto:
          "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/A-lioness.webp",
        first_name: "Дмитрий",
        last_name: "Пислевич",
        company: "ИП Пислевич Д.Г",
        mail: "info@sglone.ru",
        phone: "+7 913 532 1204",
      },
      {
        id: "324234",
        previewPhoto:
          "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/A-lioness.webp",
        first_name: "Дмитрий",
        last_name: "Пислевич",
        company: "ИП Пислевич Д.Г",
        mail: "info@sglone.ru",
        phone: "+7 913 532 1204",
      },
      {
        id: "324234",
        previewPhoto:
          "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/A-lioness.webp",
        first_name: "Дмитрий",
        last_name: "Пислевич",
        company: "ИП Пислевич Д.Г",
        mail: "info@sglone.ru",
        phone: "+7 913 532 1204",
      },
      {
        id: "324234",
        previewPhoto:
          "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/A-lioness.webp",
        first_name: "Дмитрий",
        last_name: "Пислевич",
        company: "ИП Пислевич Д.Г",
        mail: "info@sglone.ru",
        phone: "+7 913 532 1204",
      },
    ],
  };

  const answer = (data as { result: User[] }).result;

  return answer;
}
