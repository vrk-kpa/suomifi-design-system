import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { suomifiTheme } from 'suomifi-ui-components'
import { Icon } from './Icon'

class Collapse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    })
  }

  render() {
    const { label, children } = this.props

    return (
      <div
        style={{
          margin: '1.2rem 0'
        }}>
        <div>
          <button
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '1.2rem 0',
              padding: '.2rem',
              border: 0,
              background: 'transparent',
              fontSize: '1rem',
              color: suomifiTheme.colors.secondaryColor,
              cursor: 'pointer',
              '&:hover': {
                color: suomifiTheme.colors.brandColor
              }
            }}
            onClick={this.toggleOpen}>
            <span
              style={{
                float: 'left',
                width: '16px',
                height: '16px',
                marginRight: '.5rem',
                fill: suomifiTheme.colors.secondaryColor,
                '&:hover': {
                  fill: suomifiTheme.colors.brandColor
                }
              }}>
              {this.state.isOpen ? (
                <Icon.expandableMinus />
              ) : (
                <Icon.expandablePlus />
              )}
            </span>
            {label}
          </button>
        </div>
        {this.state.isOpen && <div>{children}</div>}
      </div>
    )
  }
}

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Collapse
