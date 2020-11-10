# 👋 Welcome!

This demo is for a Grammarly plugin that will allow third-party websites to provide the Grammarly experience without requiring users to have the extension.

The plugin is a work-in-progress. For now, please note the following:

- You will need to disable the Grammarly browser extension on this site to avoid conflicts.
- We are currently prioritizing support for React and the Slate editor but will expand in the future.


## Getting Started

Install the Grammarly plugin for Slate:

```bash
npm install @grammarly/react-slate
```

Setup an instance of the Slate editor with Grammarly:

```ts
// 1. Import Grammarly components
import { 
  GrammarlyEditable,
  GrammarlySlate
} from "@grammarly/react-slate";

import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withReact, Slate } from "slate-react";

export function SlateEditor() {
  const [value, setValue] = useState([]);
  const editor = useMemo(() => withReact(createEditor()), []);

  // 2. Render using <GrammarlySlate> and <GrammarlyEditable>
  return (
    <Slate
      value={value}
      editor={editor}
      onChange={(value) => setValue(value)}
    >
      <GrammarlySlate value={value}>
        <GrammarlyEditable />
      </GrammarlySlate>
    </Slate>
  );
};
```

### React Components

- **GrammarlySlate** packages Grammarly experience in a simple component.
- **GrammarlyEditable** wraps Slate's `<Editable/>` component in order to add Grammarly suggestions as highlighted text.

> Check out the [Slate demo](https://developer.grammarly.io/slate).
