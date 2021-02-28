import {
  FETCH_RESUME,
  FETCH_VACANCY,
  ADD_RESUME,
  ADD_VACANCY,
  DELETE_POST
} from '../action/userAction';

const initialState = {
  students: [],
  companies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESUME:
      return {...state, students: action.payload};
    case FETCH_VACANCY:
      return {...state, companies: action.payload};
    case ADD_RESUME:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    case ADD_VACANCY:
      return {
        ...state,
        companies: state.companies.concat(action.payload),
      };
      case DELETE_POST:
        const filteredVacancy = state.companies.filter(company => company.id !== action.payload)
        const filteredResume = state.students.filter(company => company.id !== action.payload)

        return {
          ...state,
          companies: filteredVacancy,
          students: filteredResume
        }
    default:
      return state;
  }
};
