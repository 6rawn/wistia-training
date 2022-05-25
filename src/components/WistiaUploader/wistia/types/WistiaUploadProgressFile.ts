export interface WistiaUploadProgressFile {
  source: string
  id: string
  name: string
  extension: string
  meta: Meta
  type: string
  data: Data
  progress: Progress
  size: number
  isRemote: boolean
  remote: string
}

export interface Data {
  relativePath: string
}

export interface Meta {
  project_id: string
  expected_type: string
  originalName: string
  name: string
  type: string
}

export interface Progress {
  percentage: number
  bytesUploaded: number
  bytesTotal: number
  uploadComplete: boolean
  uploadStarted: boolean
}
