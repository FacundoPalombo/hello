import React, { Suspense, useState } from "react";
import icons from "../assets/tech-icons/icons.json";

const getIcon = (iconName: string | undefined) => {
  if (iconName) {
    return React.lazy(() => import(`../assets/tech-icons/${iconName}.js`));
  }
  return null;
};

export default function Pill({ name }: { name: string }) {
  const [icon] = useState(() => icons.find((icon) => icon.name === name));

  const Icon = getIcon(icon?.icon);

  return (
    icon && (
      <span
        style={{
          backgroundColor: icon ? icon.color : "#fafafa",
          border: `1px solid ${icon ? icon.color + "aa" : "#fafafaaa"}`,
          filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 0.3))",
          borderRadius: "1em",
          padding: "2px 6px",
          display: "inline-flex",
          flexDirection: "row",
          gap: "4px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
        }}
      >
        <Suspense>{Icon ? <Icon color="white" size="16px" /> : null}</Suspense>
        {icon?.title}
      </span>
    )
  );
}
