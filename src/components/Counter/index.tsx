import { useState } from "react"

export function Counter() {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button
                onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
                className="btn btn-sm p-0 rounded-circle"
                style={{
                    backgroundColor: "#D9D9D9",
                    color: "#696969",
                    alignItems: "center",
                    height: "22px",
                    width: "22px"
                }}
            >-</button>
            
            <span className="mx-2">{counter}</span>

            <button
                onClick={() => setCounter(counter < 99 ? counter + 1 : counter)}
                className="btn btn-sm btn-primary p-0 rounded-circle"
                style={{
                    color: "#FFF",
                    height: "22px",
                    width: "22px"
                }}
            >+</button>
        </div>
    )
}