# find_the_devs

// HTTP methods GET, POST, PUT, DELETE

////Params types:
//Query Params:
//Used in GET requests
//request.query (filters, ordenation, pagination...)

////Route Params:
//  /{resource}/:id
//  Used to identify a resource to change or to delete
//  request.params

////Body:
// Used to create or update a resource
// /{resource}
// { "name": "John", "age": 13}


// MongoDB Database (Non-relational)

//Controllers methods
    index - lists
    show - show a resource
    store - save to db
    update - update the db
    destroy - destroy the resource