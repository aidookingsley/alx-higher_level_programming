#!/bin/bash
# makes a request to 0.0.0.0:5000/catch_me that cause the server to respond
curl -s -X PUT -H 'Origin: You got me!' -L --max-redirs -1 -d "user_id=98" "0.0.0.0:5000/catch_me"
