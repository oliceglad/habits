window.addEventListener('DOMContentLoaded', function () {

  var button = document.getElementById('add_modal');
  var modal = document.getElementById('modal');
  var modalContainer = document.getElementById('modalContainer');

  // Инициализация памяти 
  function initialState() {
    if (localStorage.getItem('habit') == null) {
      $('.habit__none').show();
    } else {
      $('.habit__none').hide();
      $('.habit__list').html(localStorage.getItem('habit'));
    }
  }

  initialState();

  // Добавляем в память компьютера данные 
  function addToStorage() {
    let content = $('.habit__list').html();
    localStorage.setItem('habit', content);
  }

  // Добавляем привычку
  function addHabit(enter) {
    var habit = $('input').val()

    if (habit) {
      $('input').removeClass('error');
      modal.style.display = 'none';

      $('.habit__list').append(`
      <li class="habit__list-item">
        <div class="habit__list-item__up">
          <div class="habit__list-item__text">${habit}</div>
          <a href="#" class="habit__delete">
          <?xml version="1.0" encoding="iso-8859-1"?>
          <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="15px" height="15px" viewBox="0 0 612.043 612.043" style="enable-background:new 0 0 612.043 612.043;"
             xml:space="preserve">
          <g>
            <g id="cross">
              <g>
                <path d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
                  L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
                  c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
                  c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"/>
              </g>
            </g>
          </g>
          </svg>
          </a>
        </div>

        <ul class='habit__list-item__list'>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Пн</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Вт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Ср</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Чт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Пт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Сб</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Вск</a></li>
        </ul>
          
      </li>
      `);

      addToStorage()

      $('.habit__none').hide();

      habit = $('input').val('');
    } else if ((enter == 'enter') && (habit)) {
      $('input').removeClass('error');
      modal.style.display = 'none';

      $('.habit__list').append(`
      <li class="habit__list-item">
        <div class="habit__list-item__up">
          <div class="habit__list-item__text">${habit}</div>
          <a href="#" class="habit__delete">
          <?xml version="1.0" encoding="iso-8859-1"?>
          <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="15px" height="15px" viewBox="0 0 612.043 612.043" style="enable-background:new 0 0 612.043 612.043;"
             xml:space="preserve">
          <g>
            <g id="cross">
              <g>
                <path d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
                  L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
                  c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
                  c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"/>
              </g>
            </g>
          </g>
          </svg>
          </a>
        </div>

        <ul class='habit__list-item__list'>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Пн</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Вт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Ср</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Чт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Пт</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Сб</a></li>
          <li class='habit__list-item__list-link'><a href="#" class='list-link__a'>Вск</a></li>
        </ul>
          
      </li>
      `);

      addToStorage()

      $('.habit__none').hide();

      habit = $('input').val('');
    } else {
      $('input').addClass('error');
    }
  }

  // Удаляем привычку
  function deleteItem(item) {
    item.remove()
    var items = $('.habit__list-item')

    addToStorage()

    if (items.length == 0) {
      $('.habit__none').show();
      localStorage.removeItem('habit');
    }
  }


  // Добавить стиль для кнопки
  function addClassDate(item) {
    for( var i = 0; i < item.length; i++) {
      item[i].classList.toggle('on-date-link');
    }

    addToStorage()
  }

  // Функция срабатывающая при клике на кнопку с id add_habit
  $('body').on('click', '#add_habit', addHabit);

  // Функция срабатывающая при клике на кнопку с class habit__delete
  $('body').on('click', '.habit__delete', function () {
    var item = $(this).parents('.habit__list-item');

    console.log(item)

    deleteItem(item);
  });

  // Функция для того чтобы поставить выполненный день
  $('body').on('click', '.list-link__a', function(){
		let item = $(this).parents('.habit__list-item__list-link');
		addClassDate(item);
	});


  // date time
  function dateTime() {
    var day = new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return day
  }

  // Добавить дату в HTML
  document.getElementById('date').innerHTML = dateTime();

  // modal 

  // Функция обработки клика кнопки с плюсом
  button.onclick = function () {
    modal.style.display = 'block';
  }

  // Функция обработки клика свободной области
  window.onclick = function (event) {
    if (event.target == modalContainer) {
      modal.style.display = "none";
      $('input').removeClass('error');
    }
  }

  // Функция обработки нажатия клавиши Enter
  $(modal).keyup(function (e) {
    if (e.keyCode == 13) {
      addHabit('enter');
    }
  });


})