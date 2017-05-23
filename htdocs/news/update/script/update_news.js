
/**
 * @author Joaquin
 */

$(function(){		 

	ddsmoothmenu.init({
		mainmenuid: "smoothmenu-ajax",
		orientation: 'h',
		classname: 'ddsmoothmenu',
		contentsource: ["smoothmenu1", "/controls/menu/menu.php"],
		image: ['/controls/menu/down.gif','/controls/menu/down.gif']
	});
		
	function Validate()
	{
	
		 var value = true;
		 
		 if($("#title").val().length  == 0)
		 {
		 	$("#title_div").show("slow");
	 		value = false;
		 }
		 else
		 {
		 	$("#title_div").hide();
		 }
		 
		 if($("#summary").val().length  == 0)
		 {
		 	$("#summary_div").show("slow");
	 		value = false;
		 }
		 else
		 {
		 	$("#summary_div").hide();
		 }
		 
		 if($("#image_url").val().length  == 0)
		 {
		 	$("#image_div").show("slow");
	 		value = false;
		 }
		 else
		 {
		 	$("#image_div").hide();
		 }
		
		 if($("#image_comment").val().length  == 0)
		 {
		 	$("#comment_image_div").show("slow");
	 		value = false;
		 }
		 else
		 {
		 	$("#comment_image_div").hide();
		 }
		 
		 
		 if($("#link_1").val().length  > 0)
		 {
		    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/; 
		   					
		 	if(RegExp.test($("#link_1").val())== false)
		 	{
		 		$("#link_1_div").show("slow");
	 			value = false;
	 		}
	 		else	
	 		{
	 			$("#link_1_div").hide();
	 		}
		 }
		 
		 if($("#link_2").val().length  > 0)
		 {
		    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/; 
		   					
		 	if(RegExp.test($("#link_2").val())== false)
		 	{
		 		$("#link_2_div").show("slow");
	 			value = false;
	 		}
	 		else	
	 		{
	 			$("#link_2_div").hide();
	 		}
		 }
		 
		 if($("#link_3").val().length  > 0)
		 {
		    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/; 
		   					
		 	if(RegExp.test($("#link_3").val())== false)
		 	{
		 		$("#link_3_div").show("slow");
	 			value = false;
	 		}
	 		else	
	 		{
	 			$("#link_3_div").hide();
	 		}
		 }
		
		 return value;
	}


	$.getJSON("/content/content.php?operation=category", function(data) {
				
	    var options = '';
	    for (var i = 0; i < data.length; i++) 
	    {
	        options += '<option value="' + data[i].id +  '">' + data[i].name + '</option>';
	    }
	
	    $("#category").html(options);					
	});	

	function getParameterByName(name)
	{
	  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regexS = "[\\?&]" + name + "=([^&#]*)";
	  var regex = new RegExp(regexS);
	  var results = regex.exec(window.location.href);
	  if(results == null)
	    return "";
	  else
	    return decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	var news_id = getParameterByName('id');
	
	if(news_id > 0)
	{
		var newsUrl = "/news/operation.php?operation=news&id=" + news_id;
		
		$.getJSON(newsUrl, function(data) 
		{
			 for (var ii = 0; ii < data.length; ii++) 
	        {
	        	 $("#title").val(data[ii].title);
				 $("#subtitle").val(data[ii].sub_title);
				 $("#summary").val(data[ii].summary);
				 $("#subsummary").val(data[ii].sub_summary);
				 $("#category").val(data[ii].category);
				 $("#image_url").val(data[ii].image_url);
				 $("#image_comment").val(data[ii].image_comment);
				 $("#link_1").val(data[ii].link_1);
				 $("#link_2").val(data[ii].link_2);
				 $("#link_3").val(data[ii].link_3);
	        }
	        
		});
	}


	$("#send").click(function()
	 {
	 	if(Validate() == false)
	 	{
	 		return;
	 	}
	 	
		 var title = encodeURI($("#title").val());
		 var subtitle = encodeURI($("#subtitle").val());
		 var summary = encodeURI($("#summary").val());
		 var subsummary = encodeURI($("#subsummary").val());
		 var category = encodeURI($("#category").val());
		 var image_url = encodeURI($("#image_url").val());
		 var image_comment = encodeURI($("#image_comment").val());
		 var link_1 = encodeURI($("#link_1").val());
		 var link_2 = encodeURI($("#link_2").val());
		 var link_3 = encodeURI($("#link_3").val());
		 
		 if(getParameterByName('id') > 0)
		 {
			var ajaxOpts = {
					type: "get",
					url: "/news/create/operation.php?operation=update",
					data: "&id=" + getParameterByName('id') + "&title=" + title.replace(/<.*?>/g, '') + "&subtitle=" + subtitle.replace(/<.*?>/g, '') + "&summary=" + summary.replace(/<.*?>/g, '') + "&subsummary=" + subsummary.replace(/<.*?>/g, '') + "&category=" + category + "&image_url=" + image_url + "&image_comment=" + image_comment.replace(/<.*?>/g, '') + "&link_1=" + link_1 + "&link_2=" + link_2 + "&link_3=" + link_3,
					success: function(data) {
						location.href = "/news/list/";									
					}
				};
			$.ajax(ajaxOpts);
		}
	 });	
		
});
		   	    
		    