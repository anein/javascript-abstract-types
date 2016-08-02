/**
 *
 * Stack is a list of elements that are accessible only from one end of the list,
 * with is called the top.
 *
 */
export class Stack {

  /**
   * Creates an instance of Stack.
   */
  constructor() {

    // stores the stack elements
    this.dataStore = [];

    // the top of the stack
    this.top = 0;

  }

  /**
   * Push a new element onto a stack.
   *
   * @param {(number|string)} element - new element of the stack
   */
  push( element ) {
    this.dataStore[ this.top++ ] = element;
  }

  /**
   * Returns the element in the top position of the stack and decrements the top.
   *
   * @return {(number|string)} the element of the stack
   */
  pop() {
    return this.dataStore[ --this.top ];
  }

  /**
   * Returns the top element
   *
   * @return {(number|string)}
   */
  peek() {
    return this.dataStore[ this.top - 1 ];
  }

  /**
   * Clears a stack.
   */
  clear() {
    this.top = 0;
  }

  /**
   * Returns count of elements in the stack.
   *
   * @return {number} the value of the top variable.
   */
  length() {
    return this.top;
  }

}
