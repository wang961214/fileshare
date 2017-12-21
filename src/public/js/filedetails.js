$(function () {
  var fileId = window.location.href.substr(window.location.href.length - 1, 1)
  console.log(fileId);
  //window.localStorage.getItem('fileId',fileId);
  $.ajax({
    url: "/api/files/:id",    //请求的url地址
    dataType: "json",   //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: { fileId: fileId },    //参数值
    type: "post",   //请求方式
    success: function (data) {
      //请求成功时处理
      console.log(data);
      //newfiledetails(data,'.details');
      var newName = $('<td>' + data[0].filename + '</td>');
      var newType = $('<td>' + data[0].type + '</td>');
      var newSize = $('<td>' + data[0].size + '</td>');
      $('.details table tbody tr').append(newName);
      $('.details table tbody tr').append(newType);
      $('.details table tbody tr').append(newSize);
    },
    error: function () {
      //请求出错处理
    }
  });

  $('.download').on('click', function () {
    window.location.href = "/user/download?id=" + fileId;
  });
});

// $(function () {
//   $('.download').on('click', function () {
  //   $.ajax({
  //     url: '/user/:id',
  //     type: 'get',
  //     success: function (data) {
  //       console.log('hello');
  //     },
  //     error: function (err) {
  //       alert('数据库查询失败');
  //     }
  //   });
//   });
// })