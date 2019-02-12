class Calculator

  def add(x, y)
    x + y
  end

  def factorial(n)

    (1..n).to_a.inject(1) do |res, num|
      res * num
    end
    # if n == 0
    #   1
    # else
    #   n * factorial(n-1)
    # end
  end
end
