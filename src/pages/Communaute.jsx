import React from "react"
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar"

const Communaute = () => {
    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="main__container">
                <h1 className="title is-1">This is the communauté Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras gravida, risus at dapibus aliquet, elit quam
                    scelerisque tortor, nec accumsan eros nulla interdum justo.
                    Pellentesque dignissim, sapien et congue rutrum, lorem
                    tortor dapibus turpis, sit amet vestibulum eros mi et odio.
                </p>
            </div>
        </>
    )
}

export default Communaute
