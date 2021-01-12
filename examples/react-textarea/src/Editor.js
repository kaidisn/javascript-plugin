import React, { useState } from "react";

import { GrammarlyTextArea } from "@grammarly/react-textarea";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const [value, setValue] = useState(demoText);
  return (
    <GrammarlyTextArea
      clientId={demoClientId}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      rows={20}
    />
  );
};
