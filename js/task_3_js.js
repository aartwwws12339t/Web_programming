function btn_1_press(){alert("Ви натиснули кнопку №1")}function btn_2_press(){let e="";confirm("Ви любите морозиво?")||(e="не "),alert(`Користувач який натиснув кнопку №2 ${e}любить морозиво`)}function btn_3_press(){let e=prompt("Як вас звати?");e&&(e=e.trim()),e||(e="незнайомцю"),alert(`Привіт, ${e}!`)}function clear_spec_field_1(){document.getElementById("spec_field_1").value=""}function clear_spec_field_2(){document.getElementById("spec_field_2").value=""}function only_big_letter(e){e.value=e.value.toUpperCase()}function only_small_letter(e){e.value=e.value.toLowerCase()}function btn_register_press(){let e=document.getElementById("login"),t=document.getElementById("password_a"),n=document.getElementById("password_b"),i=e.value,l=t.value,o=n.value;i?(i=i.trim(),i?l?l.length<6?alert("Ви ввели закороткий пароль!\nМінімальна довжина паролю - 6 символів"):o?l===o?alert("Реєстрація завершилася успішно"):alert("Паролі не збігаються!"):alert("Ви не повторили пароль!"):alert("Ви не ввели пароль!"):alert("Ви ввели некоректний логін!")):alert("Ви не ввели логін!")}let added_elements=1;function add_li(){let e=document.getElementById("editable_list"),t=document.createElement("li"),n=document.createTextNode(`Новий елемент списку №${added_elements}`);added_elements++,t.appendChild(n),e.appendChild(t)}function remove_li(){let e=document.getElementById("editable_list");e.lastChild;e.removeChild(e.lastChild)}function add_flex_button_listener(){let e=document.getElementById("flex_direction"),t=document.getElementById("justify-content"),n=document.getElementById("align-items");e.onclick=change_flex_direction,t.onclick=change_justify_content,n.onclick=change_align_items}let flex_direction_id=0,flex_direction=["row","row-reverse","column","column-reverse"];function change_flex_direction(e){let t=document.getElementById("flex_block");flex_direction_id+=flex_direction_id<3?1:-3;let n=flex_direction[flex_direction_id];t.style.flexDirection=n,e.target.innerHTML=`flex_direction: ${n}`}let justify_content_id=3,justify_content=["center","flex-start","flex-end","space-around","space-between"];function change_justify_content(e){let t=document.getElementById("flex_block");justify_content_id+=justify_content_id<4?1:-4;let n=justify_content[justify_content_id];t.style.justifyContent=n,e.target.innerHTML=`justify_content: ${n}`}let align_items_id=0,align_items=["center","baseline","flex-start","flex-end","stretch"];function change_align_items(e){let t=document.getElementById("flex_block");align_items_id+=align_items_id<4?1:-4;let n=align_items[align_items_id];t.style.alignItems=n,e.target.innerHTML=`align_items: ${n}`}let title_color_id=1,title_colors=["#F00","#0F0","#00F","#FF0","#F0F","#0FF"];function change_title_background(){const e=title_colors.length-1;let t=document.getElementById("title");t.style.borderColor=title_colors[title_color_id];let n=title_colors[title_color_id]+"5";t.style.backgroundColor=n,title_color_id+=title_color_id<e?1:-e}function check_condition_1(){select_elements($("input.test_b"))}function check_condition_2(){select_elements($("#cb3, #cb7"))}function check_condition_3(){select_elements($("#div_4 input[type='checkbox']").not(".test_z"))}function check_condition_4(){unselect_all_elements();let e=$("[custom_atr]");for(let t=0;t<e.length;t++){let n=e.get(t);Number($(n).attr("custom_atr"))>=25&&$(n).prop("checked",!0)}}function select_elements(e){unselect_all_elements();for(let t=0;t<e.length;t++){let n=e.get(t);$(n).prop("checked",!0)}}function unselect_all_elements(){let e=$("#div_4 input[type='checkbox']");for(let t=0;t<e.length;t++){let n=e.get(t);$(n).prop("checked",!1)}}function add_animation_button_listener(){$("#btn_timer").bind("click",start_timer),$("#btn_interval").bind("click",start_interval)}function start_timer(){$("#btn_timer").attr("value","Анімація запуститься через 2 сек."),setTimeout((()=>{$("#btn_timer").attr("value","Запустити таймер"),start_animation()}),2e3)}let intervar_run=!1;function start_interval(){if(intervar_run)return intervar_run=!1,void $("#btn_interval").attr("value","Запустити інтервал");intervar_run=!0,$("#btn_interval").attr("value","Зупинити інтервал");let e=setInterval((()=>{start_animation(),intervar_run||clearInterval(e)}),2e3)}let animation_id=0;function start_animation(){switch(console.log(`Start animation №${animation_id}`),animation_id){case 0:$("#img").animate({opacity:0,left:"-39%",top:"25%"},500).animate({opacity:1,top:"-25%"},500);break;case 1:$("#img").animate({opacity:0,left:"0%",top:"0%",width:"40%"},500);break;case 2:$("#img").animate({opacity:1,width:"128px"},500);break;case 3:$("#img").animate({opacity:0,left:"40%",width:"16px"},500);break;case 4:$("#img").animate({opacity:.5,left:"-35%",width:"128px"},500).animate({opacity:1,left:"0%",width:"128px"},500)}animation_id+=animation_id<4?1:-4}add_flex_button_listener(),add_animation_button_listener(),setInterval(change_title_background,2e3);