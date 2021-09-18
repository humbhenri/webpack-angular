app.component("add", {
  bindings: {},
  controller: function () {
    this.sum = (a, b) => {
      console.log("sum");
      return parseInt(a) + parseInt(b);
    };

    console.log("blah");
  },
  templateUrl: "./add.html",
});
