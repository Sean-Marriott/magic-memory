import './SingleCard.css'

export default function SingleCard({ card }) {
  return (
    <div className="card" key={card.id}>
        <div>
            {/* Card back is either the "cover" or the actual item */}
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="/img/cover.png" alt="card back" />
        </div>
    </div>
  )
}
