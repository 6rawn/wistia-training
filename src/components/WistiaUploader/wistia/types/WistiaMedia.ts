export interface WistiaMedia {
  id: string
  type: string
  attributes: Attributes
  relationships: Relationships
  thumbnail: Thumbnail
  name: string
  description: null
  project_id: string
  duration: number
  position: number
  url: string
  aspect_ratio: number
  originalUrl: string
}

export interface Attributes {
  type: string
  name: string
  description: null
  project_id: string
  duration: number
  position: number
  url: string
  aspect_ratio: number
}

export interface Relationships {
  media_group: MediaGroup
  storyboard: MediaGroup
  thumbnail: MediaGroup
}

export interface MediaGroup {
  data: Data | null
}

export interface Data {
  id: string
  type: string
}

export interface Thumbnail {
  width: number
  height: number
  url: string
}
