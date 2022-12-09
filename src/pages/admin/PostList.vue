<script setup>
</script>

<template>
    <div class="main-admin">
        <div class="tool-admin">
            <button class="btn-add"><router-link to="/admin/post-add">Thêm</router-link></button>
            
        </div>
        <div class="list-post">
            <table>
                <tr>
                    <th>Tên bài viết</th>
                    <th>Tác giả</th>
                    <th>Ngày tạo</th>
                    <th class="tool-header">Công cụ</th>
                </tr>
                <tr v-for="index in 10" class="one-post">
                    <td>How to succeed with marketing content?</td>
                    <td>Linh</td>
                    <td>February 24, 2016</td>
                    <td class="tool-header">
                        <div class="tool">
                            <div class="edit">Sửa</div>
                            <div class="delete">Xóa</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.main-admin {
    width: 1200px;
    margin: 0 auto;
}

.main-admin .list-post {}

.main-admin .list-post table {
    width: 100%;
    border-collapse: collapse;
}

.main-admin .list-post table,
.main-admin .list-post td,
.main-admin .list-post tr,
.main-admin .list-post th {
    border: 1px solid gray;
}

.main-admin .list-post td, .main-admin .list-post th{
    height: 40px;
    padding: 10px;
}

.tool {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.tool>* {
    width: 43px;
    border: 1px solid gray;
    text-align: center;
}

.tool-header {
    width: 100px;
}

.tool-admin{
    margin: 10px 0;
}

.btn-add{
    height: 40px;
    width: 100px;
}
</style>
