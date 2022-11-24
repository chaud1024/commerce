import styled from '@emotion/styled'
import { IconStar } from '@tabler/icons'
import { format } from 'date-fns'
import { convertFromRaw, EditorState } from 'draft-js'
import React from 'react'
import { CommentItemType } from '../pages/products/[id]'
import AutoSizeImage from './AutoSizeImage'
import CustomEditor from './Editor'

const CommentItem = ({ item }: { item: CommentItemType }) => {
  return (
    <Wrapper>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex' }}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <IconStar
                  key={idx}
                  fill={idx < item.rate ? 'red' : 'none'}
                  stroke={idx < item.rate ? 0 : 1}
                />
              ))}
            </div>
          </div>
          <span className="text-zinc-300 text-xs">
            {item.price.toLocaleString('ko-kr')} 원 * {item.quantity} 개 = {''}
            {item.amount.toLocaleString('ko-kr')} 원
          </span>
          <p className="text-zinc-500 ml-auto">
            {format(new Date(item.updatedAt), 'yyyy년 M월 d일')}
          </p>
        </div>
        <CustomEditor
          editorState={EditorState.createWithContent(
            convertFromRaw(JSON.parse(item.contents ?? ''))
          )}
          readOnly
        />
      </div>
      <div style={{ display: 'flex' }}>
        {item.images?.split(',').map((image, idx) => (
          <AutoSizeImage key={idx} src={image} alt={image} size={300} />
        ))}
      </div>
    </Wrapper>
  )
}

export default CommentItem

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
`
