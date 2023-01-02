import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);
    const [tabledark, setTabledark] = useState('');

    function getData() {
        axios
            .get("https://63ae6f37ceaabafcf179e94a.mockapi.io/crud-example")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios.delete(
            `https://63ae6f37ceaabafcf179e94a.mockapi.io/crud-example/${id}`
        ).then(() => {
            getData();
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" onClick={() => {
                    if (tabledark === 'table-dark') setTabledark("")
                    else setTabledark("table-dark");
                }}
                />
            </div>
            <div className="d-flex justify-content-around m-2">
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">SL.NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button className='btn-success' onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })


                }
            </table>
        </div>
    )
}

export default Read;