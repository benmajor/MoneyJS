export function allocate( allocations )
{
	// Not an array:
	if( ! this.utils.isArray(allocations) )
	{
		throw new Error('Allocations must be an array.');
	}

	// Empty array:
	if( ! allocations.length )
	{
		throw new Error('Cannot allocate to none, ratios cannot be an empty array');
	}

	let remainder = this.amount;
	let results = [ ];
	let total = this.utils.arraySum(allocations);
	let amount = this.amount;

	// Invalid allocation:
	if( total <= 0 )
	{
		throw new Error('Cannot allocate to none, sum of ratios must be greater than zero');
	}

	for( let i = 0; i < allocations.length; i++ )
	{
		let ratio = allocations[i];

		if( ratio < 0 ) 
		{
      throw new Error('Cannot allocate to none, ratio must be zero or positive');
    }

    let share = Math.floor(this.amount * ratio / total);

    results.push( new this.constructor(share, this.currency) );
    remainder = (remainder - share);
	}

	// No remainder, so return:
	if( remainder == 0 )
	{
		return results;
	}

	// Handle remainder:
	let fractions = allocations.map(function(ratio) {
		let share = (ratio / total) * amount;

		return share - Math.floor(share);
	});

	while( remainder > 0 )
	{
		let index = (fractions.length) ? (fractions.length - 1) : 0;

		results[index].add(1);
		remainder-= 1;

		fractions.pop();
	}

	return results;
};

export function allocateTo( allocateTo )
{
	if( ! this.utils.isInteger(allocateTo) )
	{
		throw new Error('Number of targets must be an integer.');
	}

	if( allocateTo <= 0 )
	{
		throw new Error('Cannot allocate to none, target must be greater than zero.');
	}

	let arr = [ ];

	for( let i = 0; i < allocateTo; i++ )
	{
		arr.push(1);
	}

	return this.allocate(arr);
};