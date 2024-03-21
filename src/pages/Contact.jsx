function Contact() {
  return (
    <div className="contact">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Din email</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="namn@exempel.se"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Ditt meddelande</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-outline-dark">
          Skicka ditt meddelande
        </button>
      </div>
    </div>
  )
}

export default Contact
