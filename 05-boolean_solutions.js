// 01
function numbers_ranges(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

// 02
function diff_num(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}

// 03
function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}

// 04
function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}

// 05
function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
    return str1;
  }
  return "Py" + str1;
}

// 06
function front_back3(str) {
  if (str.length >= 3) {
    str_len = 3;

    back = str.substring(str.length - 3);
    return back + str + back;
  } else return false;
}

// 07
function max_of_three(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  } else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

// 08
function near_100(x, y) {
  if (x != y) {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);

    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
    return 0;
  } else return false;
}

// 09
function check_char(str1, char) {
  ctr = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) return true;
  return false;
}

// 10
function last_digit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
  } else return false;
}
