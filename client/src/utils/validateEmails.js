const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
	const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => !re.test(email));
	const trailingCommaError = emails.split(',').map(email => email.trim()).join(',');

	if (trailingCommaError.length - 1 === trailingCommaError.lastIndexOf(',')) {
		return 'remove comma at the end if no emails follow up';
	}

	if (invalidEmails) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};
