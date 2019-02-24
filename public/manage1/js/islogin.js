$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    success(info){
        console.log(info);
        if(info.error===400){
            location.href= 'login.html'
        }
        
    }
})