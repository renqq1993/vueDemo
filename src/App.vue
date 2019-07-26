<template>
    <el-container>
      <el-header>
        <header></header>
      </el-header>
      <el-container>
          <el-aside width="200px">aside</el-aside>
          <el-container>
            <el-main>
              <router-view/>
            </el-main>
            <el-footer>footer</el-footer>
          </el-container>
      </el-container>
    </el-container>
</template>

<script>
import Header from '@/page/layout/Header'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
