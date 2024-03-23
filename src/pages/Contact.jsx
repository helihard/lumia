import { useState } from "react"

function Contact() {
  const [emailInput, setEmailInput] = useState("")
  const [messageInput, setMessageInput] = useState("")
  const [confirmationMessage, setConfirmationMessage] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (emailInput && messageInput) {
      console.log(emailInput, messageInput)
      setEmailInput("")
      setMessageInput("")
      setConfirmationMessage({ type: "success" })
    } else {
      setConfirmationMessage({ type: "error" })
    }
  }

  const handleEmailInputFocus = () => {
    setConfirmationMessage(undefined)
  }

  const handleTextareaInputFocus = () => {
    setConfirmationMessage(undefined)
  }
  return (
    <div className="contact">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Din email</label>
        <input
          type="email"
          value={emailInput}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="namn@exempel.se"
          onChange={(event) => setEmailInput(event.target.value)}
          onFocus={handleEmailInputFocus}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Ditt meddelande</label>
        <textarea
          value={messageInput}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(event) => setMessageInput(event.target.value)}
          onFocus={handleTextareaInputFocus}
        ></textarea>
      </div>
      {confirmationMessage?.type === "success" && (
        <p className="thank-you-message">
          Tack för ditt meddelande till oss på Lumia! Vi återkommer inom tre
          arbetsdagar.
        </p>
      )}
      {confirmationMessage?.type === "error" && (
        <p id="error-message">Har du fyllt i dina uppgifter korrekt?</p>
      )}
      <div className="d-flex justify-content-end">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-outline-dark"
          style={{ marginTop: 10 + "px" }}
        >
          Skicka ditt meddelande
        </button>
      </div>
    </div>
  )
}

export default Contact
