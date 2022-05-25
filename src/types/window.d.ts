import { WistiaApiQueue, WistiaUploader } from './wistia'

declare global {
  interface Window {
    // 以下の名前は、https://wistia.com/support/developers/uploader と一致させてある
    _wapiq: WistiaApiQueue
    wistiaUploader: WistiaUploader
  }
}
