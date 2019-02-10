class Student

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def sign_document(document)
    Signature.new(document, self)
  end

  def signatures
     # asking a question to Signature class
     # 'querying'
     Signature.all.select do |signature|
      signature.student == self
     end
  end

  def documents
    # return an array of Document objects that have been signed by this student
    self.signatures.map do |signature|
      signature.document
    end
  end

end
