import cstyle from './contactus.module.scss'

export default function contactus() {
    return (
        <form className={container}>
        <h1>Get in touch</h1>
        <div className={email}>
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className={phone}>
          <label htmlFor="frm-phone">Phone</label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
          />
        </div>
        <div className={fname}>
          <div>
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className={message}>
          <label htmlFor="frm-message">Message</label>
          <textarea id="frm-message" rows="6" name="message"></textarea>
        </div>
        <div className={button}>
          <button type="submit">Submit</button>
        </div>
      </form>
            








       
      
    )
}