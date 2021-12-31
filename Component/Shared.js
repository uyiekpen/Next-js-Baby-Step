import Head from "next/head"
import Footer from "./Footer"
import HeaderComp from "./HeaderComp"

const Shared = ({children}) => {

    return (
        <div>
            <Head>
     <title>My baby steps</title>
     <meta name="description" content="baby step into next"/>

        </Head>
        <HeaderComp/>

            {children}
            <Footer/>

        </div>
    )
}

export default Shared
