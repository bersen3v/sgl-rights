"use client";
import { MySpacing } from "@/shared/styles";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { useLayoutEffect, useState } from "react";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import FiltersBox from "@/shared/widgets/filtersBox/filtersBox";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import CustomDatepicker from "@/shared/widgets/customDatepicker/customDatepicker";
import useCustomFilters from "@/shared/widgets/filtersBox/hooks/useCustomFilters";
import SearchPage from "./search/page";

export default function Home() {
  return <SearchPage></SearchPage>;
}
