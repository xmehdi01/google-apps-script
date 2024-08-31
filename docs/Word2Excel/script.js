function createExcelSheetFromGoogleDoc() {
    // Replace with the ID of your Google Doc
    var docId = 'your-doc-id-here';
    var doc = DocumentApp.openById(docId);
    var docName = doc.getName();
    var body = doc.getBody();
    var data = body.getText();
    
    var lines = data.trim().split('\n');
    var spreadsheet = SpreadsheetApp.create(docName);
    var sheet = spreadsheet.getActiveSheet();
    
    // Set header row
    sheet.getRange('A1').setValue('SP');
    sheet.getRange('B1').setValue('Fr');
    sheet.getRange('C1').setValue('En');
  
    var row = 2;
    
    for (var i = 0; i < lines.length; i++) {
      var parts = lines[i].trim().split(';');
      
      if (parts.length !== 3 || parts[0] === '' || parts[1] === '' || parts[2] === '') {
        continue;
      }
      
      sheet.getRange(row, 1).setValue(parts[0]);
      sheet.getRange(row, 2).setValue(parts[1]);
      sheet.getRange(row, 3).setValue(parts[2]);
      row++;
    }
  }