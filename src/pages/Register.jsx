import { useState } from "react";
import Header from "../components/Header";
import AdvocateForm from "../components/AdvocateForm";
import LitigantForm from "../components/LitigantForm";
import ClerkForm from "../components/ClerkForm";

const Register = () => {
  const [type, setType] = useState("advocate");

  return (
    <>
      <Header />

      <div className="container">
        <h2>Registration Form</h2>

        <div className="reg-type">
          <label>
            <input
              type="radio"
              value="advocate"
              checked={type === "advocate"}
              onChange={(e) => setType(e.target.value)}
            />
            Advocate
          </label>

          <label>
            <input
              type="radio"
              value="litigant"
              checked={type === "litigant"}
              onChange={(e) => setType(e.target.value)}
            />
            Litigant
          </label>

          <label>
            <input
              type="radio"
              value="clerk"
              checked={type === "clerk"}
              onChange={(e) => setType(e.target.value)}
            />
            Clerk
          </label>
        </div>

        {type === "advocate" && <AdvocateForm />}
        {type === "litigant" && <LitigantForm />}
        {type === "clerk" && <ClerkForm />}

        <button className="submit-btn">Preview</button>
      </div>
    </>
  );
};

export default Register;
