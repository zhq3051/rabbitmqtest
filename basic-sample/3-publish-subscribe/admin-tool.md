After install Rabbbitmq on Ubuntu/Debian, you can activate the Rabbitmq Admin Portal using the next command:

rabbitmq-plugins enable rabbitmq_management
Then you can access to the portal from http://localhost:15672. Use the user/password "guest".

------------------------------------------------------------------------------------------------------
./rabbitmqadmin  delete exchange  name='myexchange'
exchange deleted