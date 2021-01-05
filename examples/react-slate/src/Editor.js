import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, withReact } from "slate-react";

import { GrammarlyEditable, GrammarlySlate } from "@grammarly/react-slate";

/** @type {import('slate').Node[]} */
const initialValue = [
  {
    children: [
      { text: "The basics\n\n" },
      {
        text:
          "Mispellings and grammatical errors can effect your credibility. The same goes for misused commas, and other types of punctuation . Not only will Grammarly underline these issues in red, it will also showed you how to correctly write the sentence.\n\n\n",
      },
      { text: "But wait...there's more?\n\n" },
      {
        text:
          "Blue underlines mean a clarity issue has been spotted by Grammarly. You'll find suggestions that can possibly help you revise a wordy sentence in an effortless manner.\n\n",
      },
      {
        text:
          "Grammarly will also inspect your vocabulary carefully and suggest the best word with green underlines to make sure you don't have to analyze your writing too much.\n\n",
      },
      {
        text:
          "Furthermore, Grammarly can check for unoriginal content. Any sufficiently advanced technology is indistinguishable from magic. Norway maintains the Nordic welfare model with universal health care and a comprehensive social security system, and its values are rooted in egalitarian ideals.\n\n",
      },
    ],
  },
];

export const Editor = () => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <GrammarlySlate
        value={value}
        apiKey="5c891c34-55b1-4504-b1a2-5215d35757ba"
      >
        <div style={{ padding: "1rem" }}>
          <GrammarlyEditable placeholder="Enter some plain text..." />
        </div>
      </GrammarlySlate>
    </Slate>
  );
};
