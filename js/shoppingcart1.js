$(function () {
  var t = $("#quantity");
  $("#add").click(function () {
    t.val(parseInt(t.val()) + 1);
    $("#min").removeAttr("disabled"); //當按加1時，解除$("#min")不可讀狀態
    setTotal();
  })
  $("#min").click(function () {
    if (parseInt(t.val()) > 0) { //判斷數量值大於1時才可以減少
      t.val(parseInt(t.val()) - 1)
    } else {
      $("#min").attr("disabled", "disabled")
    }
    setTotal();
  })

  function setTotal() {
    $("#total").html((parseInt(t.val()) * 450).toFixed(2));
  }
  setTotal();
})