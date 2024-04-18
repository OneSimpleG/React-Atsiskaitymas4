import { addDoc, collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { db } from "../firebase"

function Form() {
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formQuestion, setFormQuestion] = useState("")
  const [submitions, setSubmitions] = useState([])
  async function fetchPost() {
    await getDocs(collection(db, "formSubmitions")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setSubmitions(newData)
      console.log("newData:", newData)
      console.log("submitions", submitions)
    })
  }
  async function handleSubmit(event) {
    event.preventDefault()
    const formSubmition = {
      name: formName,
      email: formEmail,
      question: formQuestion,
    }
    try {
      const docRef = await addDoc(collection(db, "formSubmitions"), {
        submition: formSubmition,
      })
      console.log("Document written with ID: ", docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
    setFormName("")
    setFormEmail("")
    setFormQuestion("")
    fetchPost()
  }
  const handleInputName = (event) => {
    setFormName(event.target.value)
  }
  const handleInputEmail = (event) => {
    setFormEmail(event.target.value)
  }
  const handleInputQuestion = (event) => {
    setFormQuestion(event.target.value)
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          placeholder="Enter name"
          value={formName}
          onChange={handleInputName}
          name="Name"
          required
        />
        <label>Email </label>
        <input
          type="email"
          placeholder="Enter email"
          value={formEmail}
          onChange={handleInputEmail}
          name="Email"
          required
        />
        <label>Question </label>
        <input
          type="text"
          placeholder="Enter question"
          style={{ height: "50px" }}
          value={formQuestion}
          onChange={handleInputQuestion}
          name="Question"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div className="SubmisionBox">
        <div
          className="Submision"
          style={{ height: "35px", fontWeight: "Bold" }}
        >
          <div className="SubmisionName">UserName:</div>
          <div className="SubmisionQuestion">Question:</div>
        </div>
        {submitions?.map((el, i) => {
          return (
            <div key={i} className="Submision">
              <div className="SubmisionName">{el.submition.name}</div>
              <div className="SubmisionQuestion">{el.submition.question}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Form
