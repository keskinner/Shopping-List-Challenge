function addItem(){
    $('#js-shopping-list-form').submit(function(event){
  
      event.preventDefault();
      const item = $(this).find('input[name="shopping-list-entry"]');
      let itemVar = `
        <li>
          <span class="shopping-item">${item.val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;
      $('.shopping-list').append(itemVar);
      item.val('');
    });
    // delete item
    
    $('ul').on('click', '.shopping-item-delete', function(event){
      $(this).closest("li").remove();
    });
    // check item
    $('ul').on('click', '.shopping-item-toggle', function(event){
     
     $($(this).parent()).parent().children('span.shopping-item').toggleClass('shopping-item__checked');
     
    });
  }
  
  
  
  $(addItem);