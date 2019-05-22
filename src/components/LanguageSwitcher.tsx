import React from 'react'
import { Language } from '@wapps/gatsby-plugin-i18next'
import { NamespacesConsumer } from 'react-i18next'
import { Menu, MenuItem, Button } from 'suomifi-ui-components'

const hasMultipleLanguages = ({ availableLngs }: Props): boolean =>
  !!availableLngs && availableLngs.length > 1

const MenuSwitcher = ({
  changeLng,
  lng,
  availableLngs
}: Props): JSX.Element => (
  <NamespacesConsumer ns={['language']}>
    {t => (
      <Menu.language name={t(`${lng}.short`)} aria-label={t('menu.label')}>
        {availableLngs.map(value => (
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

const ListSwitcher = ({
  changeLng,
  lng,
  availableLngs
}: Props): JSX.Element => (
  <NamespacesConsumer ns={['language']}>
    {t => (
      <ul
        aria-label={t('menu.label')}
        style={{
          margin: '1rem',
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        {availableLngs.map(value => (
          <li key={value}>
            <Button.secondaryNoborder
              onClick={() => changeLng(value)}
              disabled={value === lng}
              lang={value}
              style={{ textTransform: 'uppercase' }}>
              {t(`${value}.medium`)}
            </Button.secondaryNoborder>
          </li>
        ))}
      </ul>
    )}
  </NamespacesConsumer>
)

interface Props {
  changeLng: Function
  lng: string
  availableLngs: string[]
}

type Variant = 'menu' | 'list'

const LanguageSwitcher = (
  { variant }: { variant: Variant },
  props
): JSX.Element => (
  <Language>
    {(lngProps: Props) =>
      hasMultipleLanguages({ ...lngProps }) &&
      (variant === 'menu' ? (
        <MenuSwitcher {...props} {...lngProps} />
      ) : variant === 'list' ? (
        <ListSwitcher {...props} {...lngProps} />
      ) : null)
    }
  </Language>
)

const menu = (props): JSX.Element => (
  <LanguageSwitcher variant='menu' {...props} />
)
const list = (props): JSX.Element => (
  <LanguageSwitcher variant='list' {...props} />
)

const Wrapper = { menu, list }

export default Wrapper
