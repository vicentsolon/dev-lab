### Windows服务

路径 --install

net start mysql

net stop mysql

### MYSQL基本操作

登陆mysql：

mysql -u root -p

显示所有数据库名称：

show databases;

进入数据库：

use mysql<数据库名称>;

显示所有表的名称：

show tables;

显示表中所有内容：

selec * from user<表名>;

选择显示表中内容：

select user, password from user<表名>;

### 用户管理

创建新用户：

create user '用户名'@'IP地址<%>' identified by '密码';

删除用户：

drop user '用户名'@'IP地址<%>';

修改用户名称：

rename user '用户名'@'IP地址<%>' to '新用户名'@'IP地址';

修改密码：

set password for '用户名'@'IP地址<%>' = Password('新密码');

### 权限管理

查看权限：

show grants for '用户名'@'IP地址<%>';

授权：

grant 权限 on 数据库.表<*> to '用户名'@'IP地址<%>';

取消权限：

revoke 权限 on 数据库.表<*> from '用户名'@'IP地址<%>';

所用权限表示为：

all privileges

### 操作数据库

创建一个新的数据库：

create database db1;

create database db1 default charset utf8;  可以中文编码

删除：

drop database db1;

### 操作表

show tables;

创建表：

create table 表名(id int, name char(10));



设置为可以插入中文：

create table 表名(id int, name char(10)) default charset = utf8;

create table 表名(

​	列名 类型 null,

​	列名 类型 not null,

​	列名 类型 not null default 1,

​	列名 类型 not null auto_increment<自增> primary key<主键>,

​	id int, 

​	name char(10)

) engine=innodb default charset = utf8;

引擎(engine): 只需要在表中设置

innodb 支持事务 原子性操作

myisam 支持全局索引 储存速度更快



主键(primary key) --> 约束（不能重复且不能为空）；加速查找

注意：

1）一张表只能有一个主键

2）主键可以由多列组合而成

3）一张表只能出现一个自增列(auto_increment)

### 操作表内容（增删改查）

插入数据：

insert into 表名(id, name) values(1, "aaa");

查看数据：

select * from 表名;  *代表所有

删除：

delete from 表名 where id<6; 条件删除 => 逻辑删除

修改：

update 表名 set age=18;

update 表名 set age=18 where age=17;

清空表：

delete from 表名; 逻辑删除

truncate table 表名; 结构性删除

删除表：

drop table 表名;

### 数据类型

数值：

tinyint

int

bigint



float

double

decimal(总长度，保留几位小数) --- 精准浮点型，底层为字符串



字符串：

char(长度<=255) --- 插入字符串长度固定为设置长度 查询速度快

varchar(长度<=255) --- 节省空间，每个字符长度不固定

最长储存字符长度为255

优化：把定长列放在前面 变长列放后面



text --- 字符长度65535



上传文件：

文件存硬盘

db存路径



时间类型：

DATATIME



二进制类型



enum(枚举类型)

set(集合类型)



### 外键（一对多）

create table userinfo(

​	uid bigint auto_increment primary key,

​	name varchar(32),

​	department_id int,

​	constraint fk_user_depar foreign key ("department_id",...,...) references department("id")

) engine=innodb default charset=utf8;



create table department(

​	id bigint auto_increment primary key,

​	title char(15)

) engine=innodb default charset=utf8;



### 关于自增

show create table 表名;

show create table 表名 \G;  竖着显示

alter table 表名 auto_increment = 20; 设置自增起始值

MySQL: 自增步长；基于会话级别；

​	show session variables like 'auto_inc%';  查看全局变量

​	set session auto_increment_increment=2;  设置会话步长

​	基于全局：

​	set global auto_increment_increment=200; 

sqlServer: 自增步长；基于表级别；
