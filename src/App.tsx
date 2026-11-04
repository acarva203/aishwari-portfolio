import { useEffect, useState } from "react"
import Group198 from "./Group198"

const ARTWORK_SIZE = 2505.087

function getArtworkScale() {
  return Math.min(window.innerWidth, window.innerHeight) / ARTWORK_SIZE
}

export default function App() {
  const [scale, setScale] = useState(getArtworkScale)
  const [isRotated, setIsRotated] = useState(false)
  const [hasEmerged, setHasEmerged] = useState(false)
  const [variant, setVariant] = useState<"original" | "emergence">("original")

  useEffect(() => {
    const resizeArtwork = () => setScale(getArtworkScale())

    window.addEventListener("resize", resizeArtwork)
    return () => window.removeEventListener("resize", resizeArtwork)
  }, [])

  const selectVariant = (nextVariant: "original" | "emergence") => {
    setVariant(nextVariant)
    setIsRotated(false)
    setHasEmerged(false)
  }

  const handleArtworkClick = () => {
    if (variant === "emergence") {
      setHasEmerged(true)
      return
    }

    setIsRotated((rotated) => !rotated)
  }

  const isActive = variant === "emergence" ? hasEmerged : isRotated
  const artworkStateClass =
    variant === "emergence"
      ? ` emergence${hasEmerged ? " rings-emerged" : ""}`
      : isRotated
        ? " is-rotated"
        : ""

  return (
    <main className="artwork-stage">
      <nav aria-label="Artwork variant" className="variant-switch">
        <button
          aria-pressed={variant === "original"}
          onClick={() => selectVariant("original")}
          type="button"
        >
          Original
        </button>
        <button
          aria-pressed={variant === "emergence"}
          onClick={() => selectVariant("emergence")}
          type="button"
        >
          Emergence
        </button>
      </nav>
      <button
        aria-label={
          variant === "emergence"
            ? "Reveal the AS spiral artwork"
            : "Rotate the AS kinetic artwork"
        }
        aria-pressed={isActive}
        className="artwork-button"
        onClick={handleArtworkClick}
        type="button"
      >
        <span
          aria-hidden="true"
          className="artwork-canvas"
          style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <span className={`artwork-origin${artworkStateClass}`}>
            <Group198 />
          </span>
        </span>
      </button>
    </main>
  )
}
