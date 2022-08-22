/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #简单 #promise #built-in
  
  ### 题目
  
  假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
  
  例如：`Promise<ExampleType>`，请你返回 ExampleType 类型。
  
  ```ts
  type ExampleType = Promise<string>
  
  type Result = MyAwaited<ExampleType> // string
  ```
  
  > 这个挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 的文章：[original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4)
  
  > 在 Github 上查看：https://tsch.js.org/189/zh-CN
*/

type MyAwaited<T extends Promise<any>> = T extends PromiseLike<infer P> ? (P extends Promise<any> ? MyAwaited<P> : P) : T;

// infer 只能在条件语句里用 ，类似于设置一个未知数
