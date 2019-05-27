import React from 'react'

const isValid = (item: ListItem): boolean => item && !!item.text

const getValidOnly = (items: ListItem[]): ListItem[] => items.filter(isValid)

const BulletedList = ({ items = [] }: Props): JSX.Element => {
  items = getValidOnly(items)

  if (items.length > 0) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
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
