import { useEffect, useState } from "react"
import Group198 from "./Group198"

const ARTWORK_SIZE = 2505.087

function getArtworkScale() {
  return Math.min(window.innerWidth, window.innerHeight) / ARTWORK_SIZE
}

export default function App() {
  const [scale, setScale] = useState(getArtworkScale)
  const [isRotated, setIsRotated] = useState(false)

  useEffect(() => {
    const resizeArtwork = () => setScale(getArtworkScale())

    window.addEventListener("resize", resizeArtwork)
    return () => window.removeEventListener("resize", resizeArtwork)
  }, [])

  return (
    <main className="artwork-stage">
      <button
        aria-label="AS kinetic artwork"
        aria-pressed={isRotated}
        className="artwork-button"
        onClick={() => setIsRotated((rotated) => !rotated)}
        type="button"
      >
        <span
          aria-hidden="true"
          className="artwork-canvas"
          style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <span className={`artwork-origin${isRotated ? " is-rotated" : ""}`}>
            <Group198 />
          </span>
        </span>
      </button>
    </main>
  )
}
