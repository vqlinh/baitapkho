<script setup>

// import {ref } from 'vue';
// import axios from "axios";
import categories from "../sider-bar/categories.vue"
import advertise from "../sider-bar/advertise.vue"
import follow from "../sider-bar/follow.vue"
import join from "../sider-bar/join.vue"
import popular from "../sider-bar/popular.vue"
import viewed from "../sider-bar/viewed.vue"

</script>

<template>
    <div id="home-page">
        <div class="main-header">
            <div class="content-header">
                <div class="menu-header-left">
                    <ul class="list-menu">
                        <li> <a href=""><font-awesome-icon icon="fa-solid fa-house" /> Home</a></li>
                        <li> <a href="">$ Deal <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>
                        <li> <a href=""> Features <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>
                        <li> <a href=""> Mega menu post <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>
                        <li> <a href=""> Categories <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>
                        <li> <a href=""> Skin <font-awesome-icon icon="fa-solid fa-chevron-down" /></a></li>

                    </ul>
                </div>
                <div class="menu-header-right">
                    <a href="" class="icon-twitter"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt=""></a>
                    <a href="" class="icon-facebook"><img src="https://www.unipile.com/wp-content/uploads/2022/06/logo-facebook-noir.png" alt=""></a>
                    <a href="" class="icon-google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9uaFShAv2D-vHYv8tmW6G3LHW9Y_f7VzSA&usqp=CAU" alt=""></a>
                    <a href="" class="icon-instagram"><img src="https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt=""></a>
                    <a href="" class="icon-linkin"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt=""></a>
                    <a href="" class="icon-wifi"><img src="https://static.vecteezy.com/system/resources/previews/002/261/140/original/wifi-icon-wireless-internet-isolate-on-transparent-background-illustration-free-vector.jpg" alt=""></a>
                </div>
                <div class="icon-header"></div>
            </div>
        </div>
        <div class="main-site">
            <div class="main-sider-content">
                <div class="header-site">
                    <div class="logo-left"><img src="https://demo.theme-junkie.com/beginner/files/2016/02/logo.png" alt=""></div>
                    <div class="logo-right"><img src="https://demo.theme-junkie.com/beginner/files/2016/02/beginner-728x90.png" alt=""></div>
                </div>
                <div class="main-menu">
                    <div class="menu-header-left">
                        <ul class="list-menu">
                            <li> <a href=""><font-awesome-icon icon="fa-solid fa-house" /> Home</a></li>
                            <li> <a href="">$ Deal <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px" /></a></li>
                            <li> <a href=""> Features <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px" /></a></li>
                            <li> <a href=""> Mega menu post <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px" /></a></li>
                            <li> <a href=""> Categories <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>
                            <li> <a href=""> Skin <font-awesome-icon icon="fa-solid fa-chevron-down" style="font-size:12px"/></a></li>

                        </ul>
                    </div>
                    <input type="text" class="input" name="" id="" placeholder="Search">
                    <div class="btn-search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></div>
                    
                </div>
                <div class="main-validate">
                    <div class="title-top"><h1>DOWNLOAD YOUR FREE E-BOOK</h1></div>
                    <div class="title-mid"><h3>Sign Up Today for Free!</h3></div>
                    <div class="title-bot"><span>The form works with any Email Marketing sites such as MailChimp, AWeber, etc.</span></div>
                    <div class="form">
                        <input type="text" name="" id="" class="name" placeholder="Your Name">
                        <input type="text" name="" id="" class="name" placeholder="Your Email">
                        <button class="signup">SIGN UP</button>
                    </div>
                    
                </div>
                <div class="main-content">
                    <div class="main-content-left">
                        <div class="list-post">
                            <div v-for="index in 7" class="one-post">
                                <div class="title">How to succeed with marketing content?</div>
                                <div class="more-description">
                                    <img class="avatar-author" src="https://secure.gravatar.com/avatar/?s=32&d=mm&r=g"
                                        alt="">
                                    <div class="in-category">In: Đời sống</div>
                                    <div class="time-post">Last Updated: February 24, 2016</div>
                                </div>
                                <div class="fearture-image">
                                    <img src="https://demo.theme-junkie.com/beginner/files/2016/02/happy-680x380.jpg"
                                        alt="">
                                </div>
                                <div class="short-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie molestie nisl,
                                    eu scelerisque turpis tempus at. Nam luctus ultrices imperdiet. Class aptent taciti
                                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                                    velit orci, pretium ut feugiat nec, lobortis et est. Nullam cursus ultrices
                                    tincidunt. Nam gravida sem gravida ipsum dignissim in
                                </div>
                                <div class="read-more">
                                    <div class="read-more-btn">Đọc thêm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-side-bar">
                        <div class="box-sider-bar 2">
                        <div class="advertise"><advertise/></div>

                        </div>
                        <div class="box-sider-bar 1" >
                            <div class="categories"><categories/></div>
                        </div>
                        <div class="box-sider-bar 3">
                            <div class="follow"><follow/></div>


                        </div>
                        <div class="box-sider-bar 4">
                            <div class="join"><join/></div>


                        </div>
                        <div class="box-sider-bar 5">
                            <div class="popular"><popular/></div>


                        </div>
                        <div class="box-sider-bar 6">
                            <div class="viewed"><viewed/></div>


                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-search{
    font-size: 18px;
    background: rgba(236,236,236);

    height: 30px;
    padding: 3px;
}
.main-header {
    position: fixed;
    width: 100%;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    z-index: 99999;
}
.list-menu .fa-house{
    font-size: 12px;
}
.main-sider-content {
    width: 1060px;
    margin: 0 auto;
}

