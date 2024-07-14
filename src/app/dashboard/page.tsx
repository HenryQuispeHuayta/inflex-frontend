"use client";
import React, { useState } from "react";
import Head from "next/head";
import Editor from "../components/MonacoEditor";

const Home: React.FC = () => {
  const [code, setCode] = useState<string>("// Escribe tu código aquí...");
  const [language, setLanguage] = useState<string>("javascript");

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Monaco Editor con Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Monaco Editor con Next.js</h1>
        <select
          style={{
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            color: "#333",
          }}
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="custom">Custom Language</option>
        </select>
        <Editor
          value={code}
          language={language}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </main>
    </div>
  );
};

export default Home;
