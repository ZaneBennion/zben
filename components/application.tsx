"use client"

import { useState } from "react"
import { createPortal } from "react-dom"

export default function Application() {
  const [visible, setVisible] = useState<boolean>(false);
  const [clicking, setclicking] = useState<boolean>(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  function handleMouseDown() {
    setclicking(true);
  }

  function handleMouseUp() {
    setclicking(false);
  }

  return (
    <div>
      <button onClick={() => toggleVisible()}>Toggle</button>
      {visible &&
        <div>
          {createPortal(
            <div
              className="border border-black w-[200px] h-[200px]"
              onMouseDown={() => handleMouseDown()}
              onMouseUp={() => handleMouseUp()}
            >
              <div>portal balls</div>
              <span>{clicking ? "mouse down" : "mouse up"}</span>
            </div>,
            document.body
          )}
        </div>
      }
    </div >
  )
}
