"use client"

import { useState } from "react"
import { createPortal } from "react-dom"

export default function Application() {
  const initalPosition = { x: 300, y: 500 };
  const [visible, setVisible] = useState<boolean>(false);
  const [clicking, setclicking] = useState<boolean>(false);
  const [position, setPosition] = useState(initalPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
              className={`fixed border border-black w-[200px] h-[200px] left-[${position.x}px] top-[${position.y}px]`}
              style={{ top: `${position.y}px`, left: `${position.x}px` }}
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
