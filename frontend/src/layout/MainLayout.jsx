import NavBar from "../components/NavBar"

function MainLayout({children}) {
    return (
        <>
            <NavBar/>

            {children}
        </>
    )
}

export default MainLayout