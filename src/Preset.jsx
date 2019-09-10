import React from 'react'
import PropTypes from 'prop-types'
import Color from './helpers/color'

export default class Preset extends React.Component {
  render () {
    const { presetColors, onClick, rootPrefixCls } = this.props

    return presetColors.length
      ? (
        <div className={`${rootPrefixCls}-wrap`} style={{ height: '40px', padding: '6px 8px' }}>
          {presetColors.map(color => {
            return (
              <div key={color} className={`${rootPrefixCls}-wrap-preset`} onClick={() => onClick(new Color(color))}>
                <span>
                  <div title={color} style={{ backgroundColor: color, width: '100%', height: '100%' }} />
                </span>
              </div>
            )
          })}
        </div>
      )
      : null
  }
}

Preset.PropTypes = {
  rootPrefixCls: PropTypes.string,
  presetColors: PropTypes.array,
  onClick: PropTypes.func
}
