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
```

## 代码演示

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

### custom-trugger
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
    <ColorPickerPanel enableAlpha={false} color={'#D0021B'} onChange={onChange} mode="RGB" />
    <hr />
    <ColorPickerPanel alpha={80} color={'#D0021B'} onChange={onChange} mode="HSB" />
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
    <ColorPicker color={'#F10'} onChange={changeHandler} placement="topRight" />
    <h4>bottomLeft</h4>
    <ColorPicker color={'#0ad'} alpha={50} onChange={changeHandler} placement="bottomLeft" />
    <h4>bottomRight</h4>
    <ColorPicker color={'#0F0'} onChange={changeHandler} placement="bottomRight" />
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