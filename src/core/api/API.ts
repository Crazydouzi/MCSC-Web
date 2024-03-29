import { apiType } from "./apiLib.dto";
const APIUrl = "http://localhost:8080/api"
const WSUrl = "http://localhost:8080/ws"

export const serverAPI: apiType = {
  openServer: {
    url: APIUrl + "/server/start", method: "POST"
  },
  closeServer: {
    url: APIUrl + "/server/stop", method: "POST"
  },
  getServerInfo: {
    url: APIUrl + "/server/getServerInfo", method: "GET"
  },
  modifyServerConfig: {
    url: APIUrl + "/server/modifyServerOption", method: "POST"
  },
  modifyServerInfo: {
    url: APIUrl + "/server/modifyServerInfo", method: "POST"
  },
  getSetting: {
    url: APIUrl + "/server/getSetting", method: "GET"
  },
  getStatus: {
    url: APIUrl + "/server/status", method: "GET"
  },
  getConfigList: {
    url: APIUrl + "/server/getConfigList", method: "GET"
  },
  getConfig: {
    url: APIUrl + "/server/readConfig", method: "GET"
  },
  getPluginList: {
    url: APIUrl + "/server/getPluginList", method: "GET"
  },
  setEnablePlugin: {
    url: APIUrl + "/server/enablePlugin", method: "POST"
  },
  setDisablePlugin: {
    url: APIUrl + "/server/disablePlugin", method: "POST"
  },
  deletePlugin: {
    url: APIUrl + "/server/deletePlugin", method: "DELETE"
  },
  uploadPlugin: {
    url: APIUrl + "/server/uploadPlugin", method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  },


} as const;
export const versionAPI: apiType = {
  enableServerInfo: {
    url: APIUrl + "/version/enableServerInfo",
    method: 'GET'
  },
  getServerList: {
    url: APIUrl + "/version/list", method: "GET"
  },
  installRemoteMCServer: {
    url: APIUrl + "/version/installRemoteMCServer", method: "POST"

  },
  mcServerUpload: {
    url: APIUrl + "/version/mcServerUpload",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  },
  changeVersion: {
    url: APIUrl + "/version/changeVersion", method: "POST"
  },
  deleteServer:{
    url: APIUrl + "/version/uninstallMCServer", method: "DELETE"
  }

}
export const systemAPI: apiType = {
  getCpuUsage: {
    url: APIUrl + "/system/getCpuUsage",
    method: 'GET'
  },
  getSystemInfo: {
    url: APIUrl + "/system/getInfo",
    method: 'GET'
  },
  getMemUsage: {
    url: APIUrl + "/system/getMemUsage",
    method: 'GET'
  },
  usageInfoWS: {
    url: WSUrl + "/system/usage/",
    method: 'WS'
  },
  systemConfig: {
    url: APIUrl + "/system/getSystemConfig",
    method: 'GET'
  }


} as const;
export const userAPI: apiType = {
  login: {
    url: APIUrl + "/user/userLogin",
    method: 'POST'
  },
  logout: {
    url: APIUrl + "/user/userLogout",
    method: 'POST'
  },
  getCode: {
    url: APIUrl + "/user/getCode",
    method: 'GET'
  },
  forget: {
    url: APIUrl + "/user/forget",
    method: 'POST'
  },
  changePwd:{
    url: APIUrl + "/user/resetPwd",
    method: 'POST'
  }
} as const;

