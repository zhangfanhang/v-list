# vue2版本

## 开发环境

![](https://img.shields.io/badge/vue-2.6.14-4FC08D?logo=Vue.js&?style=flat-square)


## 用法

```shell
npm i @zhangfanhang/v-list
```

```vue
<template>
    <v-list
        :list-data="listData"
        :item-height="100"
        v-slot="slotProps"
    >
        <div class="context">
            {{ slotProps.item }}
        </div>
    </v-list>
</template>
```

```js
import VList from '@zhangfanhang/v-list'

export default{
    data(){
        return{
          listData:[1,2,3,4,5,6]
        }
    },
    component:{
        VList
    }
}
```



## 参数Props

| 属性名     | 含义         | 数据类型 | 是否必传                                       |
| ---------- | ------------ | -------- | ---------------------------------------------- |
| listData   | 渲染数据列表 | Array    | 是                                             |
| column     | 数据项列数   | Number   | 否，默认为1                                    |
| itemHeight | 数据项高度   | Number   | 否，默认为100                                  |
| height     | 容器高度     | String   | 否，默认100%，即父元素高度（需设置父元素高度） |

