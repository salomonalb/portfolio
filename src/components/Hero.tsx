import { user } from "../data";

type HeroProps = {
  name: string;
  lastName: string;
  profilePicture: string;
  description: string;
};

function Hero({ name, lastName, profilePicture, description }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img className="hero__image" src={profilePicture} alt={name} />
      </div>
      <div className="hero__text-container">
        <p className="hero__name">
          {name} {lastName}
        </p>
        <p className="hero__description">{description}</p>
      </div>
    </section>
  );
}

export default Hero;
