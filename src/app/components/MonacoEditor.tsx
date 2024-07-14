"use client";
// components/MonacoEditor.tsx
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MonacoEditorProps } from "../types/MonacoEditorProps";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const Editor: React.FC<MonacoEditorProps> = ({
  value,
  language,
  theme,
  onChange,
}) => {
  const [output, setOutput] = useState<string>("");

  const executeCode = (code: string) => {
    try {
      const log = console.log;
      const logs: string[] = [];
      console.log = (...args) => {
        logs.push(args.join(" "));
        log(...args);
      };

      eval(code);

      console.log = log;

      setOutput(logs.join("\n"));
    } catch (e: any) {
      setOutput(`Error ejecutando el código: ${e.message}`);
    }
  };

  return (
    <div>
      <MonacoEditor
        height="70vh"
        defaultLanguage={language}
        defaultValue={value}
        theme={theme}
        onChange={(value, event) => onChange(value, event)}
      />
      <button onClick={() => executeCode(value)}>Run</button>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          backgroundColor: "#f9f9f9",
          color: "#333",
        }}
      >
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default Editor;
