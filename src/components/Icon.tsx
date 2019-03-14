import React, { Component } from 'react'

import SuomiFi from './icons/SuomiFi'
import Solution from './icons/Solution'
import CaretDown from './icons/CaretDown'
import CaretUp from './icons/CaretUp'
import ExpandablePlus from './icons/ExpandablePlus'
import ExpandableMinus from './icons/ExpandableMinus'

export class Icon extends Component {
  public static suomifi = () => <SuomiFi />
  public static solution = () => <Solution />
  public static caretDown = () => <CaretDown />
  public static caretUp = () => <CaretUp />
  public static expandableMinus = () => <ExpandableMinus />
  public static expandablePlus = () => <ExpandablePlus />
}
