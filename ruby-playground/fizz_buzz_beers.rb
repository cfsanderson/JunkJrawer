# count down from 100 and print "x bottles of beer on the wall..."
# implement fizzbuzz following...
# divisible by 3 print Fizz
# divisible by 5 print Buzz
# divisible by 3 and 5 print Fizzbuzzed

# working version...
# drunk = false
# fizz = "FIZZ"
# buzz = "BUZZ"

# until drunk
#   print "How many beers do you have?: " 
#   beers = gets.to_i
#   while beers > 0
#     if beers % 15 == 0
#       puts "#{beers} bottles of #{fizz + buzz} on the wall.."
#       beers -= 1
#     elsif beers % 5 == 0
#       puts "#{beers} bottles of #{buzz} on the wall..."
#       beers -= 1
#     elsif beers % 3 == 0
#       puts "#{beers} bottles of #{fizz} on the wall..."
#       beers -= 1
#     elsif beers >= 1
#       puts "#{beers} bottles of beer on the wall..."
#       beers -= 1
#     else
#       puts "There is none left you lush. Go HOME!"
#     end
#   end
#   puts "0 bottles of beer on the wall. \n Go home you lush!"
#   drunk = true
# end

drunk = false
fizz = "FIZZ"
buzz = "BUZZ"

until drunk
  print "How many beers have you had?: " 
  beers = gets.to_i
  if beers < 4
    puts "Great, you can have #{4 - beers} more!"
    beers -= 1
    drunk = false
  elsif beers == 4
    puts "You've had #{beers}? That's enough, go home :)"
    drunk = true
  else
    puts "You've had #{beers -4} too many! Go home you lush!"
    drunk = true
  end
end