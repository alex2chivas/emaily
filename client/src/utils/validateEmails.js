const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
	const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => !re.test(email));
	const trailingComma = emails.split(',').map(email => email.trim()).join(',');

	// To remove the last comma on the recipient emails if no email is proivded after the comm

	if (trailingComma.length - 1 === trailingComma.lastIndexOf(',')) {
		return 'remove comma at the end if no emails follow up';
	}

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};
