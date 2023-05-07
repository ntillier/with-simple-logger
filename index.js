function formatToAST (string) {
    const ast = [];
    const pattern = /{{(.+?)}}/;
  
    while (string.length > 0) {
      const match = pattern.exec(string);
  
      if (!match) {
        ast.push({
          type: 'text',
          data: string
        });
        string = '';
      } else {
        if (match.index !== 0) {
          ast.push({
            type: 'text',
            data: string.substring(0, match.index)
          });
          string = string.slice(match.index);
        }
  
        ast.push({
          type: 'selector',
          data: match[1].trim()
        });
        string = string.slice(match[0].length)
      }
      
    }
  
    return ast;
  }
  
  function findWithSelector (obj, selector) {
    const segments = selector.split('.');
    let index = 0;
  
    for (var i of segments) {
      if (i in obj) {
        if (index === segments.length - 1) {
          return obj[i];
        } else {
          obj = obj[i];
        }
      } else {
        break;
      }
      index += 1;
    }
  
    return undefined;
  }
  
  
  
  module.exports = function createLogger (format) {
    const ast = formatToAST(format);
    
    return function (args) {
      return ast.map((i) => {
        if (i.type === 'text') {
          return i.data;
        } else if (i.type === 'selector') {
          return findWithSelector(args, i.data);
        }
      }).join('');
    }
  }