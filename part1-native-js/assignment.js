// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div');
}


// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(className) {
  const div = document.createElement('div');

  div.className = className

  return div;
}


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
function updateTodoList(todoList) {
  const listItems = todoList.getElementsByTagName('li');

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent.startsWith('COMPLETED')) {
      listItems[i].remove();
    } else if (listItems[i].textContent.startsWith('URGENT')) {
      listItems[i].classList.add('important');
    }
  }
}


// Define a function named createList that takes one argument.
//   sites (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
function createList(sites) {
  const ul = document.createElement('ul');

  for (let title in sites) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.setAttribute('href', sites[title]);
    a.textContent = title;

    li.appendChild(a);
    ul.appendChild(li);
  }

  return ul;
}


// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.
function extractQuote(article) {
  const p = article.getElementsByTagName('p')[0];
  const firstQuoteIndex = p.textContent.indexOf('"');

  if (firstQuoteIndex < 0) {
    return;
  }

  // We assume there must be a closing quote
  const lastQuoteIndex = p.textContent.lastIndexOf('"');
  const blockquote = document.createElement('blockquote');

  // Include the last quote
  blockquote.textContent = p.textContent.substring(firstQuoteIndex, lastQuoteIndex + 1);

  article.replaceChild(blockquote, p);
  // Can also do
  // p.remove();
  // article.appendChild(blockquote)
}


// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
// non working copy
function createTable(data) {
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tfoot = document.createElement('tfoot');

  thead.appendChild(createTableRow(data[0], 'th'));
  tfoot.appendChild(createTableRow(data[data.length - 1], 'td'));

  for (let i= 1; i < data.length - 1; i++){
    tbody.appendChild(createTableRow(data[i], 'td'));
  }

  const table = document.createElement('table')
  
  table.appendChild(thead)
  table.appendChild(tbody)
  table.appendChild(tfoot);

  return table;
}

function createTableRow(dataRow, cellType) {
  const tr = document.createElement('tr');

  for (let i = 0; i < dataRow.length; i++){
      const td = document.createElement(cellType);

      td.textContent = dataRow[i];
      tr.appendChild(td);
  }
  
  return tr;
}
