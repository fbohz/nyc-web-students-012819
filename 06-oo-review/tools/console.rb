require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# your seed data goes here

# customer, appointment, salon

david = Customer.new('david', 'mullet')
matt = Customer.new('matt', 'hair')
robert = Customer.new('robert', 'faux hawk')

nhe = Salon.new('nicest hair ever', 'akram :)')
she = Salon.new('shiniest hair ever', 'probably definitely... ethan')
cs = Salon.new('charliest hair ever', 'jeff')

appt1 = Appointment.new(nhe, david, 50, 'amazing haircut', Time.now, 1)
appt2 = Appointment.new(she, matt, rand(10..100), 'amazing haircut fr fr', Time.now, rand(0..5))
appt3 = Appointment.new(she, matt, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt4 = Appointment.new(nhe, david, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt5 = Appointment.new(cs, david, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt6 = Appointment.new(cs, robert, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt7 = Appointment.new(she, robert, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt8 = Appointment.new(she, robert, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))
appt9 = Appointment.new(she, robert, rand(10..100), 'amazing haircut!!', Time.now, rand(0..5))

Pry.start
