"use client";

import React, { createContext, useState } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <SiteContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </SiteContext.Provider>
  );
};
