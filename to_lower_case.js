public String toLowerCase(String str) {
  char[] arr = str.toCharArray();
  for (int i = 0; i < arr.length; i++) {
      if (Character.isUpperCase(arr[i])) {
          arr[i] = (char)(arr[i] - 'A' + 'a');
      }
  }
  return new String(arr);
}