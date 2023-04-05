import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"ulbi, nextjs" + keywords}></meta>
        <title>Next JS</title>
      </Head>
      <ul className="navbar">
        <li>
          <A text="Главная" href="/"/>
        </li>
        <li>
          <A className="link" text="Список пользователей" href="/users"/>
        </li>
      </ul>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer