<template>
  <div>
    <v-row>
      <v-col md="6" lg="6" xl="6" cols="12" sm="12">
        <v-card height="100%">
          <v-toolbar density="compact" color="red">
            <v-toolbar-title>基本信息</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-list>
              <v-list-item>
                <h3>
                  服务器名：{{pageData.MCServer.serverName  }}
                  <v-chip class="ma-2" :color="pageData.MCServer.enable?'green':'red'" variant="outlined" density="comfortable" label>
                        {{ pageData.MCServer.enable ? "可用" : "停用" }}
                      </v-chip>
                </h3>
              </v-list-item>
              <v-list-item>
                <h3>服务器版本：{{pageData.MCServer.version}}</h3>
              </v-list-item>
              <v-list-item>
                <v-list-item-title></v-list-item-title>
                <h3 style="display:inline;">插件管理：</h3><v-btn color="blue-darken-4" variant="plain" label
                  @click="$router.push({ name: 'PluginsManage' })">
                  <!-- {{ status && server.enable ? "运行中" : "已关闭" }} -->
                  >>进入管理页
                </v-btn>
              </v-list-item>
              <v-list-item>
                <h3 style="display:inline;">修改启用状态：</h3><v-btn color="green"
                :disabled="(pageData.MCServer.enable)" label @click="changeEnable()">
                  <!-- {{ status && server.enable ? "运行中" : "已关闭" }} -->
                  启用
                </v-btn>
                <!-- <v-btn color="red" class="ml-3"  :disabled="!(pageData.MCServer.enable)" label>
                  禁用
                </v-btn> -->
              </v-list-item>
              <v-list-item>
                <v-list-item-title></v-list-item-title>
                <h3 style="display:inline;">删除服务器：</h3>
                <v-btn color="red" @click="deleteConfigDialog=true">
                  <!-- {{ status && server.enable ? "运行中" : "已关闭" }} -->
                  删除
                </v-btn>
                <Confirm v-model:dialog-status="deleteConfigDialog" @action-save="deleteServer()" />
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card></v-col>
      <v-col>
        <v-card>
          <v-toolbar density="compact" color="red">
            <v-toolbar-title>基础参数配置</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Core包名</v-list-item-title>
                  <v-text-field :counter="10" label="CoreFileName" required variant="underlined"
                    v-model="pageData.MCSetting.jarName" :rules="[rules.required]"></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>内存分配</v-list-item-title>
                  <v-row>
                    <v-col><v-text-field label="最小值" required variant="underlined" v-model="pageData.MCSetting.memMin"
                        :rules="[rules.required]"></v-text-field></v-col>
                    <v-col><v-text-field label="最大值" required variant="underlined" v-model="pageData.MCSetting.memMax"
                        :rules="[rules.required]"></v-text-field></v-col>
                  </v-row>
                </v-list-item>
                    <v-list-item>
                  <v-list-item-title>Java路径</v-list-item-title>
                  <v-text-field :counter="10" label="JavaVersion" required variant="underlined"
                    v-model="pageData.MCSetting.javaVersion" :rules="[rules.required]"></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>启动参数设置</v-list-item-title>
                  <v-text-field :counter="10" label="VMOptions" variant="underlined"
                    v-model="pageData.MCSetting.VMOptions"></v-text-field>
                </v-list-item>

                <v-list-item>
                  <div class="float-right">
                    <v-btn color="blue" class="mr-5" @click="serverConfigDialog=true">保存</v-btn>
                    <v-btn color="red">清空</v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-form>

          </v-card-text>
        </v-card>
        <Confirm v-model:dialog-status="serverConfigDialog" @action-save="saveServerConfig()" />

      </v-col>
    </v-row>



    <v-card class="mt-5">
      <v-toolbar density="compact" color="red">
        <v-toolbar-title>特定配置</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-list>
          <v-list-item v-for="item in pageData.MCConfig">
            <v-list-item-title>
              <v-card>
                <v-card-title>
                  <h4>{{ item.fileName }}</h4>
                </v-card-title>
                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                <v-card-actions><v-btn @click="openDialog(item.fileName)">>编辑</v-btn></v-card-actions>
              </v-card>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">

      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ pageName }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" @click="dialog = false">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <ConfigEdit :config="pageName" :serverId="$route.params.id" />
      </v-card>

    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue';
import ConfigEdit from '@/components/serverConfig/ConfigEdit.vue';
import { serverAPI, versionAPI } from '@/core/api/API';
import $API from '@/core/api/fetch';
import { useRouter } from 'vue-router';
import MCSettingInterface from '@/core/interface/MCSettingInterface'
import MCServerInterface from '@/core/interface/MCServerInterface'
import MCConfigInterface from '@/core/interface/MCConfigInterface'
import Confirm from '@/components/dialog/Confirm.vue';
const rules: any = {
  required: (value: any) => value ? true : '此项不能为空',
}
const router = useRouter()
let pageData = reactive({
  MCSetting: <MCSettingInterface>{
    serverId:undefined,
    javaVersion: "java",
    memMin: "1G",
    memMax: "2G",
    VMOptions: undefined,
    jarName: undefined
  },
  MCServer: <MCServerInterface>{
    id:undefined,
    serverName: undefined,
    version: undefined,
    enable:undefined
  },
  MCConfig: <[MCConfigInterface]>[{
    fileName: undefined,
    description: undefined
  }]
})
let dialog = ref(false)
let pageName = ref("")
function openDialog(page: string) {
  dialog.value = true
  pageName.value = page
}
const id = router.currentRoute.value.params.id[0];
pageData.MCServer.id=id;
pageData.MCSetting.serverId=id
let serverConfigDialog=ref(false)
let deleteConfigDialog=ref(false)
function getConfigList() {
  let data = {
    "id": id
  }
  $API.request(serverAPI.getConfigList, data).then(r => {
    pageData.MCConfig = r.data
  })
}
function getSetting(){
  let data = {
    "serverId": id
  }
  $API.request(serverAPI.getSetting,data).then(r=>{
    pageData.MCSetting=r.data
  })
}
function getServerInfo(){
  let data = {
    "id": id
  }
  $API.request(serverAPI.getServerInfo,data).then(r=>{
    if(Object.keys(r.data).length === 0){router.push({name:"Server"})}
    pageData.MCServer=r.data
  })
}
function changeEnable(){
  let data = {
    "id": id
  }
  $API.request(versionAPI.changeVersion,data).then(r=>{
    if(r.code=='200'){
      getServerInfo()
    }
    alert(r.msg)

  })
}
function saveServerConfig(){
  $API.request(serverAPI.modifyServerConfig,pageData.MCSetting).then(r=>{
    console.log(r)
    alert(r.data)
  }).finally(()=>{
    getServerInfo()
    serverConfigDialog.value=false
  })
}
function deleteServer(){
  let data = {
    "id": id
  }
  $API.request(versionAPI.deleteServer,data).then(r=>{
    alert(r.msg)
    if(r.code==200){
      router.push({name:"Server"})
    }
  })

}
onBeforeMount(() => {
  getConfigList()
  getSetting()
  getServerInfo()
})
</script>
