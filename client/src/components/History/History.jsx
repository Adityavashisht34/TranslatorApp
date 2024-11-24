import {useEffect, useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'


function History() {
    const [users, setUsers] = useState([{}])
    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/translationsData")
        .then((data)=>{
            let info = data.data;
            setUsers(info)
        }
    )
        .catch(err=>console.log(err))
    },[])

    return (
        <div className='w-100 vh-100 d-flex justify-content-center'>
            <div className='w-50'>
            <table className='table'>
                <thead>
                    <tr>
                       <th>
                        From Language
                        </th> 
                        <th>
                            From Text
                        </th>
                        <th>
                            To Language
                        </th>
                        <th>
                            To Text
                        </th>
                        <th>
                            Time of Entry
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.fromlanguage}</td>
                  <td>{user.fromtranslation}</td>
                  <td>{user.tolanguage}</td>
                  <td>{user.totranslation}</td>
                  <td>{user.date}</td>
                </tr>
              ))
            }
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default History;