const assetPathPrefix = "/assets/rings"

const rings = [
  {
    className: "ring-layer-194 ring-layer-forward",
    nodeId: "6024:572",
    src: `${assetPathPrefix}/ring-194.svg`,
  },
  {
    className: "ring-layer-195 ring-layer-reverse",
    nodeId: "6024:573",
    src: `${assetPathPrefix}/ring-195.svg`,
  },
  {
    className: "ring-layer-196 ring-layer-forward",
    nodeId: "6024:575",
    src: `${assetPathPrefix}/ring-196.svg`,
  },
  {
    className: "ring-layer-197 ring-layer-reverse",
    nodeId: "6024:856",
    src: `${assetPathPrefix}/ring-197.svg`,
  },
]

const asMask = `${assetPathPrefix}/as-mask.svg`
const asFill = `${assetPathPrefix}/as-fill.svg`

export default function Group198() {
  return (
    <div className="contents relative size-full" data-node-id="6024:2290">
      {rings.map((ring) => (
        <div
          className={`ring-layer ${ring.className}`}
          data-node-id={ring.nodeId}
          key={ring.nodeId}
        >
          <img alt="" className="ring-composite" src={ring.src} />
        </div>
      ))}
      <div
        className="absolute left-[1978px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-34.787px_270.125px] mask-size-[1296.064px_720.703px] size-[1297px] top-[1157px]"
        data-node-id="6024:1137"
        style={{ maskImage: `url("${asMask}")` }}
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={asFill}
        />
      </div>
    </div>
  )
}
