import { Header } from "./Header"

export const Layout = ({children,score}) => {
  return (
    <>
      <Header score={score}/>
      <main className="wrapper flex min-h-[80vh] flex-col justify-around">
        {children}
      </main>
    </>
  )
}
