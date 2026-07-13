import React, { useEffect, useState } from "react";
import api from "../services/api";


const AdminUsers = () => {


  const [users,setUsers] = useState([]);



  useEffect(()=>{


    const fetchUsers = async()=>{

      try{

        const response = await api.get("/admin/users");

        setUsers(response.data);


      }
      catch(error){

        console.log(error);

      }

    };


    fetchUsers();


  },[]);




  return (

    <div
      style={{
        padding:"30px",
        fontFamily:"Arial"
      }}
    >


      <h1
        style={{
          textAlign:"center",
          color:"#111"
        }}
      >
        👥 Users
      </h1>




      <table

        border="1"

        style={{
          width:"100%",
          marginTop:"30px",
          borderCollapse:"collapse"
        }}

      >


        <thead>


          <tr>

            <th>S.No</th>

            <th>User ID</th>

            <th>Username</th>

            <th>Email</th>

            <th>Operation</th>


          </tr>


        </thead>




        <tbody>


        {
          users.map((user,index)=>(


            <tr key={user._id}>


              <td>
                {index+1}
              </td>



              <td>
                {user._id}
              </td>



              <td>
                {user.name}
              </td>



              <td>
                {user.email}
              </td>



              <td>


                <button
                  style={{
                    background:"red",
                    color:"white",
                    border:"none",
                    padding:"8px 15px",
                    borderRadius:"5px",
                    cursor:"pointer"
                  }}
                >
                  Delete
                </button>


              </td>



            </tr>


          ))
        }


        </tbody>


      </table>



    </div>


  );

};


export default AdminUsers;