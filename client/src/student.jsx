import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
  const [students, setStudents] = useState([
  ]);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setStudents(result.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <Link to="/create" className='btn btn-success'>Add+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
         {  /* students.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                   
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>

                                        <button className='btn btn-danger' 
                                        onClick={(e) => handleDelete(user._id)} >Delete</button>
                                    </td>
                                </tr>
         ))*/}
            {students && students.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success'>update</Link>
                  <button className='btn btn-danger ms-2'>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
