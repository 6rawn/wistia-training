import { useLayoutEffect } from 'react'

import Head from 'next/head'

import { registerCallback, wistiaUploaderMethods } from './wistia/uploaderMethods'

const initUploader = ({ accessToken, projectId }: { accessToken: string; projectId: string }) => {
  window._wapiq = window._wapiq || []
  window._wapiq.push(W => {
    window.wistiaUploader = new W.Uploader({
      accessToken: accessToken,
      button: 'wistia_upload_button_button_only',
      projectId: projectId,
    })

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadembeddable(params => {
        console.log('uploadembeddable')
        console.dir(params, { depth: null })
      })
    )

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadprogress(params => {
        console.log('uploadprogress')
        console.dir(params, { depth: null })
      })
    )

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadstart(params => {
        console.log('uploadstart')
        console.dir(params, { depth: null })
      })
    )

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadsuccess(params => {
        console.log('uploadsuccess')
        console.dir(params, { depth: null })
      })
    )

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadcancelled(params => {
        console.log('uploadcancel')
        console.dir(params, { depth: null })
      })
    )

    registerCallback(
      window.wistiaUploader,
      wistiaUploaderMethods.uploadfailed(params => {
        console.log('uploadcancel')
        console.dir(params, { dir: null })
      })
    )
  })
}

interface Props {
  accessToken: string
  projectId: string
}

export const WistiaButtonUploader = ({ accessToken, projectId }: Props) => {
  useLayoutEffect(() => {
    ;(async () => {
      initUploader({ accessToken, projectId })
    })()
  }, [])

  return (
    <>
      <Head>
        <script src="//fast.wistia.com/assets/external/api.js" async></script>
        <link rel="stylesheet" href="//fast.wistia.com/assets/external/uploader.css" />
      </Head>
      <div id="wistia_upload_button_button_only" />
    </>
  )
}
