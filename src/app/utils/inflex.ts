export const languageDef = {
  defaultToken: "",
  number: /\d+(\.\d+)?/,
  keywords: ["@project", "@participants", "@summary", "@rounding"],
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@tags" },
      [/^@\w+/, { cases: { "@keywords": "keyword" } }],
    ],
    whitespace: [
      [/\s+/, "white"],
    ],
    numbers: [[/@number/, "number"]],
    strings: [[/[=|][ @number]*$/, "string.escape"]],
    tags: [
      [/^%[a-zA-Z]\w*/, "tag"],
      [/#[a-zA-Z]\w*/, "tag"],
    ],
  },
};

export const configuration = {
  comments: {
    lineComment: "#",
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],
  indentationRules: {
    increaseIndentPattern: "^(\\s*(si|mientras|para).*entonces\\s*)$",
    decreaseIndentPattern: "^\\s*fin\\s*$",
  },
};
