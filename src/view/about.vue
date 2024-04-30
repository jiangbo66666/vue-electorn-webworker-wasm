<!--
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-13 16:06:07
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-28 11:18:56
 * @FilePath: \appPla\src\view\about.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='container'>
    <div>
      前端不是轻轻松松写起来，这是我计算出来的结果{{nums}}
    </div>
    <div>
      我的主线程在执行这个的值{{mainNum}},第一个值是开启的新的worker在新的线程下执行的
    </div>
    <div>
      主线程还有一个计算值，我看看会不会影响正常渲染{{mainSum}}
    </div>
  </div>
</template>
<script setup lang="ts">
  import {ref, onMounted} from "vue"
  function fibonacci(n: any) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  // 必须要引入go和js的粘合文件
  let length = 40;
  
  // import.meta是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta
  let nums = ref(0)
  let mainNum = ref(0)
  // 开启新的线程,可用于计算非直接渲染的数据,不影响页面的更新,防止页面的阻塞。
  // 不添加type=model 可以正常加载go , 使用go 编译出来的所有wasm方法，挂载到worker上，通过worker处理
  let goCalculate = new Worker(new URL('@src/worker/getNum.js', import.meta.url))
  // 设置worker接收消息的进程
  goCalculate.onmessage = (res)=>{
    if(res.data) {
      nums.value = res.data
      setTimeout(()=>{
        // 关闭worker 进程
        goCalculate.terminate()
      })
    }
  }
  goCalculate.postMessage(length);
  //斐波那契js计算时间
  console.time('JavaScript');
  console.log(fibonacci(length)); // 示例中计算第30项
  console.timeEnd('JavaScript');

  let mainSum = ref(0)
  // 影响主线程的计算，需要放到新线程中去
  // 主线程下的数据更新，只能使用非大量计算的ui更新
  setInterval(() => {
    mainNum.value++
  }, 100);



</script>
<style scoped>
</style>
