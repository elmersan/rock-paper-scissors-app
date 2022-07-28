import { Header } from "./Header"

export const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main className="wrapper flex min-h-[80vh] flex-col justify-around">
        {children}
      </main>
    </>
  )
}
