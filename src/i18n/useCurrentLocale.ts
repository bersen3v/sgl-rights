"use client";

import { LocaleContext } from "@/app/layout";
import { useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default function useCurrentLocale() {
  const currentLocale = useContext(LocaleContext);

  return {
    currentLocale: currentLocale.split("-")[0] as "en" | "kk" | "ru",
  };
}
