import React from 'react'
import { PropsWithChildren } from 'react'

type MyComponentProps = {
  items: any[]
  defaultItem: any
}
function MyComponent(props: MyComponentProps) {
  console.log(props)
  return <p>some content</p>
}

const App:React.FC<PropsWithChildren<MyComponentProps>> = () => {
  const users: User[] = [
    { name: 'Bilbo', age: 111 },
    { name: 'Frodo', age: 33 },
  ]

  return (
    <>
      <MyComponent items={['react', 'typescript']} defaultItem={9} />
      <MyComponent items={users} defaultItem={'JUST STRING'} />
    </>
  )
}

type User = {
  name: string
  age: number
}
