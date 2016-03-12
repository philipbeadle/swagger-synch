Swagger API Test Synchromiser
=============================

The Swagger API Test Synchroniser uses the json description file for the API to create and maintain
all the test methods that need to be executed to secure confidence in the tests.
The synchroniser generates a separate folder for each API Endpoint with subfolders for each Operation
and Verb.  Inside each Verb folder is a separate file for each http response code.  Each response file
contains a set of tests for each reason given for returning the http response code.



To execute this specification, run

    gauge specs


* Vowels in English language are "aeiou".

Vowel counts in single word
---------------------------

tags: single word
