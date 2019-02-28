Rails Review

Shelter has_many Puppies
Puppy belong_to Shelter
* one -< many relationship
* RESTful routes and actions, what are the implied aliases (CRU D)
* custom routes, aliases (non RESTful action)
  * (http verb address, to: controller#action, as: name_of_route + path)
* button_to helper (what is it? how to use?)
* render vs redirect_to
  * If you're using render, when the user refreshes the page, it will submit the previous POST request again. This may cause undesired results like duplicate purchase and others.
  * makes a NEW POST REQUEST (request response cycle)
* flash(hash) error messages
* validations (NO CUSTOM)
