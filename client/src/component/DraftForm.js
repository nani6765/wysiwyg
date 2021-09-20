import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "@emotion/styled";
import draftToHtml from "draftjs-to-html";

function DraftForm() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
  };

  const FormDiv = styled.div`
    .wrapperClassName {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 5rem;
      margin-top: 5rem;
    }
    .editorClassName {
      height: 50vh !important;
      border: 1px solid #c6c6c6 !important;
      padding: 5px !important;
      border-radius: 2px !important;
    }
  `;

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <FormDiv>
      <Editor
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        localization={{
          locale: "ko",
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </FormDiv>
  );
}

export default DraftForm;
