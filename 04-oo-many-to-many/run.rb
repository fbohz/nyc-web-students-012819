require 'pry'
require_relative './lib/student'
require_relative './lib/document'
require_relative './lib/signature'


student = Student.new('akram')
faizan = Student.new('faizan')

document1 = Document.new('code of conduct')
document2 = Document.new('student handbook')

student.sign_document(document1)
student.sign_document(document2)
faizan.sign_document(document1)

# student.documents includes the C of C document

Pry.start
