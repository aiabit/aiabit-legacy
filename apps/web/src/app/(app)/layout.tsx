import { PropsWithChildren } from 'react'
import AntdProvider from '~/components/antd-provider'

export default function AppLayout(props: PropsWithChildren) {
  return (
    <AntdProvider>
      {props.children}
    </AntdProvider>
  )
}