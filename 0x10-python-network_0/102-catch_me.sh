#!/bin/bash
# makes a request to 0.0.0.0:5000/catch_me that cause the server to respond
curl -s 0.0.0.0:5000/catch_me -X PUT -L -d "user_id=98" -H "Origin: You got me!"
