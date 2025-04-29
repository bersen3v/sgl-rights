import { baseUrl } from "@/shared/network/config/baseUrl";
import { GameEvent } from "../../../model/gameEvent";

export type SearchEventParams = {
  type: number;
  disciplinesIds: number[];
  managersIds: number[];
  developersIds: number[];
  prizeMinLimit: number;
  prizeMaxLimit: number;
  startTime: number;
  endTime: number;
};

export default async function searchEvents(
  searchParams: SearchEventParams
): Promise<GameEvent[]> {
  const path = baseUrl + "/searchEvents";

  const data = {
    result: [
      {
        id: 1,
        previewPhoto:
          "https://clan.fastly.steamstatic.com/images/3703047/e5883742c6230cb46e5ee6858256fc82b8ea7adf.jpg",
        name: "Dota event",
        discipline: "dota",
        startTime: 1745398395,
        endTime: 1745398395,
        prize: 1234,
      },
      {
        id: 2,
        previewPhoto:
          "https://clan.fastly.steamstatic.com/images/3703047/e5883742c6230cb46e5ee6858256fc82b8ea7adf.jpg",
        name: "Dota event",
        discipline: "dota",
        startTime: 1745398395,
        endTime: 1745398395,
        prize: 1234,
      },
    ],
  };

  return (
    data as {
      result: GameEvent[];
    }
  ).result;
}

// async function fetchDataWithParams(params: Record<string, string>): Promise<void> {
//     // Преобразование объекта параметров в строку запроса
//     const queryString = Object.keys(params)
//         .map(key => ${encodeURIComponent(key)}=${encodeURIComponent(params[key])})
//         .join('&');

//     // URL для GET-запроса с параметрами
//     const url = https://api.example.com/api/data?${queryString};

//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json' // Указать тип контента
//                 // + любые другие заголовки, если это необходимо
//             }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log('Данные получены:', data);
//         } else {
//             console.error('Ошибка при выполнении запроса:', response.status);
//         }
//     } catch (error) {
//         console.error('Произошла ошибка:', error);
//     }
// }

// // Пример использования: передача параметров в виде объекта
// const params = {
//     param1: 'value1',
//     param2: 'value2'
// };

// fetchDataWithParams(params);
