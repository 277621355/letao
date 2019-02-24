document.querySelector('.top>.pull-left').addEventListener('click',()=>{
    let flag = document.querySelector('.m_left').classList.toggle('none');
    if(flag){
        $('.m_left ').css('left',-180)
        $('.m_right').css('padding-left',0);
        $('.top').css('padding-left',0);
    }else{
       $('.m_left ').css('left',0)
       $('.m_right').css('padding-left',180);
       $('.top').css('padding-left',180);
    }
   })
   
$('#nav>li:nth-child(2) a').on('click',function(){
   $(this).parent().next().slideToggle()
})
$('.top>.pull-right').on('click',()=>{
   $('#logoutmodal').modal('show')
})
$('#logoutBtn').on('click',()=>{
   $.ajax({
      url:'/employee/employeeLogout',
      type:'get',
      success(info){
         console.log(info);
         if(info.success){
            location.href = 'login.html'
         }
         
      }
   })

})
