export interface WistiaFile {
  file: File
  name: string
}

export interface File {
  data: Data
  name: string
  type: string
  meta: Meta
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
