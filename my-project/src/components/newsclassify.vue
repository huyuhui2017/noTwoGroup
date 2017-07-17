<template>
  <div id="newsclass">
    <div class="container">
      <ul class="list_txt">
        <li class="list_txt_li" :class="{active:!item.ative}" v-for="item of news_data" @click="showList(item)">
          <a href="javascript:;">
            {{item.name}}
            <i class="icon"></i>
          </a>
          <div class="list_txt_li_con" :class="{none:item.ative}" v-for="item2 of item.news_list_data">
            <a href="">{{item2.con_list}}</a>
          </div>
        </li>
      </ul>
    </div>

    <!-- 二维码 -->
    <div class="footer">
      <div class="footer_top">
        <div class="footer_top_center">
          <div class="box_img margin-right">
            <img src="../assets/images/icon/index_102.jpg" class="pre">
            <span>关注官方微信</span>
          </div>
          <div class="box_img">
            <img src="../assets/images/icon/index_104.jpg" class="pre">
            <span>关注官方微博</span>
          </div>
          <span style="font-size: 0.6rem; display: block; margin-top: 0.8rem;">Copyright©2011 仕馨月子会所 （粤ICP备17008523号-1）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default{
  data(){
    return{
      news_data:[
        {
          name:'备孕',
          ative:true,
          news_list_data:[
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            }
          ]
        },
        {
          name:'孕期',
          ative:true,
          news_list_data:[
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            }
          ]
        },
        {
          name:'分娩',
          ative:true,
          news_list_data:[
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            }
          ]
        },
        {
          name:'0-1岁',
          ative:true,
          news_list_data:[
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            },
            {
              con_list:'认识仕馨认识仕馨认识仕馨',
            }
          ]
        }
      ]
    }
  },
  methods:{
    showList(cur) {
      this.news_data.forEach(item => {
        item.ative=true;
      })
      cur.ative=false
    }
  }
}
</script>
