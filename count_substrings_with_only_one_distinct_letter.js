public int countLetters(String S) {
  int count = 0;
  for(int l=0,r=0;r<S.length();){
      if(S.charAt(r) == S.charAt(l)){
          count+=(r-l+1);
          //increase the size of the window
          r++;
      }
      else{
         //reset window
         l=r;
      }
  }
  return count;
}