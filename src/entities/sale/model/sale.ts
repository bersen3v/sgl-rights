import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { User } from "@/entities/user/model/user";

export type Sale = {
  id: number;
  event: GameEvent;
  buyer: User;
  date: Date;
};
