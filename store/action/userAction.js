export const FETCH_RESUME = 'FETCH_RESUME';
export const FETCH_VACANCY = 'FETCH_VACANCY';
export const ADD_RESUME = 'ADD_RESUME';
export const ADD_VACANCY = 'ADD_VACANCY';
export const DELETE_POST = 'DELETE_POST';

export const addResume = (id, name, gpa, location) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/resume.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          gpa,
          location,
        }),
      },
    );
    dispatch({type: ADD_RESUME, payload: {id, name, gpa, location}});
  };
};

export const fetchResume = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/resume.json',
      );
      const data = await response.json();
      const resume = [];
      for (const key in data) {
        resume.push({id: key, data: data[key]});
      }
    
      dispatch({type: FETCH_RESUME, payload: resume});
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchVacancy = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/vacancy.json',
      );
      const data = await response.json();
      const vacancy = [];
      for (const key in data) {
        vacancy.push({id: key, data: data[key]});
      }

      dispatch({type: FETCH_VACANCY, payload: vacancy});
    } catch (error) {
      console.log(error);
    }
  };
};

export const addVacancy = (id, name, job, vacancy, location) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/vacancy.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          job,
          vacancy,
          location,
        }),
      },
    );
    dispatch({
      type: ADD_VACANCY,
      payload: {
        id,
        name,
        job,
        vacancy,
        location,
      },
    });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/vacancy/${id}.json`,
      {
        method: 'DELETE',
      }
    );
    const resp = await fetch(
      `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/resume/${id}.json`,
      {
        method: 'DELETE',
      }
    );
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  };
};
