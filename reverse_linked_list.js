var reverseList = function(head) {
    
  let current = head
  let prev = null
  
  while (current != null) {
      // Save currents next value
      let temp = current.next
      // Point currents next value to the previous node
      current.next = prev
      // Set new previous node to current node
      prev = current
      // Advance current to the next value
      current = temp

  }
  // Set the head equal to the last value we encountered in the list upon traversal
  head = prev
  return head
};