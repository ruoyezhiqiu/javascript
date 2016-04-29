var code ; //在全局 定义验证码  
function createCode()  //生成验证码！
     {   
       code = "";  
       var codeLength = 6;//验证码的长度  
       var checkCode = document.getElementById("yzsz");  
       var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的   
       for(var i=0;i<codeLength;i++)  
       {     
       var charIndex = Math.floor(Math.random()*36);  
       code +=selectChar[charIndex];    
       }   
       if(checkCode) 
       {  
         checkCode.className="code";  
         checkCode.value = code;  
       }  
     }  
function validate() //判断验证码是否输入正确。 
     {  
       var inputCode = document.getElementById("yz").value;  
       if(inputCode.length <=0)  
       {  
    	   document.getElementById("yzjg").value="请输入验证码";
           //alert("请输入验证码！");  
           document.getElementById("yz").focus();
           return false;
       }  
       else if(inputCode != code )  
       {  
    	  document.getElementById("yzjg").value="输入错误,请重新输入";
          document.getElementById("yz").value="";
          createCode();//刷新验证码  
          inputCode = "";  
          document.getElementById("yz").focus();  
          return false;
       }
       else
       		{  
            	document.frmRegister.submit();  
            	return true;
       		}     
     }
function validateForm() //表单验证。
{ 	
	save();//提交form表单，将内容保存在本地。
	if(judgeUserName()==false)
	{
		return false ;
	}
	if(judgePwd()==false)
	{
		return false;
	}
	if(judgePwd2()==false)
	{
		return false;
	}
	if(pwdClick()==false)
	{
		return false;
	}
	if(validate()==false)
	{
		return false;
	}
	return true;
	
}

