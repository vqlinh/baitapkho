<template>
    <div class="join">
        <div class="title">
            <h1>JOIN OUR NEWSLETTER</h1>
        </div>
        <span>Subscribe to our mailing list and get</span><br>
        <span>useful stuff and updates to your email </span>
        <span>inbox</span>
        <div class="form">
            <input type="text" name="" id="" class="name" placeholder="Your Name">
            <input type="text" name="" id="" class="name" placeholder="Your Email">
            <button class="signup">SUBCRIBE</button>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
.title {
    padding: 10px;
    margin-bottom: 20px;
}

h1 {
    color: #c21a30;
    font-size: 18px;
    font-weight: 600;
}

.name {
    font-size: 16px;
    width: 280px;
    height: 40px;
    border: none;
    outline: none;
    padding: 0 10px;
    background: rgba(245, 245, 245, 255);
    margin: 10px;
    box-shadow: rgb(0, 0, 0, 0.1) 0px 1px 1px 0px inset ;
    transition: 0.3s ease;
}
.signup{
    width: 300px;
    height: 40px;
    margin: 10px;
    border:none;
    background: #52b043;
    color: white;
    font-size: 16px;
    font-weight: 600;
}
.signup:hover{
    opacity: 0.8;
}

.name:hover {
    background: #e9e9e9;

}
.name:focus{
    background: #e9e9e9;

}
.form{
    
}

span {
    padding: 10px;
}
</style>>
