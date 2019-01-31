class Document

  attr_reader :title

  def initialize(title)
    @title = title
  end

  def signatures
     # asking a question to Signature class
     # 'querying'
     Signature.all.select do |signature|
      signature.document == self
     end
  end

  def students
    # return an array of STudent objects that have signed this document
    self.signatures.map do |signature|
      signature.student
    end
  end

end
