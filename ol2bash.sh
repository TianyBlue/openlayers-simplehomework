# !/bin/bash

npm run build

c:/python/python.exe ./replacePath.py

cp -r ./dist D:/apache-tomcat-9.0.58/webapps

# cd D:\apache-tomcat-9.0.58\bin

# ./shutdown.sh

# startup.bat

echo "done!"