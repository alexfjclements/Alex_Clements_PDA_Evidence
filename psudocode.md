Define class method month_spend_sum to take argument user_id
	set sum equal to 0
	set transactions equal to an array of transaction objects.
	for each transaction object in transactions:
		add transaction amount to sum if user id’s match and month is the current month.
	return the sum of transaction amounts.
