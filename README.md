# vue2-compiler-sfc-browser


支持 `Vue2.6` 和 `Vue2.7` 在运行时的编译, 阉割了部分功能，但能满足绝大部分需求

暂时缺少以下功能：
+ style lang 不支持 scss、stylus， 仅支持less(可提issue)
+ 不支持其他模板语法渲染

## 安装
```
npm i vue2-compiler-sfc-browser
```


## 使用
```js
import { parse, compileStyle, compileScript, compileTemplate } from 'vue2-compiler-sfc-browser'
const desc = parse({
  source: `
  <template>
    <cascader
      :options="options"
      default-value="datunli"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :format-label="format"
    />
  </template>
  <script setup lang="ts">
  const options = [
    {
      value: 'beijing',
      label: 'Beijing',
      children: [
        {
          value: 'chaoyang',
          label: 'ChaoYang',
          children: [
            {
              value: 'datunli',
              label: 'Datunli',
            },
          ],
        },
      }
    }
  ];

  const format = (options) => {
    const labels = options.map((option) => option.label);
    return labels.join('-');
  };
  <\/script>
  <style lang="less" scoped>
    @color: red;
    div {
      a {
        color: @color;
      }
    }
  <\/style>
  `,
})
const style = compileStyle({
  source: desc.styles[0].content,
  id: '123',
  preprocessLang: 'less'
})
console.log("style", style);

const script = compileScript(desc, {
  id: '123'
})
console.log("script", script);

const template = compileTemplate({
  source: desc.template.content
})
console.log("template", template);
```
