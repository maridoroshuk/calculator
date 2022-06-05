import React from 'react'

import { PageLayout } from '@/components/Header/Header'

import Loader from '@/components/Loader'

import { Card, Heading } from './Settings.styled'

const Settings = () => {
  return (
    <PageLayout>
      <Card>
        <Heading id="welcome">Welcome!</Heading>
        <Loader />
      </Card>
    </PageLayout>
  )
}

export default Settings
