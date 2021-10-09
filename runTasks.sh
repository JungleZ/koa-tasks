

echo '1: 任务列表'
echo '2: 添加任务'
echo '3: 修改任务'
echo "4: 删除任务"

echo '请输入选项:'

read type

if [ $type -eq "1" ]
 then
  echo "1"
  curl http://localhost:3000/users
 elif  [ $type -eq 2 ]
  then
   read name
   read pass
   read avator

   curl -d'name=$name&pass=$pass&avator=$avator'-X POST http://localhost:3000/users/add
   echo "2"
 elif  [ $type -eq 3 ] 
  then
   echo "3"
 elif  [ $type -eq 4 ] 
  then
   echo "4"
 else
   echo "illegal argument"
 fi
