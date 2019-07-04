// 防抖函数 debounce  一个连续操作中的处理，只触发一次，从而实现防抖动。
function debounce(func, wait, options) {
  // 通过闭包保存一些变量
  let lastArgs, // 上一次执行 debounced 的 arguments，
    // 起一个标记位的作用，用于 trailingEdge 方法中，invokeFunc 后清空
    lastThis, // 保存上一次 this
    maxWait, // 最大等待时间，数据来源于 options，实现节流效果，保证大于一定时间后一定能执行
    result, // 函数 func 执行后的返回值，多次触发但未满足执行 func 条件时，返回 result
    timerId, // setTimeout 生成的定时器句柄
    lastCallTime // 上一次调用 debounce 的时间

  let lastInvokeTime = 0 // 上一次执行 func 的时间，配合 maxWait 多用于节流相关
  let leading = false // 是否响应事件刚开始的那次回调，即第一次触发，false 时忽略
  let maxing = false // 是否有最大等待时间，配合 maxWait 多用于节流相关
  let trailing = true // 是否响应事件结束后的那次回调，即最后一次触发，false 时忽略

  // 没传 wait 时调用 window.requestAnimationFrame()
  // window.requestAnimationFrame() 告诉浏览器希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画，差不多 16ms 执行一次
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')

  // 保证输入的 func 是函数，否则报错
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

  // 转成 Number 类型
  wait = +wait || 0

  // 获取用户传入的配置 options
  if (isObject(options)) {
    leading = !!options.leading
    // options 中是否有 maxWait 属性，节流函数预留
    maxing = 'maxWait' in options
    // maxWait 为设置的 maxWait 和 wait 中最大的，如果 maxWait 小于 wait，那 maxWait 就没有意义了
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  // ----------- 开闭定时器 -----------
  // 开启定时器
  function startTimer(pendingFunc, wait) {}

  // 取消定时器
  function cancelTimer(id) {}

  // 定时器回调函数，表示定时结束后的操作
  function timerExpired() {}

  // 计算仍需等待的时间
  function remainingWait(time) {}

  // ----------- 执行传入函数 -----------
  // 执行连续事件刚开始的那次回调
  function leadingEdge(time) {}

  // 执行连续事件结束后的那次回调
  function trailingEdge(time) {}

  // 执行 func 函数
  function invokeFunc(time) {}

  // 判断此时是否应该执行 func 函数
  function shouldInvoke(time) {}

  // ----------- 对外 3 个方法 -----------
  // 取消函数延迟执行
  function cancel() {}

  // 立即执行 func
  function flush() {}

  // 检查当前是否在计时中
  function pending() {}

  // ----------- 入口函数 -----------
  function debounced(...args) {
    // 获取当前时间
    const time = Date.now()
    // 判断此时是否应该执行 func 函数
    const isInvoking = shouldInvoke(time)

    // 赋值给闭包，用于其他函数调用
    lastArgs = args
    lastThis = this
    lastCallTime = time

    // 执行
    if (isInvoking) {
      // 无 timerId 的情况有两种：
      // 1、首次调用 
      // 2、trailingEdge 执行过函数
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }

      // 如果设置了最大等待时间，则立即执行 func
      // 1、开启定时器，到时间后触发 trailingEdge 这个函数。
      // 2、执行 func，并返回结果
      if (maxing) {
        // 循环定时器中处理调用
        timerId = startTimer(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    // 一种特殊情况，trailing 设置为 true 时，前一个 wait 的 trailingEdge 已经执行了函数
    // 此时函数被调用时 shouldInvoke 返回 false，所以要开启定时器
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }
    // 不需要执行时，返回结果
    return result
  }

  // 绑定方法
  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending

  // 返回入口函数 
  return debounced
}