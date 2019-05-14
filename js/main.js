!function () {
  let duration = 40

  function writeCode (code) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    setTimeout(function fn () {
      n += 1
      container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        setTimeout(fn, duration)
      }
    }, duration)
  }

let code =
`
/*
 * 先画一个皮卡皮
 */
 
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
    padding-bottom: 20px;
}

/*
 * 再画一个小鼻基
 */
 
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}

/*
 * 画两个眼睛，更卡酷伊
 */

.eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}

/*
 * 添加眼白，更加生动
 */

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

/*
 * 调整位置
 */

.eye.right {
    left: 50%;
    margin-left: 90px;
}

/*
 * 画出小红脸
 */

.face {
    width: 68px;
    height: 68px;
    background-color: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}

/*
 * 画两个胡须
 */

.upperLip {
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 48px;
    background-color: #fee433;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-18deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(18deg);
}

/*
 * 画小舌头
 */

.lowerLip {
    height: 1000px;
    width: 130px;
    background-color: #990513;
    border-radius: 150px / 500px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -95px;
    width: 100px;
    height: 205px;
    background-color: #fc4a62;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 135px / 110px;
}

/*
 * 谢谢观看
 */
`
  writeCode(code)

  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 70
        break
      case 'normal':
        duration = 40
        break
      case 'fast':
        duration = 10
        break
    }
  })
}()
