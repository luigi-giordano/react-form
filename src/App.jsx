import React, { useState } from 'react';

const FormBase = () => {

  const [firstName, setFirstName] = useState('');

  return (
    <div className="container my-5">
      <div className="title my-5"><h2>Inserimento Nomi: {firstName}</h2></div>
      <div className="row">
        <div className="col-6">
          <form action="#">
            <input
              className="form-control"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Inserisci Nome"
            />
            <button
              className="btn btn-primary my-5 w-100"
            >Invio</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBase;