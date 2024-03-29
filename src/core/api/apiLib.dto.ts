type Method =
  | 'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'LINK'
  | 'UNLINK'
  | 'WS'

export interface baseApiOption {
  url: string
  method: Method
  headers?: {
    [K: string]: string
  }
}

export type apiType ={
  readonly [K in string]: baseApiOption
}
