import React from 'react'
import { Language } from '@wapps/gatsby-plugin-i18next'

const Switcher = ({ changeLng, lng, availableLngs }: Props) => (
  <ul style={{ listStyle: 'none' }}>
    {availableLngs.map(value => (
      <li key={value} style={{ display: 'inline' }}>
        <button
          style={{
            background: 'rebeccapurple',
            color: 'white',
            border: 0,
            cursor: 'pointer',
            textDecoration: value === lng ? 'underline' : 'none'
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

const Wrapper = props => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
)

export default Wrapper
