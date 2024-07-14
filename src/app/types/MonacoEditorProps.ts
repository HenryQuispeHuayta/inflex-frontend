import monaco from 'monaco-editor';

export interface MonacoEditorProps {
  value: string;
  language: string;
  theme: string;
  onChange: (
    value: string | undefined,
    event: monaco.editor.IModelContentChangedEvent
  ) => void;
}
