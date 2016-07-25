
var _repList = {
	email : {
		empty : "输入邮箱不能为空",
		format: "输入邮箱格式不正确",
		reg : /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ 
	},
	psw : {
		empty : "输入密码不能为空",
		format: "输入密码格式不正确",
		reg: /[\s\S]/
	},
	qq : {
		empty : "QQ不能为空",
		format: "QQ格式不正确",
		reg: /[\s\S]/   //^[1-9]d{4,9}/
	},
	phone : {
		empty : "输入手机号不能为空",
		format: "输入手机号格式不正确",
		reg: /^1[3|4|5|8]\d{9}$/
	},
 	code : {
		empty : "验证码不能为空",
		format: "验证码长度为4",
		reg: /^1[3|4|5|8]\d{9}$/
	}
}

var _checkRep=function(value,name){
	var result ={
			status: true,
			msg: ""
		};
	var it=_repList[name];

	if(value !== ""){
			if(name == "code"){
				if(value.length !== 4){
					return {
						status: false,
						msg: "验证码长度为4"
					}
				}else{
					return {
						status: true,
						msg: ""
					}
				}
				return false
			}
			if(it.reg.test(value)){
				alert("ok")
				return {
					status: true,
					msg: ""
				}
			}else{
				alert("format")
				return {
					status: false,
					msg: it.format
				}
			};	
	}else{
		alert("null")
		return{
			status: false,
			msg: it.empty
		}
	}
return result;
};

var _valiForm=function($form){
	var $fcs=$form.find('[name]').not(':disabled');
	var pass = true;
	$fcs.each(function(index,value){
		var $fc= $(this);
		var name = $fc.attr('name');
		var value;
		var isNeedRequire = $fc.attr('required');
		if($fc.attr("type") === "checkbox"){
			value = $fc[0].checked;
			if(value === false){
				error = "需要同意注册协议";
				return false
			}else{
				error = "";
				return false
			}

		}else{
			value = $fc.val();
		}
		
		//
		if(isNeedRequire){
			var re =_checkRep(value,name);
			if(!(re.status)){
				$($fc).focus();	
				error = re.msg;
				pass= false;
				return pass;
			}			
		}else{
			return false
		};

	});

};

$('#loginForm').attr("novalidate","novalidate").on('submit',function(e){
	e.preventDefault();
	var $form = $(this);
	var error = "";
	var valiRestult = _valiForm($form);
	
		_showError();
	
});
var _showError = function(){
	
	$("#error").html(error);
}
/*
var inputs = $("input");
var con = [];
(function addFalse(){
		con.length = inputs.length - 1;
		$.each(con,function(index,value){
		con[index] = false;
		})
})()
var myForm = {
	checkForm: function(str,reg){
		var result=0;
		if (str == ""){
			result = 1;
		}else{
			if(reg.test(str)){
				result = 0;
			}else{
				result = 2;
			}
		}
		return result;
	},
	conError: function(format,empty){
		if(result == 0){
			message.html("")
		}else if(result == 1){
			$(message).html(empty)
		}else if(result == 2){
			$(message).html(format)
		}else{
			return;
		}
		
	}
};
	var regEmail =  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
	/*	regPassward = /[\s\S]/,
		regQQ = /^[1-9]d{4,9}$/,
		regPhonenumber = /1[358][0-9]{9}$/,
		regCode = /[\s\S]{4}/,
		
/*var check = {
	//验证邮箱
	checkMail: function(){
	    mMail = $("#email").val();
		errorEf = contactF(email);
		errorEe = contactE(email);		
		var result = myForm.checkForm(mMail,regEmail);
		if(result == 0){
			con[0] = true;
		}else{
			con[0] = false;
		}
	},
	//检查密码
	checkPassward: function(){
		mPassward = $("#passward").val();
		errorPf = contactF(passward);
		errorPe = contactE(passward);
		myForm.checkForm(mPassward,regPassward);
		if(result == 0){
			con[1] = true;
		}else{
			con[1] = false;
		}
	},
	//检查QQ号
	checkQQ: function(){
		mQq = $("#qq").val();
		errorQf = contactF(qq);
		errorQe = contactE(qq);
		myForm.checkForm(mQq,regQQ);
		if(result == 0){
			con[2] = true;
		}else{
			con[2] = false;
		}
	},
	//验证手机号
	checkPhonenumber: function(){
		mPhone = $("#phone").val();
		errorNf = contactF(phone);
		errorNe = contactE(phone);
		myForm.checkForm(mPhone,regPhonenumber);
		if(result == 0){
			con[3] = true;
		}else{
			con[3] = false;
		}
	},
	//验证码
	checkCode: function(){
	    mCode = $("#code").val();
		errorCf = contactF(code);
		errorCe = contactE(code);
		myForm.checkForm(mCode,regCode);
		if(result == 0){
			con[4] = true;
		}else{
			con[4] = false;
		}
	},
	//检查协议
	checkAgree: function(){
	    mAgree =  $("#agree")[0].checked;
		if(mAgree == true){
			message = "";
		}else{
			message = "需要同意注册协议"
		}
		if(result == 0){
			con[5] = true;
		}else{
			con[5] = false;
		}
	}
}
var subBtn =$("#submit");*/



