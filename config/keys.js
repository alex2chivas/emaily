if (process.env.NODE_ENV === 'production') {
	// we are in production
	module.exports = require('./prod');
} else {
	// we are in development
	module.exports = require('./dev');
}

// Notes for using local webhooks setup on sendGrid: run npx ngrok http 5000
