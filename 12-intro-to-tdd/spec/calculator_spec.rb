puts "we are in the spec"
require_relative '../calculator.rb'

describe Calculator do

  describe '#add' do

    it('returns the sum of two numbers') do
      # - Setup
      calc = Calculator.new
      # - Execute/trigger
      sum = calc.add(5,4)
      # - Expectation
      # matchers
      expect(sum).to eq(9)



      # - Teardown
    end

    it('also handles negative numbers and returns the sum') do
      calc = Calculator.new

      expect(calc.add(-1,2)).to eq(1)
    end

  end

  describe '#factorial' do
    it 'returns 1 of given 0' do
      # 0! = 1
      calc = Calculator.new
      result = calc.factorial(0)

      expect(result).to eq(1)
    end

    it 'returns the product of each nuber multipled from n to 1' do
      # 5! = 5 x 4 x 3 x 2 1
      calc = Calculator.new
      result = calc.factorial(5)

      expect(result).to eq(120)
    end
  end

end
