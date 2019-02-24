$(() => {
  $(".form-horizontal").bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    //3. 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空

          notEmpty: {
            message: "用户名不能为空"
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名长度必须在2到6之间"
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          callback: {
            message: "密码错误"
          },
          //不能为空
          notEmpty: {
            message: "密码不能为空"
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须在6到12之间"
          }
        }
      }
    }
  });
  $(".form-horizontal").on("success.form.bv", function(e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      dataType: "json",
      data: $(".form-horizontal").serialize(),
      success(info) {
        if (info.error === 1000) {
          $(".form-horizontal")
            .data("bootstrapValidator")
            .updateStatus("username", "INVALID", "callback");
        }
        if (info.error === 1001) {
          console.log(
            $(".form-horizontal")
              .data("bootstrapValidator")
              .updateStatus("password", "INVALID", "callback")
          );
        }
        if (info.success) {
          location.href = "index.html";
        }
      }
    });
  });
  $('[type="reset"]').on("click", () => {
    $(".form-horizontal")
      .data("bootstrapValidator")
      .resetForm();
  });
});
