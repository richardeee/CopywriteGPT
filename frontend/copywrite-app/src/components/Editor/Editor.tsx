import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from "./Editor.module.css";

interface CustomCKEditorProps {
  data: string;
  onChange: (newData: string) => void;
}
const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export const Editor = ({ data, onChange }: CustomCKEditorProps) => {
  return (
    <div className={styles.ckeditor}>
      <ReactQuill value={data} onChange={onChange} theme="snow" modules={modules} formats={formats}/>
    </div>
  );
};
