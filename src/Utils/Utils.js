const Utils = {
	handleXHRErrors: (req, callback) => {
		if (req.status >= 400 && req.status < 500)
			return 'We had some trouble when connecting to our servers. Please try again later.';
		else
			return 'We are getting some problems now. Please try again later.';
	}
}

export default Utils;
