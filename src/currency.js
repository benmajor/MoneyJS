export default class Currency
{
	constructor( currency )
	{
		this.alphaCode = currency.alphabeticCode;
		this.numericCode = currency.numericCode;
		this.name = currency.currency;
		this.minorUnit = currency.minorUnit;
		this.symbol = (currency.symbol) ? currency.symbol : null;
	};

	hasSymbol()
	{
		return this.symbol !== null;
	};

	addSymbol( amount )
	{
		if( this.symbol.placement == 'left' )
		{
			return this.symbol.symbol + amount;
		}

		return amount + this.symbol.symbol;
	}
};