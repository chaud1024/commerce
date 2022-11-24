import styled from '@emotion/styled'
import { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import React, { Dispatch, SetStateAction } from 'react'
import { EditorProps } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Button from './Button'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

const Wrapper = styled.div<{ readOnly: boolean; noPadding: boolean }>`
  width: 100%;
  ${(props) => (props.noPadding ? '' : 'padding: 20px;')}
  box-sizing: border-box;
  ${(porops) =>
    porops.readOnly ? '' : 'border: 1px solid black; border-radius: 8px;'}
`

const CustomEditor = ({
  editorState,
  readOnly = false,
  noPadding = false,
  onEditorStateChange,
  onSave,
}: {
  editorState: EditorState
  readOnly?: boolean
  noPadding?: boolean
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>
  onSave: () => void
}) => {
  return (
    <Wrapper readOnly={readOnly} noPadding={noPadding}>
      <Editor
        readOnly={readOnly}
        editorState={editorState}
        toolbarHidden={readOnly}
        toolbarClassName="wrapper-class"
        wrapperClassName="editorToolbar-hidden"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link'],
        }}
        localization={{
          locale: 'ko',
        }}
      />
      {!readOnly && <Button onClick={onSave}>Save</Button>}
    </Wrapper>
  )
}

export default CustomEditor
