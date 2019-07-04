
// 标记语句
firstLoop:
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        continue firstLoop; // 继续 firstLoop 循环
        // break firstLoop; // 中止 firstLoop 循环
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      continue
    }
    // console.log(`i = ${i}, j = ${j}`);
  }
}