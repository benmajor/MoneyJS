import { config } from './config.js';

import * as utils from './utils.js';
import * as math from './lib/math.js';
import * as allocate from './lib/allocate.js';

export default class Money 
{
	// Money constuctor:
	constructor( amount, currency )
	{
		this.undefined;
		this.utils = utils;

		if( ! this.utils.isInteger(amount)  )
		{
			throw new Error('Amount must be an integer.');
		}

		// Assign the currency:
		this.currency = this.utils.lookupCurrency( this.utils.isUndefined(currency) ? config.currency : currency );

		// Assign the locale:
		this.locale = config.locale;

		// Set the amount:
		this.startAmount = amount;
		this.amount = amount;

		// Assing the methods:
		this.add = math.add;
		this.subtract = math.subtract;
		this.multiply = math.multiply;
		this.divide = math.divide;
		this.mod = math.modulus;
		this.absolute = math.absolute;
		this.ratioOf = math.ratioOf;

		this.allocate = allocate.allocate;
		this.allocateTo = allocate.allocateTo;
	};

	// Format the currency:
	format()
	{
		let amount = (this.amount / 100).toLocaleString(this.locale, {
			style: 'currency',
			currency: this.currency.alphaCode,
			minimumFractionDigits: this.currency.minorUnits
		});

		return amount;
	};

	// Check currencies:
	isSameCurrency( toCheck )
	{
		return this.currency.numericCode === toCheck.currency.numericCode;
	}
};