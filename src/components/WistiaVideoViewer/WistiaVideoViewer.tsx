import { useState } from 'react'

import Head from 'next/head'

interface Props {
  videoId: string
}

export const WistiaVideoViewer = ({ videoId }: Props) => {
  const [isFetchedImg, setIsFetchedImg] = useState(false)
  return (
    <>
      <Head>
        <script src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`} async />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
      </Head>
      <div
        className={`wistia_embed wistia_async_${videoId}`}
        style={{ position: 'relative', height: '360px', width: '640px' }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: isFetchedImg ? 1 : 0,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%',
          }}
        >
          {/* Todo 変更する */}
          <img
            src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
            style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
            alt=""
            aria-hidden="true"
            onLoad={() => setIsFetchedImg(true)}
          />
        </div>
      </div>
    </>
  )
}
