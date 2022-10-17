$(function() {

    $('.select').each(function() {
  
  
        var $this = $(this),
  
            selectOption = $this.find('option'),
  
            selectOptionLength = selectOption.length,
  
            selectedOption = selectOption.filter(':selected'),
  
            dur = 500;
  
        if (!selectedOption.length) selectedOption.eq(0);
  
        $this.hide();
  
        $this.wrap('<div class="select"></div>');
  
        $('<div>', {
  
            class: 'select__gap',
  
            text: selectedOption.text()
  
        }).insertAfter($this);
  
  
  
        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>', {
            class: 'select__list'
  
        }).insertAfter(selectGap);
  
        var selectList = selectGap.next('.select__list');
        var defaultLi;
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            let selected = selectOption.eq(i)[0] === selectedOption[0];
            let cls = selected ? 'select__item active default' : 'select__item';
            let li = $('<li>', {
                    class: cls,
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
            if (selected) defaultLi = li;
        }
        $this.on('reset', function() {
            defaultLi.click()
        })
        // Find all items
        var selectItem = selectList.find('li');
  
        selectList.slideUp(0);
     selectGap.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(dur);
             selectItem.on('click', function() {
                   var chooseItem = $(this).data('value'); 
  
                    $this.val(chooseItem);
                    selectGap.text($(this).find('span').text());
                    selectItem.removeClass('active');
                $(this).addClass('active');
                  selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
  
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });
  
    });
  
    $('.button').on('click', function() {
        $('[name="referrer"]').trigger('reset');
        
    })
  
  });
  
  
  // МОДАЛКА1
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  
  let allBtn = document.querySelectorAll('#modal'); /* Берем все кнопки */
  allBtn.forEach(function(element) {
      element.onclick = showModal;
  })
  
  function showModal() {
      modal.style.display = "block"; /* Выводим модальное окно */
  }
  
  span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
  // МОДАЛКА2
  let submitModal = document.getElementById("submitModal");
  let span3 = document.getElementsByClassName("close3")[0];
  let submit = document.querySelectorAll('#submit'); /* Берем все кнопки */
  submit.forEach(function(element) {
      element.onclick = showModal2;
  })
  
  function showModal2() {
      submitModal.style.display = "block"; /* Выводим модальное окно */
  }
    span3.onclick = function () {
      submitModal.style.display = "none";
      }
  
    window.onclick = function (event) {
      if (event.target == submitModal) {
        submitModal.style.display = "none";
      }
    }
  
  
  // var coll = document.getElementsByClassName("collapsible");
  // var i;
  
  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.maxHeight){
  //       content.style.maxHeight = null;
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //     }
  //   });
  // }
  
  
       let message = $('#alert')
  
    // Success function
    function doneFunction(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
            submitModal.style.display = "none";
        }, 2000);
    }