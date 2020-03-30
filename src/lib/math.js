// Add an amount:
export function add( toAdd )
{
	if( ! this.utils.checkAmount(toAdd) )
	{
		throw new Error('Addition must either be an integer or Money object.')
	}

	// Only amounts of the same currency can be added:
	if( this.utils.isMoney(toAdd) && ! this.isSameCurrency(toAdd) )
	{
		throw new Error('Math operations can only be performed on amounts of the same currency.');
	}

	this.amount+= (this.utils.isMoney(toAdd)) ? toAdd.amount : toAdd;

	// Return object to preserve method-chaining:
	return this;
};

// Subtract an amount:
export function subtract( toSubtract )
{
	if( ! this.utils.checkAmount(toSubtract) )
	{
		throw new Error('Subtraction must either be an integer or Money object.');
	}

	// Only amounts of the same currency can be added:
	if( this.utils.isMoney(toAdd) && ! this.isSameCurrency(toAdd) )
	{
		throw new Error('Math operations can only be performed on amounts of the same currency.');
	}

	this.amount-= (this.utils.isMoney(toSubtract)) ? toSubtract.amount : toSubtract;

	// Return object to preserve method-chaining:
	return this;
};

// Mulitply by x:
export function multiply( multiplier )
{
	if( ! this.utils.isNumber(multiplier) )
	{
		throw new Error('Multiplier must be a number.');
	}

	this.amount*= multiplier;

	// Return object to preserve method-chaining:
	return this;
};

// Divide by x:
export function divide( divisor )
{
	if( ! this.utils.isNumber(divisor) )
	{
		throw new Error('Divisor must be a number.');
	}

	this.amount/= divisor;

	// Return object to preserve method-chaining:
	return this;
};

// Modulus:
export function modulus( divisor )
{
	if( ! this.utils.checkAmount(divisor) )
	{
		throw new Error('Divisor must either be an integer or Money object.')
	}

	// Only amounts of the same currency can be added:
	if( this.utils.isMoney(divisor) && ! this.isSameCurrency(divisor) )
	{
		throw new Error('Math operations can only be performed on amounts of the same currency.');
	}

	// Perform the modulo:
	this.amount = this.amount % (this.utils.isMoney(divisor) ? divisor.amount : divisor);

	// Return object to preserve method-chaining:
	return this;
};

// Return the absolute amount:
export function absolute()
{
	this.amount = Math.abs(this.amount);

	// Return object to preserve method-chaining:
	return this;
}

// Provides the ratio of a Money object in comparison to another Money object.
export function ratioOf( comparison )
{
	if( ! this.utils.checkAmount(comparison) )
	{
		throw new Error('Divisor must either be an integer or Money object.')
	}

	// Only amounts of the same currency can be added:
	if( this.utils.isMoney(comparison) && ! this.isSameCurrency(comparison) )
	{
		throw new Error('Math operations can only be performed on amounts of the same currency.');
	}

	return this.amount / (this.utils.isMoney(comparison) ? comparison.amount : comparison);
}