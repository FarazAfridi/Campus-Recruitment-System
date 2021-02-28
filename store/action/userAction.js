export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const ADD_RESUME = 'ADD_RESUME';
export const ADD_VACANCY = 'ADD_VACANCY'; 

export const fetchStudents = () => {
  return {
    type: FETCH_STUDENTS,
  };
};

export const fetchCompanies = () => {
  return {
    type: FETCH_COMPANIES,
  };
};

export const addResume = (id, name, gpa, location) => {
  return {
    type: ADD_RESUME,
    payload: {id, name, gpa, location},
  };
};

export const addVacancy = (id, name, job, vacancy, location) => {
  return {
    type: ADD_VACANCY,
    payload: {
      id,
      name,
      job,
      vacancy,
      location
    }
  }
}
