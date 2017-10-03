const utils = {
  /**
   * This function is anonymous, is executed immediately and
   * the return value is assigned to URLParams!
   * 
   * @returns 
   */
  URLParams() {
    var queryString = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof queryString[pair[0]] === "undefined") {
        queryString[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof queryString[pair[0]] === "string") {
        var arr = [queryString[pair[0]], decodeURIComponent(pair[1])];
        queryString[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        queryString[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return queryString;
  },

  /**
   * 
   * 
   * @param {any} elem
   * @param {any} className
   * @returns
   */
  hasClass(elem, className) {
    if (elem.classList)
      return elem.classList.contains(className)
    else
      return !!elem.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  },

  /**
   * 
   * 
   * @param {any} elem
   * @param {any} className
   */
  addClass(elem, className) {
    if (elem.classList)
      elem.classList.add(className)
    else if (!this.hasClass(elem, className)) elem.className += " " + className
  },

  /**
   * 
   * 
   * @param {any} elem
   * @param {any} className
   */
  removeClass(elem, className) {
    if (elem.classList)
      elem.classList.remove(className)
    else if (this.hasClass(elem, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      elem.className = elem.className.replace(reg, ' ')
    }
  },

  /**
   * 
   * 
   * @param {any} element
   * @param {any} parentElement
   */
  setFocus(element, parentElement) {
    let prevStyle = ''
    let draggableElems = document.querySelectorAll('.draggable')
    let canvas = document.getElementById('canvas')
    for (let i = 0, len = draggableElems.length; i < len; i++) {
      this.looseFocus(draggableElems[i], parentElement)
      this.looseFocus(canvas, parentElement)
    }
    this.addClass(element, 'focus')
  },

  /**
   * 
   * 
   * @param {any} element
   * @param {any} parentElement
   */
  looseFocus(element, parentElement) {
    let prevStyle = ''
    this.removeClass(elem, 'focus')
  },

  /**
   * 
   * 
   * @param {any} HTML
   */
  str2DOMElement(HTML) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(HTML);
    frame.contentDocument.close();
    var element = frame.contentDocument.body.childNodes;
    document.body.removeChild(frame);
    return element;
  }

};

export default utils;
