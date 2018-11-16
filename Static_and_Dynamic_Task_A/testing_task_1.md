### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # Equality operator needs ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # Should be 'def' not 'dif'
  # Card objects passed as arguments should be seperated by a comma
  if card1.value > card2.value
    return card.name # should be card1.name, BUT card class has no 'name' so simply return card object
  else
    card2 # should be return card2.name, BUT card class has no 'name' so return card object
    # no clause for dealing with equal card values
  end
end
end # Extra 'end' not required at this point

def self.cards_total(cards)
  total
  # total not assigned a value, thus not defined
  for card in cards # missing do
    total += card.value
    return "You have a total of" + total
    # Can't concat int and string- require total.to_s
  end
end
# missing final end for class
```
