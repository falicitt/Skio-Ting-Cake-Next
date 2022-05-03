import styles from '../styles/Contact.module.css'
import { useState } from 'react'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <div>
      <h2 className={styles.title}>contact us</h2>
      <form className={styles.form} name="contactForm" action="#">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={styles.input}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          pattern=".+@gmail\.com"
          placeholder="Format: xxx@gmail.com"
          required
        />

        <label htmlFor="feedback">Message:</label>
        <textarea name="feedback" cols="38" rows="10" required></textarea>

        <input
          className={styles.submit}
          type="submit"
          name="validate"
          id="validate"
          value="Send"
        />
      </form>
    </div>
  )
}
