import React from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

import { Text } from 'components/ResponsiveComponents'

const isValid = (item: ListItem): boolean => item && !!item.text

const getValidOnly = (items: ListItem[]): ListItem[] => items.filter(isValid)

const BulletedList = ({ items = [] }: Props): JSX.Element => {
  items = getValidOnly(items)

  if (items.length > 0) {
    return (
      <ul style={{ margin: 0, padding: `0 0 0 ${suomifiTheme.spacing.l}` }}>
        {items.map((item, index) => (
          <li key={index}>
            <Text>{item.text}</Text>
          </li>
        ))}
      </ul>
    )
  }

  return null
}

export interface Props {
  items: ListItem[]
}

export interface ListItem {
  text: string
}

export default BulletedList
