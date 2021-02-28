import {FETCH_STUDENTS, FETCH_COMPANIES, ADD_RESUME, ADD_VACANCY} from '../action/userAction';

const initialState = {
  students: [
    {id: '1', name: 'abc', gpa: '4', location: 'karachi'},
    {id: '2',name: 'abc', gpa: '4', location: 'karachi'},
    {id: '3',name: 'abc', gpa: '4', location: 'karachi'},
  ],
  companies: [
    {
      id: '1',
      name: 'abcCompany',
      vacancy: 4,
      job: 'software developer',
      location: 'karachi',
    },
    {
      id: '2',
      name: 'abcCompany',
      vacancy: 4,
      job: 'software developer',
      location: 'karachi',
    },
    {
      id: '3',
      name: 'abcCompany',
      vacancy: 4,
      job: 'software developer',
      location: 'karachi',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {...state, students: state.students}
    case FETCH_COMPANIES:
        return {...state, companies: state.companies}
    case ADD_RESUME:
      return {
        ...state,
        students: state.students.concat(action.payload)
      }
    case ADD_VACANCY:
      return {
        ...state,
        companies: state.companies.concat(action.payload)
      }
    default:
      return state;
  }
};
