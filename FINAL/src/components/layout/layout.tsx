import React from "react";

import { NavigationMenuDesktop } from "../navigation/NavigationMenuDesktop";

export default function Layout({ children }) {
    return (
      <div>
        <NavigationMenuDesktop>
        {children}
        </NavigationMenuDesktop>
      </div>
    );
  }