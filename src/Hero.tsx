import { userData, user } from "./data"

type HeroProps = {
    userData : user
}

function Hero({ userData }: HeroProps) {
  return (
    <section className="hero">
        <div className="hero__image-container">
            <img className="hero__image" src={userData.profilePicture} alt={userData.name} />
        </div>
        <div className="hero__text-container">
            <p className="hero__name">{userData.name}</p>
            <p className="hero__description">{userData.description}</p>
        </div>
    </section>
  )
}

export default Hero