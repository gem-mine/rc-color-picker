# react-color-picler

---

React Color Pocker

fork from [rc-color-picker](https://github.com/react-component/color-picker)

## 何时使用

- 从一组颜色中进行选择，用于改变元素的颜色或背景色

## 浏览器支持

IE 9+

## 安装

```bash
npm install @gem-mine/rc-color-picker --save
```

## 运行

```bash
# 默认开启服务器，地址为 ：http://local:8000/

# 能在ie9+下浏览本站，修改代码后自动重新构建，且能在ie10+运行热更新，页面会自动刷新
npm run start

# 构建生产环境静态文件，用于发布文档
npm run site
```

## 代码演示

在线示例：https://gem-mine.github.io/rc-color-picker/site/

### anim
```jsx
import '@gem-mine/rc-color-picker/lib/style/'
import ColorPicker from '@gem-mine/rc-color-picker'

function changeHandler(colors) {
  console.log(colors);
}

ReactDOM.render(
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <ColorPicker
      animation="slide-up"
      color={'#36c'}
      onChange={changeHandler}
    />
  </div>
, mountNode)
```

### custom-trigger
```jsx
import '@gem-mine/rc-color-picker/lib/style/'
import ColorPicker from '@gem-mine/rc-color-picker'

function changeHandler(colors) {
  console.log(colors);
}

ReactDOM.render(
  <div style={{ textAlign: 'center' }}>
    <ColorPicker
      color={'#36c'}
      onChange={changeHandler}
    >
      <span>choose color</span>
    </ColorPicker>
  </div>
, mountNode)
```

### panel
```jsx
import '@gem-mine/rc-color-picker/lib/style/'
import { Panel as ColorPickerPanel } from '@gem-mine/rc-color-picker'

function onChange(obj) {
  console.log(obj);
}

ReactDOM.render(
  <div style={{ backgroundColor: '#ddd', padding: 20 }}>
    <ColorPickerPanel
      enableAlpha={false}
      color={'#D0021B'}
      onChange={onChange}
      mode="RGB"
    />
    <hr />
    <ColorPickerPanel
      alpha={80}
      color={'#D0021B'}
      onChange={onChange}
      mode="HSB"
    />
  </div>
, mountNode)
```

### no-presetColors
```jsx
import '@gem-mine/rc-color-picker/lib/style/'
import { Panel as ColorPickerPanel } from '@gem-mine/rc-color-picker'

function onChange(obj) {
  console.log(obj);
}

ReactDOM.render(
  <div style={{ backgroundColor: '#ddd', padding: 20 }}>
    <ColorPickerPanel
      enableAlpha={false}
      color={'#D0021B'}
      onChange={onChange}
      mode="RGB"
      presetColors={[]}
    />
  </div>
, mountNode)
```

### simple
```jsx
import '@gem-mine/rc-color-picker/lib/style/'
import ColorPicker from '@gem-mine/rc-color-picker'

function changeHandler(colors) {
  console.log(colors);
}

function closeHandler(colors) {
  console.log(colors);
}

ReactDOM.render(
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <h4>topLeft</h4>
    <ColorPicker
      color={'#36c'}
      alpha={30}
      onChange={changeHandler}
      onClose={closeHandler}
      placement="topLeft"
      className="some-class"
    >
      <span className="rc-color-picker-trigger" />
    </ColorPicker>
    <h4>topRight</h4>
    <ColorPicker
      color={'#F10'}
      onChange={changeHandler}
      placement="topRight"
    />
    <h4>bottomLeft</h4>
    <ColorPicker
      color={'#0ad'}
      alpha={50}
      onChange={changeHandler}
      placement="bottomLeft"
    />
    <h4>bottomRight</h4>
    <ColorPicker
      color={'#0F0'}
      onChange={changeHandler}
      placement="bottomRight"
    />
  </div>
, mountNode)
```

## API

### ColorPicker.props

| name | type | default | description |
| --- | --- | --- | --- |
| align | Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align) | | popup 's align config |
| alpha | Number | `100` | opacity of the color |
| animation | String | | index.css support 'slide-up' |
| children | Node | `<span className='react-colorpicker-trigger'></span>` | additional trigger appended to picker |
| className | String | '' | Aditional class to be added to component |
| color | String | `#ff0000` | color board current background color |
| defaultAlpha | Number | `100` | opacity of the color |
| defaultColor | String | `#ff0000` | color board current background color |
| enableAlpha | Boolean | `true` | enable alpha  controls |
| getCalendarContainer | Function():Element | `function(){return document.body;}` | dom node where picker to be rendered into |
| mode | String | `RGB` | color mode, support mode 'RGB', 'HSB' |
| onChange | Function | noop | when select color |
| onClose | Function | noop | when color picker popup close |
| onOpen | Function | noop | when color picker popup open |
| placement | String | `topLeft` | one of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| transitionName | String | | css class for animation |


### ColorPicker.Panel.props

| name | type | default | description |
| --- | --- | --- | --- |
| alpha | Number | `100` | opacity of the color |
| className | String   | `''` | Aditional class to be added to component |
| color | String | `#ff0000` | color board current background color |
| defaultAlpha | Number | `100` | opacity of the color |
| defaultColor | String | `#ff0000` | color board current background color |
| enableAlpha | Boolean | `true` | enable alpha  controls |
| mode | String | `RGB` | color mode, support mode 'RGB', 'HSB' |
| onBlur | Function | | when picker loose focus |
| onChange | Function | | when select color trigger |
| onFocus | Function | | when picker focus trigger |
| style | Object | `{}` | root node CSS style |
| presetColors | string[] | \['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'\] | preset colors to be selected |