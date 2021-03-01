import {
	RESUME_FAIL,
	RESUME_REQUEST,
	RESUME_SUCCESS,
} from "../constants/resumeConstants.js";

export const resumeReducer = (state = { resumeList: [] }, action) => {
	switch (action.type) {
		case RESUME_REQUEST:
			return { loading: true, resumeList: [] };
		case RESUME_SUCCESS:
			return { loading: false, resumeList: action.payload };
		case RESUME_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
