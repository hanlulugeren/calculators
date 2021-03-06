mergeInto(LibraryManager.library, 
{
  databack: function(data)
  {
    self.postMessage(Module['Pointer_stringify'](data));
  },
  stamp: function()
  {
    return Math.floor(new Date().getTime() / 1000);
  },
  tenths: function()
  {
    return Math.floor(new Date().getTime() / 100);
  },
  startSkipTest: function()
  {
    self.postMessage("51");   // Show Skip Test button on screen
  },
  endSkipTest: function()
  {
    self.postMessage("52");   // Hide Skip Test button from screen
  },
  getCunn: function(data)
  {
    var copyString = Module.cwrap('copyString', 'number', ['string']);
    var req = new XMLHttpRequest();
    req.open('GET', Module['Pointer_stringify'](data), false);
    req.send(null);
    if (req.status == 200)
    {
      copyString(req.responseText);
    }
  }
});
