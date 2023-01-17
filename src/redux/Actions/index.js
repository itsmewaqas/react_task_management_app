import { toast } from "react-toastify";
import { BASE_URL, endpoints } from '../constants';
import axios from 'axios';
const httpClient = axios.create({ timeout: 2 * 60 * 1000 });


export const userAdd = (name, email, password, cell, gender, createddate, qualification, usertype, profilepic, status, houseno, city, state, country) => async dispatch => {
  dispatch({
    type: 'USER_ADD',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("cell", cell);
  formData.append("gender", gender);
  formData.append("createddate", createddate);
  formData.append("qualification", qualification);
  formData.append("usertype", usertype);
  formData.append("profilepic", profilepic);
  formData.append("status", status);
  formData.append("houseno", houseno);
  formData.append("city", city);
  formData.append("state", state);
  formData.append("country", country);
  const body = formData;
  const response = await axios.post(BASE_URL + endpoints.USER_ADD, body, { headers: headers })
    .then(response => {
      const userRow = response.data;
      dispatch({
        type: 'USER_ADD_SUCCESS',
        payload: userRow,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'USER_ADD_FAIL',
        payload: err
      })
    });
}

export const userLogin = (email, password) => async dispatch => {
  dispatch({
    type: 'USER_LOGIN',
  });
  const body = { email: email, password: password }
  const response = await axios.post(BASE_URL + endpoints.USER_LOGIN, body)
    .then(response => {
      const loginRes = response.data;
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: loginRes
      }) 
      toast.success("LOGIN SUCCESS");
    })
    .catch((err) => {
      dispatch({
        type: 'USER_LOGIN_FAIL',
        payload: err.response,
      })
      toast.warn("LOGIN FAILURE");
      // alert('Invalid User');
    });
}

export const userFetch = () => async dispatch => {
  dispatch({
    type: 'FETCH_USER',
  });
  const response = await axios.get(BASE_URL + endpoints.USER_FTECH)
    .then(response => {
      const fetchUser = response.data;
      dispatch({
        type: 'FETCH_USER_SUCCESS',
        payload: fetchUser
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_USER_FAIL',
        payload: err
      })
    });
}

