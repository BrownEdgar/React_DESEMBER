import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { MyContext } from './MyContext'

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Living Nature",
            img: "https://bipbap.ru/wp-content/uploads/2017/04/187604chan1309313071950.jpg",
            year: "2020",
            description: "Nature",
            text: "When the sky merges with the sea, the boundary between the earthly and the heavenly disappears, and true wonders of nature unfold before us. The colors shimmer as if alive, the waves reflect the clouds, and the horizon becomes an illusion - mysterious, infinite, and alluring. In these moments, it feels as if nature itself whispers its secrets to us, inviting us to touch eternity."
        },
        {
            id: 2,
            title: "Anime Portrait 2018",
            img: "https://i.pinimg.com/736x/f2/96/cd/f296cda51fc2b175ea910e690f338330.jpg",
            year: "2018",
            description: "Illustration",
            text: "Anime is a unique art form combining stunning visuals, deep storytelling, vibrant characters, and emotional journeys that captivate fans worldwide."
        },
        {
            id: 3,
            title: "Components",
            img: "https://tse1.mm.bing.net/th/id/OIP.BbvU6OFI3LFpIThjj4f4CwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
            year: "2018",
            description: "Components Design",
            text: "A React component is a reusable, independent piece of UI that manages its own state and renders based on given props."
        },
    ])
    return (
        <div className='App'>

            <MyContext value={{ data, setData }}>

                <Dashboard />

            </MyContext>



        </div>
    )
}

export default App