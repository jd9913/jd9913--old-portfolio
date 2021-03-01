import axios from "axios";

import {
	RESUME_FAIL,
	RESUME_REQUEST,
	RESUME_SUCCESS,
} from "../constants/resumeConstants.js";

export const listResume = () => async (dispatch) => {
	try {
		dispatch({ type: RESUME_REQUEST });

		const { data } = await axios.get(
			"https://gitconnected.com/v1/portfolio/jd9913"
		);

		dispatch({
			type: RESUME_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: RESUME_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
