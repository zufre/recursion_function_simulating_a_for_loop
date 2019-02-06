function loop(num) {

  count = 0;
  res = [];

  function test() {

    res.push(count);

    if (count <= num) {
      count += 1;
      console.log(res[res.length-1]);
       test();
    }

  }test()
}

loop(50);
