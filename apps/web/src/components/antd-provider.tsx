'use client'

import type Entity from '@ant-design/cssinjs/es/Cache'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'

const AntdProvder = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), [])
  useServerInsertedHTML(() => <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />)
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider>{children}</ConfigProvider>
    </StyleProvider>
  )
}

export default AntdProvder
