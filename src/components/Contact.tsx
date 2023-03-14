import { contact } from "../data"

type ContactProps = {
    contactMethods: contact[]
}

function Contact({contactMethods}: ContactProps) {

    const contactElements = contactMethods.map(contact => {
        return (
            <div className="contact">
                <a className="contact__button" href={contact.link}>
                    <img className="contact__icon" src={contact.icon} alt={contact.name} />
                </a>
            </div>
        )
    })

  return (
    <section className="contactme">
        <h2 className="contactme__title">Contact Me:</h2>
        <div className="contactme__container">{contactElements}</div>
    </section>
  )
}

export default Contact