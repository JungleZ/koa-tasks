

echo '1: USERS LIST'
echo '2: ADD USERS'
echo '3: UPDATE USERS'
echo "4: DELETE USERS"

echo '请输入选项:'

read type

if [ $type -eq "1" ]
 then
  curl http://localhost:3000/
    echo "show  user list is ok"
 elif  [ $type -eq "2" ]
  then
   echo "Please input new user name"
   read name
   pass = "test"
   avator = "true"

   curl -d'name=$name&pass=$pass&avator=$avator'-X POST http://localhost:3000/users/
   echo "insert $name is ok"
 elif  [ $type -eq "3" ] 
  then
   echo "Please input user ID:"
   read id
   echo "Please input new user name :"
   read name
   curl -d'name=$name&id=$id'-X PUT http://localhost:3000/users/
   echo "update $name is ok"
 elif  [ $type -eq "4" ] 
  then
  echo "Please input user ID:"
   read id
   curl -d'name=$name&id=$id'-X DELETE http://localhost:3000/users/
   echo "deleted $name is ok"
 else
   echo "illegal argument"
 fi
