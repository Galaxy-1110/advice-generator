import axios from "axios";

export const getAdvice = async () => {
	try {
		const response = await axios.get("https://api.adviceslip.com/advice");
		return response;
	} catch (error) {
		console.log(error);
	}
};
