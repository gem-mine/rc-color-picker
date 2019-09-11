import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Color from './helpers/color'

export default class Preset extends React.Component {
  render () {
    const { presetColors, onClick, rootPrefixCls } = this.props
    const presetClasses = cx({
      [`${rootPrefixCls}-wrap`]: true,
      [`${rootPrefixCls}-preset`]: true
    })

    return presetColors.length
      ? (
        <div className={presetClasses}>
          {presetColors.map(color => {
            return (
              <div key={color} className={`${rootPrefixCls}-wrap-preset`} onClick={() => onClick(new Color(color))}>
                <span>
                  <div title={color} className={`${rootPrefixCls}-preset-block`} style={{ backgroundColor: color }} />
                </span>
              </div>
            )
          })}
        </div>
      )
      : null
  }
}

Preset.propTypes = {
  rootPrefixCls: PropTypes.string,
  presetColors: PropTypes.array,
  onClick: PropTypes.func
}
