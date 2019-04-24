import React from 'react'
import { Button } from 'suomifi-ui-components'
import styled from '@emotion/styled'

const CustomButton = styled(Button)`
  background: red;
`

export const Example = () => (
  <>
    <Button>Example</Button>
    <CustomButton>Example</CustomButton>
  </>
)
