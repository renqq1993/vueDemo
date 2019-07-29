<template>
    <div>
        <!-- 滚动条 -->
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollase"
                backgroumd-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                collapse-transition="true"
                mode="vertical"
            >
            </el-menu>
        </el-scrollbar>
    </div>
</template>
// el-menu default-active是为了浏览器刷新后，仍然可以定位到之前选中的路由。
