import { skill } from "../data";

type skillsProps = {
  skills: skill[];
};

function Skills({ skills }: skillsProps) {
  const skillElements = skills.map((skill) => {
    return (
      <div className="skill">
        <div className="skill__icon-container">
          <img className="skill__icon" src={skill.icon} alt={skill.name} />
        </div>
        <p className="skill__name">{skill.name}</p>
      </div>
    );
  });

  return (
    <section className="skills">
      <h1 className="skills__title">Skills:</h1>
      <div className="skills__container">{skillElements}</div>
    </section>
  );
}

export default Skills;