export const userUpdate = (ID, name, email, cell, gender, createddate, qualification, usertype, profilepic, status, houseno, city, state, country) => async dispatch => {
  dispatch({
    type: 'USER_UPDATE',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = {
    ID, name, email, cell, gender, createddate, qualification, usertype, profilepic, status, houseno, city, state, country
  }
  const response = await axios.put(BASE_URL + endpoints.USER_UPDATE, body, { headers: headers })
    .then(response => {
      dispatch({
        type: 'USER_UPDATE_SUCCESS',
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'USER_UPDATE_FAIL',
        payload: error
      })
    });
}
 






















export const addtocart = (data) => {
  return {
    type: 'ADDTOCART',
    payload: data,
  }
}

export const removetocart = () => {
  return {
    type: 'REMOVETOCART',
  }
}


export const incNumber = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decNumber = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

export const adduser = (name, email, password, cell, gender, createdDate, qualification, userType, profilePic, houseNo, city, state, country) => async dispatch => {
  dispatch({
    type: 'ADD_USER',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("cell", cell);
  formData.append("gender", gender);
  formData.append("createdDate", createdDate);
  formData.append("qualification", qualification);
  formData.append("userType", userType);
  formData.append("profilePic", profilePic);
  formData.append("houseNo", houseNo);
  formData.append("city", city);
  formData.append("state", state);
  formData.append("country", country);
  const body = formData;
  const response = await axios.post(BASE_URL + endpoints.ADD_USER, body, { headers: headers })
    .then(response => {
      const userRow = response.data;
      dispatch({
        type: 'ADD_USER_SUCCESS',
        payload: userRow,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_USER_FAIL',
        payload: err
      })
    });
}





export const updateProfile = (ID, name, email, cell, gender, createdDate, qualification, userType, profilePic, houseNo, city, state, country) => async dispatch => {
  dispatch({
    type: 'UPDATE_PROFILE',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = {
    ID, name, email, cell, gender, createdDate, qualification, userType, profilePic, houseNo, city, state, country
  }
  const response = await axios.put(BASE_URL + endpoints.UPDATE_USER, body, { headers: headers })
    .then(response => {
      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'UPDATE_PROFILE_FAIL',
        payload: error
      })
    });
}

export const logout = () => async dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
}












// export const fetchData = async () => {
//     const response = await fetch("http://localhost:5000/API/FetchUsers")
//     const data = await response.json()
// }

// export function fetchUser() {
//   return function (dispatch) {
//     dispatch({
//       type: 'FETCH_ALL_USERS',
//     });
//     axios.get("http://localhost:5000/API/FetchUsers").then(response => {
//       const users = response.data;
//       dispatch({
//         type: 'FETCH_ALL_USERS_SUCCESS',
//         payload: users
//       })
//     })
//       .catch((err) => {
//         alert(err.message);
//         dispatch({
//           type: 'FETCH_ALL_USERS_FAIL',
//           payload: err
//         })
//       });
//   }
// }

// export const fetchUser = () => async dispatch => {
//   dispatch({
//     type: 'FETCH_ALL_USERS',
//   });
//   const response = await axios.get(BASE_URL + endpoints.FETCH_USERS)
//     .then(response => {
//       const users = response.data;
//       dispatch({
//         type: 'FETCH_ALL_USERS_SUCCESS',
//         payload: users
//       })
//     })
//     .catch((err) => {
//       dispatch({
//         type: 'FETCH_ALL_USERS_FAIL',
//         payload: err
//       })
//     });
// }






// export function loginStaff(username, password, history, url) {
//   return function (dispatch) {

//     dispatch({
//       type: 'LOGIN_INITIAL',
//     })

//     const body = { staffId: username, password: password }
//     axios.post(BASE_URL + endpoints.LOGIN_STAFF, body).then(response => {
//       console.log(response.data)
//       const staff = response.data;

//       history.push(url)
//       dispatch({
//         type: 'LOGIN_STAFF_SUCCESS',
//         payload: staff,
//       })
//     })
//       .catch((err) => {
//         alert(err.message);
//         dispatch({
//           type: 'LOGIN_STAFF_FAIL',
//           payload: err
//         })
//       });
//   }
// }

// axios.post(BASE_URL + endpoints.LOGIN_STAFF, body)

// export const loginUser = (email, password) => async dispatch => {
//   dispatch({
//     type: 'LOGIN_USERS',
//   });
//   const body = { email: email, password: password }
//   const response = await axios.post(BASE_URL + endpoints.LOGIN_USER, body)
//     .then(response => {
//       const loginRes = response.data;
//       localStorage.setItem("user-details", JSON.stringify(loginRes));
//       dispatch({
//         type: 'LOGIN_USERS_SUCCESS',
//         payload: loginRes
//       })
//     })
//     .catch((err) => {
//       dispatch({
//         type: 'LOGIN_USERS_FAIL',
//         payload: err,
//       })
//       alert('Invalid User');
//     });
// }



export const fetchAdmin = () => async dispatch => {
  dispatch({
    type: 'FETCH_ALL_ADMIN',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_ADMIN)
    .then(response => {
      const adminUsers = response.data;
      dispatch({
        type: 'FETCH_ALL_ADMIN_SUCCESS',
        payload: adminUsers
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_ADMIN_FAIL',
        payload: err
      })
    });
}


export const fetchEmployee = () => async dispatch => {
  dispatch({
    type: 'FETCH_ALL_EMPLOYEE',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_EMPLOYEE)
    .then(response => {
      const employeeList = response.data;
      dispatch({
        type: 'FETCH_ALL_EMPLOYEE_SUCCESS',
        payload: employeeList
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_EMPLOYEE_FAIL',
        payload: err
      })
    });
}


export const fetchDepartment = () => async dispatch => {
  dispatch({
    type: 'FETCH_ALL_DEPARTMENT',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_DEPARTMENT)
    .then(response => {
      const departmentList = response.data;
      dispatch({
        type: 'FETCH_ALL_DEPARTMENT_SUCCESS',
        payload: departmentList
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_DEPARTMENT_FAIL',
        payload: err
      })
    });
}


export const fetchProject = () => async dispatch => {
  dispatch({
    type: 'FETCH_ALL_PROJECT',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_PROJECT)
    .then(response => {
      const projectList = response.data;
      dispatch({
        type: 'FETCH_ALL_PROJECT_SUCCESS',
        payload: projectList
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_PROJECT_FAIL',
        payload: err
      })
    });
}


export const fetchTasks = () => async dispatch => {
  dispatch({
    type: 'FETCH_ALL_TASKS',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_TASKS)
    .then(response => {
      const taskList = response.data;
      dispatch({
        type: 'FETCH_ALL_TASKS_SUCCESS',
        payload: taskList
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_TASKS_FAIL',
        payload: err
      })
    });
}






export const addDepartment = (departmentName, createdDate, taskid) => async dispatch => {
  dispatch({
    type: 'ADD_DEPARTMENT',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = {
    departmentName, createdDate, taskid
  }
  const response = await axios.post(BASE_URL + endpoints.ADD_DEPARTMENT, body, { headers: headers })
    .then(response => {
      const addDepart = response.data;
      dispatch({
        type: 'ADD_DEPARTMENT_SUCCESS',
        payload: addDepart,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_DEPARTMENT_FAIL',
        payload: err
      })
    });
}



export const updateDepartment = (ID, departmentName, createdDate, taskid) => async dispatch => {
  dispatch({
    type: 'UPDATE_DEPARTMENT',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = {
    ID, departmentName, createdDate, taskid
  }
  const response = await axios.put(BASE_URL + endpoints.UPDATE_DEPARTMENT, body, { headers: headers })
    .then(response => {
      const updateDepart = response.data;
      dispatch({
        type: 'UPDATE_DEPARTMENT_SUCCESS',
        payload: updateDepart,
        //payload: { updateDepart: { ID, departmentName, createdDate, taskid } }
      })
    })
    .catch((err) => {
      dispatch({
        type: 'UPDATE_DEPARTMENT_FAIL',
        payload: err
      })
    });
}




export const UpdateEmp = (name, email, getIDS) => async dispatch => {
  dispatch({
    type: 'UPDATE_EMP',
  });
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = {
    getIDS, name, email
  }
  const response = await axios.put(BASE_URL + endpoints.UPDATE_EMP, body, { headers: headers })
    .then(response => {
      const udEMP = response.data;
      dispatch({
        type: 'UPDATE_EMP_SUCCESS',
        payload: udEMP,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'UPDATE_EMP_FAIL',
        payload: err
      })
    });
}



export const addProfilepic = (picName, Profile) => async dispatch => {
  dispatch({
    type: 'ADD_PROFILE',
  });
  const headers = {
    'Content-Type': 'application/json',
  }

  const formData = new FormData();
  formData.append("profilePic", Profile);
  formData.append("picName", picName);

  const body = formData;
  const response = await axios.post(BASE_URL + endpoints.ADD_PROFILE, body, { headers: headers })
    .then(response => {
      const profileData = response.data;
      dispatch({
        type: 'ADD_PROFILE_SUCCESS',
        payload: profileData,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_PROFILE_FAIL',
        payload: err
      })
    });
}


export const fetchProfile = () => async dispatch => {
  dispatch({
    type: 'FETCH_PROFILE',
  });
  const response = await axios.get(BASE_URL + endpoints.FETCH_PROFILE)
    .then(response => {
      const feProfile = response.data;
      dispatch({
        type: 'FETCH_PROFILE_SUCCESS',
        payload: feProfile
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_PROFILE_FAIL',
        payload: err
      })
    });
}