.menu-header-left ul li {
    float: left;
    padding-left: 10px;
}
.menu-header-left{
    flex: 1;
}
.form {
    margin-top: 30px;

}
.form .name{
    width: 180px;
    height: 40px;
    padding: 0 10px;
    margin: 5px;
    border: none;
    outline:none;
    font-size: 16px;
}

.main-header {
    background: rgb(255, 255, 255);
    height: 40px;
}

.content-header {
    display: flex;
    align-items: center;
    height: 100%;
    width: 1060px;
    margin: 0 auto;

}
ul {
list-style: none;
}
.menu-header-right img{
    width: 16px;
    height: 16px;
    color: black;
    opacity: 0.5;
    
}
.menu-header-right a{
    height: 30px;
    width: 30px;
    margin-top: 10px;
}

.menu-header-right{
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    
}
.input{
        box-shadow: rgb(0, 0, 0, 0.1) 0px 1px 1px 0px inset ;

    transition: 0.3s ease;
}
.input{
    background: rgba(236,236,236);
    border: none;
    outline: none;
    width: 110px;
    height: 30px;
    padding: 3px 30px 3px 8px ;
    font-size: 16px;
}
.input:hover{
    width: 136px;
    background:#e9e9e9;


}
.signup{
    height: 40px;
    width: 200px;
    background: #52b043;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 550;
}
.main-validate{
    margin-top: 15px;
    background: rgba(240,240,240,255);
    width: 1060px;
    height: 240px;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
.main-validate h1{
    color: white;
    font-size: 23px;
    font-weight: 550;
    
    
}
.main-validate .title-top{
    background: #368dd5;
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-validate .title-mid{
    margin-top: 20px;
}
.main-validate h3{
    font-weight: 550;

}
.main-validate .title-bot{
    margin-top: 20px;
}
.main-validate .title-bot span{
    font-size: 18px;
    font-weight: 400;
}




/* .menu-header-right .icon{
    width: 24px;
    height: 24px;
} */
.menu-header-right a:hover{
    background: #fafafa;
}

.content-header ul li {
    padding: 10px;
}

.content-header li a {
    text-decoration: none;
    color: black;
    opacity: 0.6;
    font-size: 14px;
}
.content-header li a:hover{
    opacity: 1;
   
}

.header-site {
    padding-top: 25px ;
    display: flex;
    height: 132px;
    /* background: pink; */
    align-items: center;
}
.header-site .logo-left{
    width: 300px;
    height: 90px;
    flex: 1;
}
.header-site .logo-right{
    width: 728px;
    height: 90px;
}
.header-site .logo-left:hover{
    width: 300px;
    height: 90px;
    flex: 1;
    cursor: pointer;
}
.header-site .logo-right:hover{
    width: 728px;
    height: 90px;
    cursor: pointer;
}

.main-sider-content {}

.main-menu {
    display: flex;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 53px;
    
}
.main-menu .menu-header-left{
    width: 800px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100%;
}
.main-menu ul li {
    padding: 10px 20px;
}

.main-menu li a {
    text-decoration: none;
    color: black;
    opacity: 0.8;
    font-size: 20px;
}
.main-menu li a:hover{
    opacity: 1;
   
}

.main-content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}

.main-content .main-content-left {
    width: 700px;
}

.main-content .main-side-bar {
    width: 340px;
    margin-left: 30px;
}

.list-post {}

.list-post .one-post {
    padding: 15px;
    border: 1px solid var(--border);
    margin-bottom: 20px;
}

.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.more-description {
    display: flex;
    margin-bottom: 20px;
    font-size: 13px;
    opacity: 0.4;
}

.more-description img.avatar-author {
    width: 20px;
    height: 20px;
}

.more-description>* {
    margin-right: 10px;
}

.fearture-image {
    width: 100%;
    height: 400px;
}

.fearture-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.short-description {
    padding: 10px 0;
}

.read-more-btn {
    background-color: #c21a30;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-family: "Droid Sans", sans-serif;
    padding: 12px 25px;
}

.main-side-bar>* {
    margin-bottom: 20px;
}

.box-sider-bar {
    border: 1px solid var(--border);
    /* padding: 10px; */
}
</style>
