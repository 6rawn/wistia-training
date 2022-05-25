import { WistiaEmbedResponse } from './types/WistiaEmbedResponse'
import { WistiaMedia } from './types/WistiaMedia'
import { WistiaUploadFailedResponse } from './types/WistiaUploadFailedResponse'
import { WistiaFile } from './types/WistiaFile'
import { WistiaUploadProgressFile } from './types/WistiaUploadProgressFile'

type ReturnCallback = [string, Function]

const WISTIA_EVENTS = {
  uploadcancelled: 'uploadcancelled',
  uploadembeddable: 'uploadembeddable',
  uploadfailed: 'uploadfailed',
  uploadprogress: 'uploadprogress',
  uploadstart: 'uploadstart',
  uploadsuccess: 'uploadsuccess',
} as const

export const wistiaUploaderMethods = {
  [WISTIA_EVENTS.uploadcancelled]: (
    callback: (params: { file: WistiaUploadProgressFile }) => void
  ): ReturnCallback => {
    return [WISTIA_EVENTS.uploadcancelled, (file: WistiaUploadProgressFile) => callback({ file })]
  },

  [WISTIA_EVENTS.uploadembeddable]: (
    callback: (params: {
      file: WistiaUploadProgressFile
      media: WistiaMedia
      embedCode: string
      oembedResponse: WistiaEmbedResponse
    }) => void
  ): ReturnCallback => {
    return [
      WISTIA_EVENTS.uploadembeddable,
      (
        file: WistiaUploadProgressFile,
        media: WistiaMedia,
        embedCode: string,
        oembedResponse: WistiaEmbedResponse
      ) => callback({ file, media, embedCode, oembedResponse }),
    ]
  },

  [WISTIA_EVENTS.uploadfailed]: (
    callback: (params: { file: WistiaFile; errorResponse: WistiaUploadFailedResponse }) => void
  ): ReturnCallback => {
    return [
      WISTIA_EVENTS.uploadfailed,
      (file: WistiaFile, errorResponse: WistiaUploadFailedResponse) =>
        callback({
          file,
          errorResponse,
        }),
    ]
  },

  [WISTIA_EVENTS.uploadprogress]: (
    callback: (params: { file: WistiaUploadProgressFile; progress: number }) => void
  ): ReturnCallback => {
    return [
      WISTIA_EVENTS.uploadprogress,
      (file: WistiaUploadProgressFile, progress: number) => callback({ file, progress }),
    ]
  },

  [WISTIA_EVENTS.uploadstart]: (
    callback: (params: { file: WistiaFile; media: WistiaMedia | undefined }) => void
  ): ReturnCallback => {
    return [
      WISTIA_EVENTS.uploadstart,
      (file: WistiaFile, media: WistiaMedia | undefined) => callback({ file, media }),
    ]
  },

  [WISTIA_EVENTS.uploadsuccess]: (
    callback: (params: { file: WistiaFile; media: WistiaMedia }) => void
  ): ReturnCallback => {
    return [
      WISTIA_EVENTS.uploadsuccess,
      (file: WistiaFile, media: WistiaMedia) => callback({ file, media }),
    ]
  },
}

export const registerCallback = (f: Function, method: ReturnCallback) => f.bind(...method)
