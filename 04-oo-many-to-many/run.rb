require 'pry'
require_relative './lib/student'
require_relative './lib/document'
require_relative './lib/signature'


akram = Student.new('akram')
faizan = Student.new('faizan')
sruthi = Student.new('sruthi')
cynthia = Student.new('cynthia')

document1 = Document.new('code of conduct')
document2 = Document.new('student handbook')
document3 = Document.new('facilities agreement')

akram.sign_document(document1)
akram.sign_document(document2)
akram.sign_document(document3)

faizan.sign_document(document1)

sruthi.sign_document(document2)

cynthia.sign_document(document1)
cynthia.sign_document(document2)

# akram.documents includes the C of C document

akram.documents

Pry.start
