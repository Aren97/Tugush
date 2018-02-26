import $ from 'jquery';
window.jQuery = $;

import "./main.less";

$( document ).ready(() => {

	const run_block = $("#run-block");
	const run_box = $('.runing-text-block');
	let text_item = $('.runing-text-block__item');
	let speed = 6;

	//cycle
	let cycle = true;
	$('.circule-box-checkbox').change(() => {
		if(this.checked) {
			$( text_item ).remove();
			$(run_box).prepend(text_item);
		   $(text_item).css("animation-iteration-count","infinite");
		}else{
			$( text_item ).remove();
			$(run_box).prepend(text_item);
			$(text_item).css("animation-iteration-count","1" );
		} 
    });

	//text-adding
	$("#add-text").click(() =>{
		let adding_text = $('.text-input-box__input').val();
		if(adding_text){
			let done_add_text = text_item.html()+adding_text;
			done_add_text = done_add_text.replace(/\s{2,}/g, ' ');
			$(text_item).text(done_add_text);
		}
	});

	//speed-functional
	//buttons
	$('.running-speed-functional__button').click((item) =>{
		let btn_type = item.currentTarget.classList[1];
		let current_speed = $("#speed_input").val();
		current_speed = parseInt(current_speed);
		if(btn_type=='speed-plus'){
			if(current_speed==-1){
				$("#speed_input").val(1);
			}else{
				$("#speed_input").val(current_speed+1);
			}
		}else if(btn_type=='speed-minus'){
			if(current_speed==1){
				$("#speed_input").val(-1);
			}else{
				$("#speed_input").val(current_speed-1);
			}
		}
		speed = parseInt($("#speed_input").val());
		if(speed<0){
		  	$(text_item).css({
				"animation-direction":"reverse"
	  		});
		}else if(speed>0){
			$(text_item).css({
			"animation-direction":"normal"
			});			
		}
		$(text_item).css({
			"animation-duration":speed+"s"
  		});
	});
	//input
	$("#speed_input").on("input",(e) =>{
	  speed = e.target.value;
	  speed = parseInt(speed);
	  if(speed==0){
	  		speed = 1;
	  		$("#speed_input").val(1);
	  }
	  if(speed<0){
	  	$(text_item).css({
			"animation-direction":"reverse"
  		});
	  }else if(speed>0){
			$(text_item).css({
				"animation-direction":"normal"
	  		});	
	  }
		$(text_item).css({
			"animation-duration":speed+"s"
  		});
	});
});

$(window).on('load', () => {
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});