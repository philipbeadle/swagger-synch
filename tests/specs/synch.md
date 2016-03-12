Swagger API Test Synchromiser
=============================

The Swagger API Test Synchroniser uses the json description file for the API to create and maintain
all the test methods that need to be executed to secure confidence in the tests.
The synchroniser generates a separate folder for each API Endpoint with subfolders for each Operation
and Verb.  Inside each Verb folder is a separate file for each http response code.  Each response file
contains a set of tests for each reason given for returning the http response code.
Using the description property of the API response code to decribe how the response is created
allows us to not only document the method but also describe how to test the method.  An example is shown below:

    paths:
      /pets:
        post:
          tags:
          - "pet"
          summary: "Add a new pet to the store"
          description: ""
          operationId: "addPet"
          consumes:
          - "application/json"
          - "application/xml"
          produces:
          - "application/json"
          - "application/xml"
          parameters:
          - in: "body"
            name: "body"
            description: "Pet object that needs to be added to the store"
            required: false
            schema:
              $ref: "#/definitions/Pet"
          responses:
            200:
              description: "<p style=\"white-space:nowrap\">Successfully added a new pet\
                \ to the pet store</p>"
            405:
              description: "<p style=\"white-space:nowrap\">Invalid Pet object submitted</p>"
            500:
              description: "<p style=\"white-space:nowrap\">Submitted a Pet object with\
                \ no related Category</p>"


Using the PetStore example on http://editor.swagger.io/#/ with the above changes will generate the following 
folders and files:

