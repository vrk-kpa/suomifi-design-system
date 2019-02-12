import React from 'react'
import { Language } from '@wapps/gatsby-plugin-i18next'

const Switcher = ({ changeLng, lng, availableLngs }: Props): JSX.Element => (
  <ul
    style={{
      margin: 0,
      padding: 0,
      listStyle: 'none',
      whiteSpace: 'nowrap'
    }}>
    {availableLngs &&
      availableLngs.map(value => (
        <li key={value} style={{ display: 'inline' }}>
          <button
            style={{
              width: '30px',
              height: '30px',
              margin: '.2rem',
              padding: '.2rem',
              background: value === lng ? '#2A6EBB' : 'white',
              color: value === lng ? 'white' : '#282828',
              border: '1px solid #C9CDCF',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
            onClick={() => changeLng(value)}>
            {value}
          </button>
        </li>
      ))}
  </ul>
)

interface Props {
  changeLng: Function
  lng: string
  availableLngs: string[]
}

const Wrapper = (props): JSX.Element => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
)

export default Wrapper
