type Uploader = new (args: {
  accessToken: string
  dropIn?: string
  button?: string
  projectId: string
}) => any

type WistiaAPI = (W: { Uploader: Uploader }) => void

export type WistiaApiQueue = WistiaAPI[]

export type WistiaUploader = Function