// $(subBtn).on("click",function(){




// 	check.checkMail();
// 	check.checkPassward();
// 	check.checkQQ();
// 	check.checkPhonenumber();	
// 	check.checkCode();

// 	$.each(con,function(index,value){
		
// 		if(con[0] == false){
// 			myForm.conError(errorEf,errorEe);	
// 		}
// 		else if(con[1] == false){
// 			myForm.conError(errorPf,errorPe);	
// 		}
// 		else if(con[2] == false){
// 			myForm.conError(errorQf,errorQe);	
// 		}
// 		else if(con[3] == false){
// 			myForm.conError(errorNf,errorNe);	
// 		}
// 		else if(con[4] == false){
// 			myForm.conError(errorCf,errorCe);	
// 		}
// 		else if(con[5] == false){
// 			myForm.conError(errorEf,errorEe);	
// 		};
		
// 	})
			
// })
/*/*//*var _mEmail = {
	empty : contactE(email),
	format: contactF(email),
	reg : /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ 
//}
/*
var _mPassward = {
	empty : contactE(passward),
	format: contactF(passward),
	reg: /[\s\S]/
}

var _mQq = {
	empty : contactE(qq),
	format: contactF(qq),
	reg: /4/    //^[1-9]d{4,9}$/
}

var _mPhone = {
	empty : contactE(phone),
	format: contactF(phone),
	reg: /^1[3|4|5|8]\d{9}$/
}
var _mCode = {
	empty : contactE(code),
	format: "验证码长度为4",
	reg : /4/
}

var	_mAgree = {
	empty: "",
	format: "需要同意注册协议",
	reg : /true/
}

var _checkVal = function(val,obj){
	var result = {
		status: true,
		msg: ""
	};
	if( val == ''){
		return{
			status: false,
			msg: obj.empty
		}
	}else{
		var reg = obj.reg;
		if(reg.test(val)){
			return  {
				status: true,
				msg: ""
			}
		}else{
			return {
				status: false,
				msg: obj.format
			}
		}
	}

	return result;
};
*/
/**//*var _showError=function(){
	var eVal = $("#email").val();
	var pVal = $("#passward").val();
	var qVal = $("#qq").val();
	var mVal = $("#phone").val();
	var cVal = $("#code").val();
	var aVal = $("#agree")[0].checked;

	var eres = _checkVal(eVal,_mEmail);
	var pres = _checkVal(pVal,_mPassward);
	var qres = _checkVal(qVal,_mQq);
	var mres = _checkVal(mVal,_mPhone);
	var cres = _checkVal(cVal,_mCode);
	var ares = _checkVal("aVal",_mAgree);

		message.html(eres.msg);
		if(eres.status !== false){
			message.html(pres.msg);
			if(pres.status !== false){
				message.html(qres.msg)
				if(qres.status !== false){
					message.html(mres.msg)
					if(mres.status !== false){
						message.html(cres.msg)
						if(cres.status !== false){
							message.html(ares.msg)
						}
					}
				};
			};
		};	
};

var _checkRequire=function(value){
	if(value&&value!==""){
		_checkRep(value,name)
	}
	return false;
};*/