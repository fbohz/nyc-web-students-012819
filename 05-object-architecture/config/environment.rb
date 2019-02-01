require 'pry'
require 'require_all'

require_relative '../lib/pet.rb'
require_relative '../lib/huggable.rb'
require_relative '../lib/pescatarianable.rb'
require_all 'lib'

# Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].sort.each {|f| require f}
