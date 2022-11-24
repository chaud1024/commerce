import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import styled from '@emotion/styled'

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')

  const handleUpload = () => {
    if (inputRef.current && inputRef.current.files) {
      const fd = new FormData()

      fd.append(
        'image',
        inputRef.current.files[0],
        inputRef.current.files[0].name
      )

      fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        {
          method: 'POST',
          body: fd,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('image data', data)

          setImage(data.data.image.url)
          setName(data.data.image.name)
        })
        .catch((error) => console.log(error))
    }
  }
  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" />
      <Button onClick={handleUpload}>이미지 업로드</Button>
      {image !== '' && (
        <AutoSizeImageWrapper>
          <Image src={image} alt={name} fill />
        </AutoSizeImageWrapper>
      )}
    </div>
  )
}

export default ImageUpload

const AutoSizeImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`
