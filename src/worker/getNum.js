/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-14 21:31:54
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-29 16:49:19
 * @FilePath: \appPla\src\worker\getNum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// importScripts(xxx)
// 使用完整的标准库，会注册到self上，tinygo 会有问题，注册不上去。
importScripts('/src/static/js/wasm_exec.js');
// 使用worker执行新的计算线程
const go = new Go();

self.onmessage = function (e) {
  let length = e.data
  // 调用wasm 进行数据处理
  fetch('/src/static/wasm/test.wasm')
    .then(response => {
      if (!response.ok) {
        throw new Error(`信息错误！`);
      }
      return WebAssembly.instantiateStreaming(response, go.importObject);
    })
    .then(obj => {
      const instance = obj.instance;
      go.run(instance);
      let exportFunc = instance.exports
      console.log(instance, 'instanceinstanceinstance')
      console.time("go")
      console.log(exportFunc.Fibonacci(BigInt(length))); // 示例中计算第30项
      console.timeEnd("go")
      const jsArray = [1n, 2n, 3n, 4n];

      // 将JavaScript数组转换为Int32Array以兼容WebAssembly
      const wasmArray = new BigInt64Array(jsArray);
      console.log(wasmArray,'wasmArraywasmArraywasmArray')
      console.log(exportFunc.SumArray(wasmArray), 'hhh'); // 示例中计算第30项

      
      // let alice = new UserInfo("Alice", "1234567890");
      // let bob = new UserInfo("Bob", "0987654321");
      // let userList = [alice, bob];
      // try {
      //   // let filteredPerson = instance.exports.FilterPerson(userList); // 这里可能需要实际的序列化逻辑
      //   console.log(instance.exports.FilterPerson([
      //     { Name: "bobo", PhoneNo: '17555555555' },
      //     { Name: "Alice", PhoneNo: '17555555555' }
      //   ]), '111111');
      // } catch (error) {
      //   console.error("Error calling FilterPerson:", error);
      // }
      // self.postMessage(instance.exports.Cal(length));
      // self.postMessage(exportFunc.Fibonacci(30n));
    })
    .catch((err) => {
      console.error('错误', err);
    });
  let sum = 0
  // for (let i = 0; i <= length; i++) {
  //   sum += i
  // }
  // self.postMessage(sum);
}