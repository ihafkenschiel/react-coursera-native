# Run Server
Either run the shell file:
```
./run.sh
```

or directly run the server like this:
```
json-server --watch db.json -d 2000 -p 3001
```

to make the server accessible outside of localhost, add your IP address:
```
json-server --watch db.json -d 2000 -p 3001 --host 192.168.0.100
```
