import currencies from './data/_currencies.js';
import Currency from './currency.js';
import Money from './money.js';

// Check if a var is undefined:
export function isUndefined( variable )
{
	let undef;

	return (typeof variable === typeof undef);
};

// Check if a var is an integer:
export function isInteger( variable )
{
	return Number.isInteger(variable);
};

// Check if a var is a number:
export function isNumber( variable )
{
	return (typeof variable == 'number');
};

// Check if a var is an array:
export function isArray( variable )
{
	return Array.isArray(variable);
};

// Check if an object is a valid Currency:
export function isCurrency( obj )
{
	return obj instanceof Currency;
};

// Check if an object is a Money object:
export function isMoney( obj )
{
	return obj instanceof Money;
};

// Check a variable is a valid amount (either integer or Money object):
export function checkAmount( amount )
{
	return (this.isMoney(amount) || this.isInteger(amount));
};

// Lookup a currency by code and return its object:
export function lookupCurrency( code )
{
	// Is it already an object?
	if( this.isCurrency(code) )
	{
		return code;
	}
	
	if( ! this.checkCurrency(code.toUpperCase()) )
	{
		throw new Error('Specified currency code is invalid.');
	}

	return new Currency( currencies[code.toUpperCase()] );
};

// Check if the currency exists:
export function checkCurrency( code )
{
	return currencies.hasOwnProperty(code.toUpperCase());
};

// Sum the values of an array:
export function arraySum( arr )
{
	let key;
  let sum = 0;

  for( key in arr ) 
  {
    if( !isNaN(parseFloat(arr[key])) ) 
    {
      sum+= parseFloat(arr[key])
    }
  }

  return sum;
};