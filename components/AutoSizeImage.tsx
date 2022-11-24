import Image from 'next/image'
import styled from '@emotion/styled'
import React from 'react'

const AutoSizeImage = ({
  src,
  alt,
  size = 500,
}: {
  src: string
  alt: string
  size?: number
}) => {
  return (
    <AutoSizeImageWrapper size={size}>
      <Image src={src} alt={alt} fill />
    </AutoSizeImageWrapper>
  )
}

export default AutoSizeImage

const AutoSizeImageWrapper = styled.div<{ size: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : '500px')};
  height: ${(props) => (props.size ? `${props.size}px` : '500px')};
  position: relative;
`
