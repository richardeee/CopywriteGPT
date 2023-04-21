import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from "./Editor.module.css";

interface CustomCKEditorProps {
  data: string;
  onChange: (newData: string) => void;
}

export const Editor = ({ data, onChange }: CustomCKEditorProps) => {
  return (
    <div className={styles.ckeditor}>
      <ReactQuill value={data} onChange={onChange} theme="snow"/>
    </div>
  );
};
