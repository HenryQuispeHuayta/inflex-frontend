import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import axios from "../utils/axios";
import { configuration, languageDef } from "../utils/inflex";

const editorWillMount = (monaco: any) => {
  monaco.languages.register({ id: "inflex" });
  monaco.languages.setMonarchTokensProvider("inflex", languageDef);
  monaco.languages.setLanguageConfiguration("inflex", configuration);
};

export default function MonacoEditor() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleExecute = async (code: string) => {
    try {
      const { data } = await axios.post("/execute", { code: code });
      setOutput(data.result);
    } catch (error) {
      setOutput("Error executing code");
    }
  };

  const handleOnChange = (value: string = "") => {
    setCode(value);
  };
  return (
    <div>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="inflex"
        value={code}
        onChange={handleOnChange}
        beforeMount={editorWillMount}
      />
      <button onClick={() => handleExecute(code)}>Execute</button>
      <div>{output}</div>
    </div>
  );
}
