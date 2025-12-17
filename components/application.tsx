"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function Application({ children }) {
  const initalPosition = { x: 300, y: 500 };
  const [visible, setVisible] = useState<boolean>(false);
  const [clicking, setclicking] = useState<boolean>(false);
  const [position, setPosition] = useState(initalPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function toggleVisible() {
    setVisible(!visible);
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setclicking(true);

    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!clicking) return;

      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    }

    const handleMouseUp = () => {
      setclicking(false);
    }

    if (clicking) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

  }, [clicking, offset])

  return (
    <div>
      <button onClick={() => toggleVisible()}>Toggle</button>
      {visible &&
        <div>
          {createPortal(
            <div
              className={`border border-black bg-white w-[200px] h-[200px]`}
              style={{
                position: 'fixed',
                top: `${position.y}px`,
                left: `${position.x}px`,
                cursor: clicking ? 'grabbing' : 'grab',
                userSelect: 'none',
              }}
              onMouseDown={handleMouseDown}
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
