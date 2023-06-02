import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Reglage = () => {
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="main__container">
                <h1 className="title is-1">This is the Réglages Page</h1>
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

export default Reglage
