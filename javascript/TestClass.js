export default class TestClass {

  constructor() {
      console.log("in the class");
      var put = document.getElementById("put");
      put.innerHTML += " executed twice";
  }

}