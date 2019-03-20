import React from 'react'
import { Language } from '@wapps/gatsby-plugin-i18next'
import { NamespacesConsumer } from 'react-i18next'
import { Menu, MenuItem } from 'suomifi-ui-components'

const Switcher = ({ changeLng, lng, availableLngs }: Props): JSX.Element => (
  <NamespacesConsumer ns={['language']}>
    {t => (
      <Menu.language name={t(`${lng}.short`)}>
        {availableLngs &&
          availableLngs.map(value => (
            <MenuItem.language
              key={value}
              onSelect={() => changeLng(value)}
              selected={value === lng}>
              {t(`${value}.long`)}
            </MenuItem.language>
          ))}
      </Menu.language>
    )}
  </NamespacesConsumer>
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
