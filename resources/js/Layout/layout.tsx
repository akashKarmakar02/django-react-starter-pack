import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}

export default layout;
