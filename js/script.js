    var html = document.documentElement;
    var feedback_btn = document.querySelector(".feedback_button");
    var feedback_close = document.querySelector(".close");
    var feedback = document.querySelector(".feedback_wrapper");
    var your_name = feedback.querySelector('[name=name]');
    var search = document.querySelector('.search');
    var search_form = document.querySelector('[name=search]');
    var login = document.querySelector('.login');
    var mail_form = document.querySelector('[name=mail]');
        
    html.className = html.className.replace("no_js","js");  
        
    feedback_btn.addEventListener('click', function(event){
        event.preventDefault();
        feedback.classList.remove('feedback_close');
        feedback.classList.add('feedback_show');
        your_name.focus();
    });
    
    feedback_close.addEventListener('click', function(event){
        feedback.classList.remove('feedback_show');
        feedback.classList.add('feedback_close');
    });
        
    search.addEventListener('mouseover', function(){
        search_form.focus();
    });
        
    login.addEventListener('mouseover', function(){
        mail_form.focus();
    });