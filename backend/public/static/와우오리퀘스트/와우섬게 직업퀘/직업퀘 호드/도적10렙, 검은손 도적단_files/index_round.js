function roundTable(objID) {
       var obj = document.getElementById(objID);
       var Parent, objTmp, Table, TBody, TR, TD;
       var bdcolor, bgcolor, Space;
       var trIDX, tdIDX, MAX;
       var styleWidth, styleHeight;

       // get parent node
       Parent = obj.parentNode;
       objTmp = document.createElement('SPAN');
       Parent.insertBefore(objTmp, obj);
       Parent.removeChild(obj);

       // get attribute
       bdcolor = obj.getAttribute('rborder');
       bgcolor = obj.getAttribute('rbgcolor');
       radius = parseInt(obj.getAttribute('radius'));
       if (radius == null || radius < 1) radius = 1;
       else if (radius > 6) radius = 6;

       MAX = radius * 2 + 1;
       
       /*
              create table {{
       */
       Table = document.createElement('TABLE');
       TBody = document.createElement('TBODY');

       Table.cellSpacing = 0;
       Table.cellPadding = 0;

       for (trIDX=0; trIDX < MAX; trIDX++) {
              TR = document.createElement('TR');
              Space = Math.abs(trIDX - parseInt(radius));
              for (tdIDX=0; tdIDX < MAX; tdIDX++) {
                     TD = document.createElement('TD');
                     
                     styleWidth = '1px'; styleHeight = '1px';
                     if (tdIDX == 0 || tdIDX == MAX - 1) styleHeight = null;
                     else if (trIDX == 0 || trIDX == MAX - 1) styleWidth = null;
                     else if (radius > 2) {
                            if (Math.abs(tdIDX - radius) == 1) styleWidth = '2px';
                            if (Math.abs(trIDX - radius) == 1) styleHeight = '2px';
                     }

                     if (styleWidth != null) TD.style.width = styleWidth;
                     if (styleHeight != null) TD.style.height = styleHeight;

                     if (Space == tdIDX || Space == MAX - tdIDX - 1) TD.style.backgroundColor = bdcolor;
                     else if (tdIDX > Space && Space < MAX - tdIDX - 1) TD.style.backgroundColor = bgcolor;
                     
                     if (Space == 0 && tdIDX == radius) TD.appendChild(obj);
                     TR.appendChild(TD);
              }
              TBody.appendChild(TR);
       }

       /*
              }}
       */

       Table.appendChild(TBody);
       
       // insert table and remove original table
       Parent.insertBefore(Table, objTmp);
}