$(document).ready(function(){
    var content=$(".tagProject"),tabs=$("span");
    
    tabs.on('click', function(){
  
      tabs.removeClass('active').filter(this).addClass('active');
      var filter=$(this).data('filter');
      
      content.isotope({
        filter: filter
  
      });
      return false;
    });
  });