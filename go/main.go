/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-25 15:19:34
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-29 09:42:01
 * @FilePath: \park-gkanban-frontendc:\Users\jiang\Desktop\go-wasm\main.go
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// go 打包wash
package main

import "fmt"

// import "syscall/js"

// func main() {
// 	js.Global().Set("Cal", js.FuncOf(Cal))
// 	js.Global().Set("add", js.FuncOf(add))
// 	select {}
// }

// // for (let i = 0; i <= length; i++) {
// //     sum += i
// //   }
// //export Cal
// func Cal(this js.Value, args []js.Value) interface{} {
// 	total := 0
// 	total = ((0 + args[0].Int()) * args[0].Int()) / 2
// 	return total
// }

// func add(this js.Value, inputs []js.Value) interface{} {
// 	a := inputs[0].Int()
// 	b := inputs[1].Int()
// 	return a + b
// }

// tinygo 打包wasm
func main() {
}

// type UserInfo struct {
// 	Name    string
// 	PhoneNo string
// }
//export Fibonacci
func Fibonacci(n int64) int64 {
	if n <= 1 {
		return n
	}
	return Fibonacci(n-1) + Fibonacci(n-2)
}

//export SumArray
func SumArray(array []int64) int64 {
	fmt.Println("ssss", array)
	var sum int64
	for _, v := range array {
		sum += v
	}
	return sum
}

//export Cal
func Cal(length int) int {
	total := 0
	for i := 0; i <= length; i++ {
		total += i
	}
	return total
}
