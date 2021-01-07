import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";

import { GrammarlyEditable, GrammarlySlate } from "@grammarly/react-slate";
import { demoApiKey, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const [value, setValue] = useState(demoText);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <GrammarlySlate value={value} apiKey={demoApiKey}>
        <div className="container">
          <GrammarlyEditable placeholder="Enter some plain text..." />
        </div>
      </GrammarlySlate>
    </Slate>
  );
};
