import "./Home.css"

function Home() {
    let n = 10
    let m = 20

    console.log(n + m)

    let status = true

    let b = true

    let l = ["ram", "ravi", "raj", "pradeep"]

    let finalAns = l.map((value, index) => <li>{index} {value} </li>)



    return (
        <>
            <div className="mainDiv">
                {finalAns}

                {status ? <p>Welcome to WS</p> : ''}

                {status && <p>Welcome to WS</p>}

                <ul>
                    {
                        l.map((value, index) => {

                            return (
                                <li> {value} </li>
                            )
                        })
                    }

                </ul>

                <ul>
                    {l.map((value, index) => <li> {index + 1} {value} </li>)}

                </ul>



                {n}
                <h1>
                    Home {n + m}
                </h1>
                <p style={ {color:"yellow",fontSize:"25px"} }>

                    Lorem ipsum dolor {"Hello"} {10 + 20}
                    <br />
                    <br />

                    sit amet consectetur, adipisicing elit. Dolorum voluptates, delectus libero iusto blanditiis eum eos sapiente saepe. Sint sit molestiae esse accusantium repudiandae odio repellendus laborum aliquam, facilis id.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptates, delectus libero iusto blanditiis eum eos sapiente saepe. Sint sit molestiae esse accusantium repudiandae odio repellendus laborum aliquam, facilis id.
                </p>
            </div>

        </>


    )
}

export { Home }