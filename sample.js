function arrayElements ( __arr ) {
  if(!Array.isArray(__arr)) return // проверка на масив, ретурн (выход с проверки на масив)
        for ( var j = 0;  j < __arr.length;  j++ ) {
               console.log ( __arr [ j ] )
        }
}
arrayElements ([4,5,8])
arrayElements ([4,5])
