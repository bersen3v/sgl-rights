import getEventById from "@/entities/gameEvent/api/methods/search/getEventById";
import authUser from "./methods/authUser";
import getUserById from "./methods/getUserById";
import getUserEvents from "./methods/getUserEvents";
import sendProposalRequest from "./methods/sendProposalRequest";
import getAllUsers from "./methods/getAllUsers";

export const userApiManager = {
  authUser,
  getUserById,
  getUserEvents,
  sendProposalRequest,
  getAllUsers,
};
