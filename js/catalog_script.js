    var separator_min = document.querySelector('.range_toggle_min');
    var separator_max = document.querySelector('.range_toggle_max');
    var scale = document.querySelector('.scale');  
    var bar = document.querySelector('.bar');
    var range_controls = document.querySelector('.price_range');
    var flag_min = false;
    var flag_max = false;
    var min_price = document.querySelector('[name=min_price]');
    var max_price = document.querySelector('[name=max_price]');
    var search = document.querySelector('.search');
    var search_form = document.querySelector('[name=search]');
    var login = document.querySelector('.login');
    var mail_form = document.querySelector('[name=mail]');
    
    separator_min.addEventListener('mousedown', function(event) {
        event.preventDefault();
        flag_min = true;
    }, false);

    separator_max.addEventListener('mousedown', function(event) {
        event.preventDefault();
        flag_max = true;
    }, false);

    document.addEventListener('mouseup', function(event) {
        flag_min = false;
        flag_max = false;
    }, false);

    range_controls.addEventListener('mousemove', function(event) {
        var res_min = (event.pageX - this.offsetLeft) + 10;
        var res_max = (event.pageX - this.offsetLeft) + 10;
        var price_min = separator_min.style.left;
        var price_max = separator_max.style.left;

        if (flag_min && (res_min > 0) && (res_min < (separator_max.offsetLeft))) {
            separator_min.style.left = res_min + 'px';
            min_price.value = parseInt(price_min) * 5;
            bar.style.width = (separator_max.offsetLeft - res_min) + 'px';
            bar.style.marginLeft = res_min + 'px';
        }else if(flag_max && (res_max > separator_min.offsetLeft) && (res_max < scale.offsetWidth + 5)){
            separator_max.style.left = res_max + 'px';
            max_price.value = parseInt(price_max) * 5;
            bar.style.width = (separator_max.offsetLeft - separator_min.offsetLeft) + 'px';
            bar.style.marginRight = (330 - res_max) + 'px';
        }
    }, false);

    search.addEventListener('mouseover', function(){
        search_form.focus();
    });
        
    login.addEventListener('mouseover', function(){
        mail_form.focus();
    });