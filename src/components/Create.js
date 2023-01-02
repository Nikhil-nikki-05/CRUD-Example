import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    // const header = { "Access-control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        axios
            .post("https://63ae6f37ceaabafcf179e94a.mockapi.io/crud-example", {
                name: name,
                email: email,
            })
            .then(() => {
                history("/read");
            });
    };

    return (
        <div className='outer-div'>
            <div className="d-flex justify-content-around m-2">
                <h2>Create</h2>
                <Link to="/read">
                    <button className="btn btn-primary">Show data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Create;