function getLenReg(str)//获取一个字符串的字节数。
{
	return str.replace(/[^\x00-\xFF]/g, '**').length;
}
function judgeUserName()//验证用户名是否符合要求。
{
	var usernamex = document.getElementById("username").value;
	var username = document.getElementById("username").value.trim();
	var lenReg = getLenReg(username);
	if (username == "" || lenReg > 16)
	{
		document.getElementById("sp1").innerHTML = "<span style='color:red'>*&nbsp;用户名不超过16个字符，请重新输入</span>";
		return false;
	} else if (usernamex.indexOf(" ") != -1) 
	{
		document.getElementById("sp1").innerHTML = "<span style='color:red'>*&nbsp;用户名不能含有空格，请重新输入</span>";
		return false;
	} 
	else 
	{
		document.getElementById("sp1").innerHTML = "<span style='color:green'>满足条件</span>";
		return true;
	}
}
function userClick()
{
	if (judgeUserName()==false) 
	{
		document.getElementById("sp1").innerHTML = "";
		document.getElementById("username").value = "";
		return false;
	} 
	else
	{
		return true;
	}
}
function judgePwd()//验证密码是否符合要求。
{	var pwd = document.getElementById("pwd").value;
	if (pwd.length<4||pwd.length>16) 
	{
		document.getElementById("pwd1").innerHTML = "<span style='color:red'>密码必须在4到16位之间，请重新输入</span>";
		return false;
	} 
	else if (pwd.indexOf(" ") != -1) 
	{
		document.getElementById("pwd1").innerHTML = "<span style='color:red'>*&nbsp;密码不能含有空格,请重新输入</span>";
		return false;
	} 
	else 
	{
		document.getElementById("pwd1").innerHTML = "<span style='color:green'>符合条件</span>";
		return true;
	}
}
function judgePwd1()//验证重复密码是否正确。
{
	var x = document.getElementById("repwd").value;
	var y = document.getElementById("pwd").value;
	if (x != y) 
	{
		document.getElementById("repwd1").innerHTML = "<span style='color:red'>两次密码不一致，请重新输入</span>";
		return false;
	}
	else 
	{
		document.getElementById("repwd1").innerHTML = "<span style='color:green'>符合条件</span>";
	}
}
function judgePwd2()//判断密码中是否有空格。
{
	var pwd = document.getElementById("pwd").value;
	if (pwd.indexOf(" ") != -1) 
	{
		document.getElementById("pwd1").innerHTML ="";
		document.getElementById("pwd").value="";
		return false;
	} 
}
function pwdClick()//判断两次的密码是否一致。
{
	var x = document.getElementById("repwd").value;
	var y = document.getElementById("pwd").value;
	if (x != y) 
	{
		//document.getElementById("repwd").value="";
		//document.getElementById("repwd1").innerHTML="";
		return false;
	}
}
function getValue(id)
{
	
	return document.getElementById(id).value;
	
}
function getName()
{
	var arr=new Array();
	 arr=document.getElementsByName("gender");
	 return arr;
}
function save()
{
	var username = getValue("username");
	var pwd = getValue("pwd");
	var repwd = getValue("repwd");
	var tishi = getValue("tishi");
	var tishidaan = getValue("tishidaan");
	var xm = getValue("xm");
	var email = getValue("email");
	var url = getValue("url");
	var sex;
	var arr = getName();
	if(arr[0].checked==true)
	{
		sex = "男";
	}
	else if(arr[1].checked==true)
	{
		sex = "女";
	}
	else 
	{
		sex = "保密";
	}
	var address = getValue("address");
	var city = getValue("city");
	var qm = getValue("qm");
	var date = getValue("date");
	var man = getValue("man");
	var yz = getValue("yz");   

	localStorage.setItem("username1", username);
	localStorage.setItem("pwd", pwd);
	localStorage.setItem("repwd", repwd);	
	localStorage.setItem("tishi", tishi);
	localStorage.setItem("tishidaan", tishidaan);
	localStorage.setItem("xm", xm);
	localStorage.setItem("email", email);
	localStorage.setItem("url", url);
	localStorage.setItem("sex", sex);
	localStorage.setItem("address", address);
	localStorage.setItem("city", city);
	localStorage.setItem("qm", qm);
	localStorage.setItem("date", date);
	localStorage.setItem("man", man);
	localStorage.setItem("yz", yz); 
	
}
function show()
{

	var username = localStorage.getItem("username1");
	var pwd = localStorage.getItem("pwd");
	var repwd = localStorage.getItem("repwd");		
	var tishi = localStorage.getItem("tishi");
	var tishidaan = localStorage.getItem("tishidaan");
	var xm = localStorage.getItem("xm");
	var email = localStorage.getItem("email");
	var url = localStorage.getItem("url");
	var sex= localStorage.getItem("sex");
	var address = localStorage.getItem("address");
	var city = localStorage.getItem("city");
	var qm = localStorage.getItem("qm");
	var date = localStorage.getItem("date");
	var man = localStorage.getItem("man");
	var yz = localStorage.getItem("yz");
	
	var yh = document.querySelector("#yh");
	var mm = document.querySelector("#mm");
	var qrmm = document.querySelector("#qrmm");
	var tsmm = document.querySelector("#tsmm");
	var tsda = document.querySelector("#tsda");
	var xm1 = document.querySelector("#xm");
	var dzyj = document.querySelector("#dzyj");
	var grwz = document.querySelector("#grwz");
	var xb = document.querySelector("#xb");
	var szsf = document.querySelector("#szsf");
	var szcs = document.querySelector("#szcs");
	var qqmsn = document.querySelector("#qqmsn");
	var sr = document.querySelector("#sr");
	var tjr = document.querySelector("#tjr");
	var yzm = document.querySelector("#yzm");
	
	yh.value=username;
	mm.value=pwd;
	qrmm.value=repwd;
	tsmm.value=tishi;
	tsda.value=tishidaan;
	xm1.value=xm;
	dzyj.value=email;
	grwz.value=url;
	xb.value=sex;
	szsf.value=address;
	szcs.value=city;
	qqmsn.value=qm;
	sr.value=date;
	tjr.value=man;
	yzm.value=yz;
}
function clearData()
{
	localStorage.clear();
}

