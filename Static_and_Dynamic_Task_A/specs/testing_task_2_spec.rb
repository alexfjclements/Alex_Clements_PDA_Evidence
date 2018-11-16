require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2')
require_relative('../card')

class TestingTask2 < MiniTest::Test

  def setup()
    @acehearts = Card.new("hearts", 1)
    @twohearts = Card.new("hearts", 2)
    @threehearts = Card.new("hearts", 3)
    @cards = [@acehearts, @twohearts, @threehearts]
    @newgame = CardGame.new
  end

  def test_checkforAce__true
    expected = true
    actual = @newgame.checkforAce(@acehearts)
    assert_equal(expected, actual)
  end

  def test_checkforAce__false
    expected = false
    actual = @newgame.checkforAce(@twohearts)
    assert_equal(expected, actual)
  end

  def test_highest_card__card1
    expected = @twohearts
    actual = @newgame.highest_card(@twohearts, @acehearts)
    assert_equal(expected, actual)
  end

  def test_highest_card__card2
    expected = @threehearts
    actual = @newgame.highest_card(@twohearts, @threehearts)
    assert_equal(expected, actual)
  end

  def test_highest_card__equal
    expected = "Cards have equal value"
    actual = @newgame.highest_card(@twohearts, @twohearts)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 6"
    actual = CardGame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
